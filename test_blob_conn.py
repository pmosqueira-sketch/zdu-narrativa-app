from azure.storage.blob import BlobServiceClient
import os
from dotenv import load_dotenv

load_dotenv()

account = os.getenv("AZURE_STORAGE_ACCOUNT")
key = os.getenv("AZURE_STORAGE_ACCESS_KEY")
container = os.getenv("AZURE_CONTAINER_NAME")

try:
    conn_str = f"DefaultEndpointsProtocol=https;AccountName={account};AccountKey={key};EndpointSuffix=core.windows.net"
    blob_service_client = BlobServiceClient.from_connection_string(conn_str)
    container_client = blob_service_client.get_container_client(container)
    
    print("Conectado a Azure Blob Storage. Archivos en el contenedor:")
    for blob in container_client.list_blobs():
        print("-", blob.name)
except Exception as e:
    print("Error al conectar con Azure Blob:", e)
