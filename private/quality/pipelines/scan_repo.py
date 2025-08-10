#!/usr/bin/env python3
"""scan_repo.py — Inventario de contenidos para QUALITY Console"""
import argparse, os, json, datetime
from pathlib import Path
IGNORES = {'.DS_Store',}
SKIP_DIRS = {'__MACOSX', '.git', 'node_modules', '.venv', 'venv', 'dist', 'build'}
EXT_KIND = {'.md':'md','.json':'json','.js':'js','.py':'py','.html':'html','.htm':'html','.css':'css'}
PURPOSE_BY_DIR = {'checkpoints':'checkpoint','console':'ui','pipelines':'pipeline','logs':'logs','infra':'infra','quality':'quality','universe':'universe','private':'private'}
def classify_kind(path: Path) -> str: return EXT_KIND.get(path.suffix.lower(), 'other')
def guess_purpose(path: Path) -> str:
    parts = set(p.lower() for p in path.parts)
    for k,v in PURPOSE_BY_DIR.items():
        if k in parts: return v
    return 'other'
def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--base", required=True)
    ap.add_argument("--out", required=True)
    ap.add_argument("--owner", default="quality-team")
    args = ap.parse_args()
    base = Path(args.base).resolve()
    items = []
    for root, dirs, files in os.walk(base):
        dirs[:] = [d for d in dirs if d not in SKIP_DIRS and not d.startswith('.')]
        for f in files:
            if f in IGNORES: continue
            p = Path(root) / f
            try: st = p.stat()
            except Exception: continue
            rel = '/' + str(p.relative_to(base).as_posix())
            kind = classify_kind(p)
            purpose = guess_purpose(p)
            items.append({
                "path": rel, "kind": kind, "purpose": purpose, "owner": args.owner,
                "size_bytes": st.st_size,
                "last_modified": datetime.datetime.fromtimestamp(st.st_mtime, tz=datetime.timezone.utc).isoformat(),
                "status": "ok", "notes": "", "tags": [purpose, kind]
            })
    with open(args.out, "w", encoding="utf-8") as f: json.dump(items, f, indent=2, ensure_ascii=False)
    print(f"Wrote {len(items)} items -> {args.out}")
if __name__ == "__main__": main()