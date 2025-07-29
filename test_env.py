import os
from dotenv import load_dotenv

# Cargar archivo .env
load_dotenv()

# Verificar variables
print("Variables cargadas:")
print("SUPABASE_URL:", os.getenv("SUPABASE_URL"))
print("SUPABASE_KEY:", os.getenv("SUPABASE_KEY"))
print("AZURE_STORAGE_ACCOUNT:", os.getenv("AZURE_STORAGE_ACCOUNT"))
print("AZURE_CONTAINER_NAME:", os.getenv("AZURE_CONTAINER_NAME"))
print("DEBUG:", os.getenv("DEBUG"))
