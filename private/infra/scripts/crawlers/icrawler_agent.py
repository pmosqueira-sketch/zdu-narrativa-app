# icrawler_agent.py

import os
import json
from datetime import datetime

ROOT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "../../../.."))
OUTPUT_PATH = os.path.join(ROOT_DIR, "private", "infra", "scripts", "logs", "crawl_audit_2025_08_03.json")

RESULTS = {
    "agent": "iCrawler",
    "timestamp": datetime.now().isoformat(),
    "directories": [],
    "files": [],
    "readmes": [],
    "summary": {}
}

for dirpath, dirnames, filenames in os.walk(ROOT_DIR):
    rel_path = os.path.relpath(dirpath, ROOT_DIR)

    if rel_path.startswith(".git") or "/.git/" in rel_path:
        continue

    RESULTS["directories"].append(rel_path)

    for filename in filenames:
        file_path = os.path.join(rel_path, filename)
        RESULTS["files"].append(file_path)

        if filename.lower() == "readme.md":
            RESULTS["readmes"].append(file_path)

RESULTS["summary"]["total_dirs"] = len(RESULTS["directories"])
RESULTS["summary"]["total_files"] = len(RESULTS["files"])
RESULTS["summary"]["total_readmes"] = len(RESULTS["readmes"])

os.makedirs(os.path.dirname(OUTPUT_PATH), exist_ok=True)

with open(OUTPUT_PATH, "w") as f:
    json.dump(RESULTS, f, indent=2)

print(f"✅ iCrawler audit complete. Output saved to: {OUTPUT_PATH}")