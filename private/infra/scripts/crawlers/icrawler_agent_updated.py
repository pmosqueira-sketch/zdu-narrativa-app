# Updated iCrawler Agent – Auditoría de archivos no .md
import os
import json
from datetime import datetime

ROOT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "../../../.."))
OUTPUT_PATH = os.path.join(ROOT_DIR, "private", "logs", "crawl_audit_2025_08_04_201237.json")

EXCLUDED_DIRS = {".git", "__pycache__", ".venv", "node_modules"}
EXCLUDED_EXTENSIONS = {".md", ".DS_Store"}

INCLUDED_EXTENSIONS = {
    ".json", ".js", ".cjs", ".py", ".txt", ".html", ".zip",
    ".png", ".jpg", ".jpeg", ".svg", ".webp"
}

results = {
    "agent": "iCrawler",
    "timestamp": datetime.now().isoformat(),
    "files": [],
    "summary": {}
}

for dirpath, dirnames, filenames in os.walk(ROOT_DIR):
    rel_dir = os.path.relpath(dirpath, ROOT_DIR)
    if any(excluded in rel_dir.split(os.sep) for excluded in EXCLUDED_DIRS):
        continue

    for filename in filenames:
        if any(filename.lower().endswith(ext) for ext in EXCLUDED_EXTENSIONS):
            continue

        full_path = os.path.join(dirpath, filename)
        rel_path = os.path.relpath(full_path, ROOT_DIR)
        ext = os.path.splitext(filename)[1].lower()

        if ext in INCLUDED_EXTENSIONS:
            stats = os.stat(full_path)
            results["files"].append({
                "path": rel_path,
                "name": filename,
                "type": ext,
                "size_bytes": stats.st_size,
                "last_modified": datetime.fromtimestamp(stats.st_mtime).isoformat()
            })

results["summary"]["total_files"] = len(results["files"])

os.makedirs(os.path.dirname(OUTPUT_PATH), exist_ok=True)
with open(OUTPUT_PATH, "w", encoding="utf-8") as f:
    json.dump(results, f, indent=2)

print(f"✅ Auditoría completa. Resultado guardado en: {OUTPUT_PATH}")
