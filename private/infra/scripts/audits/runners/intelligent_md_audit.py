
import os
import json
from datetime import datetime

def analyze_md_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    lines = content.splitlines()
    return {
        "path": path,
        "lines": len(lines),
        "has_title": any(line.startswith("#") for line in lines),
        "warnings": [
            "Archivo muy corto" if len(lines) < 10 else None,
            "Falta título" if not any(line.startswith("#") for line in lines) else None
        ]
    }

root_path = "/mnt/data/zdu-narrativa-app-2/zdu-narrativa-app"
results = []
for dirpath, _, filenames in os.walk(root_path):
    for filename in filenames:
        if filename.lower().endswith(".md"):
            full_path = os.path.join(dirpath, filename)
            results.append(analyze_md_file(full_path))

output = {
    "agent": "INTELGEN-MD-AUDIT",
    "timestamp": datetime.now().isoformat(),
    "total_files": len(results),
    "readme_audit": results
}

# Guardar resultados
output_path = "private/infra/scripts/logs/md_audit_results.json"
with open(output_path, "w", encoding="utf-8") as f:
    json.dump(output, f, indent=2)
