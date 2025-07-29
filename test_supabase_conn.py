from supabase import create_client
import os
from dotenv import load_dotenv

load_dotenv()

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")

supabase = create_client(SUPABASE_URL, SUPABASE_KEY)

try:
    response = supabase.table("heroes").select("*").limit(3).execute()
    print("Supabase conectado. Ejemplo de datos de 'heroes':")
    print(response.data)
except Exception as e:
    print("Error al conectar con Supabase:", e)
