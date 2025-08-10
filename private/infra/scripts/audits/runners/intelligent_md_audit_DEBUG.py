
import os
import json
from datetime import datetime

root_path = "."

print("🔍 Iniciando escaneo desde:", os.path.abspath(root_path))
results = []
scanned_dirs = 0
found_files = 0

def analyze_md_file(path):
    global found_files
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    lines = content.splitlines()
    found_files += 1
    print(f"✅ README.md encontrado: {path} ({len(lines)} líneas)")
    return {
        "path": path,
        "lines": len(lines),
        "has_title": any(line.startswith("#") for line in lines),
        "warnings": [
            "Archivo muy corto" if len(lines) < 10 else None,
            "Falta título" if not any(line.startswith("#") for line in lines) else None
        ]
    }

for dirpath, _, filenames in os.walk(root_path):
    scanned_dirs += 1
    print(f"📁 Escaneando: {dirpath}")
    for filename in filenames:
        if filename.lower() == "readme.md":
            full_path = os.path.join(dirpath, filename)
            results.append(analyze_md_file(full_path))

print(f"🔎 Total carpetas escaneadas: {scanned_dirs}")
print(f"📄 Total README.md encontrados: {found_files}")

output = {
    "agent": "INTELGEN-MD-AUDIT",
    "timestamp": datetime.now().isoformat(),
    "total_files": found_files,
    "readme_audit": results
}

output_path = "private/infra/scripts/logs/md_audit_results.json"
os.makedirs(os.path.dirname(output_path), exist_ok=True)
with open(output_path, "w", encoding="utf-8") as f:
    json.dump(output, f, indent=2)

print(f"✅ Auditoría completada. Log generado en: {output_path}")
