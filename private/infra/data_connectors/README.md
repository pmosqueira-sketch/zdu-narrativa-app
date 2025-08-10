# Data Connectors · ZDU Infra

Propósito: ingesta y normalización de fuentes externas hacia JSONs consumidos por QUALITY.

## Estructura
- `wordfence/` → parsers de logs WF → `security_wordfence.json`
- `dns_mx/` → chequeos DNS/MX → `dns_mx_status.json`
- `mailerlite/` → campañas/listas → `campaigns_ml_raw.json`
- `brevo/` → campañas/listas → `campaigns_brv_raw.json`
- `azure_blob_acl/` → ACL auditoría → `blob_acl_audit.json`

## Convenciones
- **Salida**: escribir SIEMPRE en `private/infra/scripts/logs/`.
- **Schemas**: validar contra `private/quality/data-contracts/*.schema.json`.
- **Nombre de archivos**: `snake_case` + timestamp opcional, ej. `campaigns_latest.json`, `security_posture.json`.

## Interfaz base (Python)
Cada conector expone `run(**kwargs) -> dict` y un CLI:

```bash
python -m data_connectors.wordfence.run --out private/infra/scripts/logs/security_wordfence.json