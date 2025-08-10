#!/usr/bin/env python3
"""sec_posture.py — Hallazgos básicos de postura de seguridad"""
import argparse, os, json, datetime, re
from pathlib import Path
SECRET_PATTERNS = [r'API_KEY\s*=\s*[\w-]{16,}', r'JWT\s*=\s*[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+', r'PASSWORD\s*=\s*.{6,}']
HTACCESS_HINT = r'RewriteRule|Redirect'
TEXT_EXTS = {'.env','.txt','.md','.js','.ts','.py','.json','.yaml','.yml','.htaccess','.conf'}
def scan_file_for_secrets(p: Path):
    findings = []
    try: text = p.read_text(encoding="utf-8", errors="ignore")
    except Exception: return findings
    for pat in SECRET_PATTERNS:
        if re.search(pat, text): findings.append(("secret", f"Patrón coincide: {pat}"))
    if p.name == ".htaccess" and re.search(HTACCESS_HINT, text, re.IGNORECASE):
        findings.append(("htaccess", "Reglas de reescritura/redirección detectadas; validar loops"))
    return findings
def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--base", required=True)
    ap.add_argument("--out", required=True)
    ap.add_argument("--owner", default="security-team")
    args = ap.parse_args()
    base = Path(args.base).resolve()
    results = []; now = datetime.datetime.now(datetime.timezone.utc).isoformat()
    for root, _, files in os.walk(base):
        for f in files:
            p = Path(root) / f
            if p.suffix.lower() not in TEXT_EXTS and p.name != ".htaccess": continue
            for typ, evidence in scan_file_for_secrets(p):
                results.append({"timestamp": now,"type": typ,"target": '/' + str(p.relative_to(base).as_posix()),"severity": "high" if typ == "secret" else "medium","evidence": evidence,"recommended_fix":"Mover secretos a manager/rotar; revisar .htaccess","owner": args.owner,"status": "open"})
    with open(args.out, "w", encoding="utf-8") as f: json.dump(results, f, indent=2, ensure_ascii=False)
    print(f"Wrote {len(results)} findings -> {args.out}")
if __name__ == "__main__": main()