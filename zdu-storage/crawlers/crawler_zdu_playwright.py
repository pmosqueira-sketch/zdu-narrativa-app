import os
import asyncio
from dotenv import load_dotenv
from supabase import create_client
from datetime import datetime
from playwright.async_api import async_playwright

# Cargar variables del entorno
load_dotenv()
SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")
supabase = create_client(SUPABASE_URL, SUPABASE_KEY)

async def fetch_and_store():
    # Leer URLs desde la tabla crawler_input con status 'pendiente'
    response = supabase.table("crawler_input").select("*").eq("status", "pendiente").execute()
    urls = response.data

    if not urls:
        print("No hay URLs nuevas en crawler_input.")
        return

    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()

        for row in urls:
            url = row["url"]
            print(f"Procesando: {url}")
            try:
                await page.goto(url, wait_until="networkidle", timeout=15000)
                await page.wait_for_load_state("networkidle")
                html = await page.content()
                timestamp = datetime.utcnow().isoformat()

                # Guardar contenido en tabla crawler_output
                supabase.table("crawler_output").insert({
                    "url": url,
                    "contenido_html": html,
                    "timestamp": timestamp
                }).execute()

                # Marcar como procesada en crawler_input
                supabase.table("crawler_input").update({
                    "status": "procesado"
                }).eq("id", row["id"]).execute()

            except Exception as e:
                print(f"Error con {url}: {e}")
                supabase.table("crawler_input").update({
                    "status": "error"
                }).eq("id", row["id"]).execute()

        await browser.close()

if __name__ == "__main__":
    asyncio.run(fetch_and_store())
