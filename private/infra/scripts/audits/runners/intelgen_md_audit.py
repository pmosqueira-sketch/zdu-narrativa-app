
import os
import json
from datetime import datetime

# Ruta raíz del proyecto
PROJECT_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "../../../.."))

# Subcarpetas a auditar
subfolders = [
    "private/quality",
    "private/framework",
    "private/rules",
    "private/recalc",
    "private/campaigns",
    "private/universe",
]

# Recolectar resultados de auditoría
results = []

for folder in subfolders:
    full_path = os.path.join(PROJECT_ROOT, folder)
    if not os.path.exists(full_path):
        results.append({
            "path": folder,
            "status": "missing",
            "message": "Directorio no encontrado"
        })
        continue

    for root, _, files in os.walk(full_path):
        for file in files:
            if file.endswith(".md"):
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, "r", encoding="utf-8") as f:
                        content = f.read()
                    status = "valid" if len(content.strip()) > 0 else "empty"
                    results.append({
                        "path": os.path.relpath(file_path, PROJECT_ROOT),
                        "status": status,
                        "lines": len(content.splitlines())
                    })
                except Exception as e:
                    results.append({
                        "path": os.path.relpath(file_path, PROJECT_ROOT),
                        "status": "error",
                        "error": str(e)
                    })

# Output
output_path = os.path.join(PROJECT_ROOT, "private/infra/scripts/audits/logs/audit_md_output.json")
os.makedirs(os.path.dirname(output_path), exist_ok=True)

with open(output_path, "w", encoding="utf-8") as f:
    json.dump(results, f, indent=2)

print("Auditoría de archivos .md completada.")
print(f"Resultado guardado en: {output_path}")
