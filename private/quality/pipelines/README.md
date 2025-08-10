# QUALITY Pipelines (starter)

## Files
- `generate_kpis.py` — genera `kpis_quality.json` a partir de un CSV de campañas o valores por defecto.

## Uso rápido
```bash
python generate_kpis.py --out ../../infra/scripts/logs/kpis_quality.json
# o con CSV real
python generate_kpis.py --out ../../infra/scripts/logs/kpis_quality.json --campaigns-csv ./campaigns_sample.csv
```