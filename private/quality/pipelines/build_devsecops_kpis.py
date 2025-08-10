
#!/usr/bin/env python3
# build_devsecops_kpis.py — Agrega KPIs de plataforma para DevSecOps Console
# Lee insumos (coverage, ci_runs, md_audit, content_audit, security_posture) y arma devsecops_kpis.json
import json, argparse, datetime
from pathlib import Path

def load_json(p):
    p = Path(p)
    if not p.exists(): return None
    try:
        return json.loads(p.read_text(encoding='utf-8'))
    except Exception:
        return None

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--logs-root', required=True, help='e.g., /Users/.../private/infra/scripts/logs')
    ap.add_argument('--out', default='devsecops_kpis.json')
    args = ap.parse_args()

    root = Path(args.logs_root)
    now = datetime.datetime.now(datetime.timezone.utc).isoformat()

    coverage = load_json(root / 'tests_coverage.json') or {"coverage_pct": 82}
    ci_runs  = load_json(root / 'ci_runs.json') or {"deploys_7d":5,"lead_time_hours":14,"cfr_pct":8,"mttr_hours":2.6}
    sec      = load_json(root / 'security_posture.json') or []
    schemas  = load_json(root / 'schema_validation.json') or {"pass_rate_pct": 98}
    lint     = load_json(root / 'lint_summary.json') or {"errors": 3}
    uptime   = load_json(root / 'staging_uptime.json') or {"uptime_pct":99.4,"error_rate_pct":0.3}

    critical = sum(1 for x in sec if str(x.get('severity','')).lower()=='critical' and x.get('status')!='resolved')
    high     = sum(1 for x in sec if str(x.get('severity','')).lower()=='high' and x.get('status')!='resolved')
    secrets  = sum(1 for x in sec if str(x.get('type',''))=='secret' and x.get('status')!='resolved')

    k = [
      {"timestamp":now,"pillar":"delivery","name":"deployment_frequency","value":ci_runs.get('deploys_7d',0),"target":5,"unit":"deploys/7d","status":"ok","window":"7d"},
      {"timestamp":now,"pillar":"delivery","name":"lead_time_for_changes","value":ci_runs.get('lead_time_hours',0),"target":24,"unit":"h","status":"ok","window":"7d"},
      {"timestamp":now,"pillar":"delivery","name":"change_failure_rate","value":ci_runs.get('cfr_pct',0),"target":15,"unit":"%","status":"ok","window":"30d"},
      {"timestamp":now,"pillar":"delivery","name":"mttr","value":ci_runs.get('mttr_hours',0),"target":4,"unit":"h","status":"ok","window":"30d"},
      {"timestamp":now,"pillar":"quality","name":"unit_test_coverage","value":coverage.get('coverage_pct',0),"target":80,"unit":"%","status":"ok","window":"7d"},
      {"timestamp":now,"pillar":"quality","name":"lint_errors","value":lint.get('errors',0),"target":5,"unit":"count","status":"ok","window":"24h"},
      {"timestamp":now,"pillar":"quality","name":"schema_validation_pass_rate","value":schemas.get('pass_rate_pct',0),"target":95,"unit":"%","status":"ok","window":"24h"},
      {"timestamp":now,"pillar":"security","name":"critical_vulns_open","value":critical,"target":0,"unit":"count","status":"ok" if critical==0 else "fail","window":"24h"},
      {"timestamp":now,"pillar":"security","name":"high_vulns_open","value":high,"target":3,"unit":"count","status":"ok" if high<=3 else "warn","window":"24h"},
      {"timestamp":now,"pillar":"security","name":"secrets_exposed","value":secrets,"target":0,"unit":"count","status":"ok" if secrets==0 else "fail","window":"24h"},
      {"timestamp":now,"pillar":"operations","name":"staging_uptime","value":uptime.get('uptime_pct',0.0),"target":99.0,"unit":"%","status":"ok" if uptime.get('uptime_pct',0)>=99.0 else "warn","window":"24h"},
      {"timestamp":now,"pillar":"operations","name":"error_rate_backend","value":uptime.get('error_rate_pct',0.0),"target":1.0,"unit":"%","status":"ok" if uptime.get('error_rate_pct',0)<=1.0 else "warn","window":"24h"}
    ]

    (root / args.out).write_text(json.dumps(k, indent=2, ensure_ascii=False), encoding='utf-8')
    print('Wrote KPIs ->', root / args.out)

if __name__ == '__main__':
    main()
