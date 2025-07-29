## [2025-07-29] Ingesta y Auditoría JSON Automatizada

- Se agregó script `audit_repo_json_integrity.cjs` para validar integridad de archivos .json.
- Se agregó script `bitacora_ingesta.cjs` que registra en `checkpoints.log` el número de archivos sincronizados desde Supabase.
- Se validó detección de duplicados por fecha.
- Archivos `.log` están ignorados por `.gitignore` por seguridad y limpieza del repositorio.
