#!/usr/bin/env python3
"""Generate KPIs JSON for QUALITY Console.
Usage:
  python generate_kpis.py --out /path/to/kpis_quality.json [--campaigns-csv ./campaigns_sample.csv]
"""
import argparse, csv, json, datetime, os
def compute_from_csv(csv_path):
    sent = opened = hb = 0
    with open(csv_path, newline='', encoding='utf-8') as f:
        r = csv.DictReader(f)
        for row in r:
            sent += int(row.get("sent", 0)); opened += int(row.get("opened", 0)); hb += int(row.get("hard_bounce", 0))
    open_rate = (opened / sent * 100.0) if sent else 0.0
    hb_rate = (hb / sent * 100.0) if sent else 0.0
    return open_rate, hb_rate
def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--out", required=True)
    ap.add_argument("--campaigns-csv")
    ap.add_argument("--target-open", type=float, default=25.0)
    ap.add_argument("--target-hb", type=float, default=2.0)
    ap.add_argument("--critical-findings", type=int, default=0)
    ap.add_argument("--http-200-rate", type=float, default=99.0)
    args = ap.parse_args()
    now = datetime.datetime.now(datetime.timezone.utc).isoformat()
    if args.campaigns_csv and os.path.exists(args.campaigns_csv):
        open_rate, hb_rate = compute_from_csv(args.campaigns_csv)
    else:
        open_rate, hb_rate = 28.5, 1.8
    kpis = [
        {"timestamp": now, "category":"campaigns","name":"open_rate","value": round(open_rate,2), "target": args.target_open, "unit":"%","status":"ok" if open_rate >= args.target_open else "warn","trend":"up","window":"7d"},
        {"timestamp": now, "category":"campaigns","name":"hard_bounce_rate","value": round(hb_rate,2), "target": args.target_hb, "unit":"%","status":"ok" if hb_rate <= args.target_hb else "fail","trend":"down","window":"7d"},
        {"timestamp": now, "category":"security","name":"critical_findings","value": args.critical_findings, "target": 0, "unit":"count","status":"ok" if args.critical_findings==0 else "warn","trend":"flat","window":"24h"},
        {"timestamp": now, "category":"infra","name":"http_200_rate","value": args.http_200_rate, "target": 99.0, "unit":"%","status":"ok" if args.http_200_rate >= 99.0 else "warn","trend":"up","window":"24h"}
    ]
    with open(args.out, "w", encoding="utf-8") as f:
        json.dump(kpis, f, indent=2, ensure_ascii=False)
    print("KPIs written to:", args.out)
if __name__ == "__main__":
    main()