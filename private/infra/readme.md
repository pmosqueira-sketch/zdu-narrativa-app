
# Infraestructura Narrativa ZDU – Consolidado Técnico

Este módulo contiene los artefactos estructurales y de auditoría asociados a la evolución del backend narrativo del universo ZDU. Aquí se alojan snapshots técnicos, estrategias de dependencias, mapeos de carpetas y bitácoras clave.

## Estructura de carpetas

- **`supabase/`**: contiene índice actualizado de las tablas activas dentro del proyecto Supabase.
- **`campaigns/`**: lista de campañas ya procesadas, usadas como checkpoint para evitar repeticiones.
- **`docs/`**: documentos maestros que guían la lógica de carpetas, dependencias y estrategias de optimización narrativa.
- **`scripts/`**: carpeta central de automatizaciones. Contiene `utils/`, `logs/`, `audits/` y `data/` para auditoría JSON, sincronización y escaneos.
- **`ai/`**: módulo de inteligencia simbiótica experimental (Ginny). Orquestará análisis predictivo y generación avanzada en fases finales.
- **`readme.md`**: este consolidado, que resume el propósito, avances y organización actual del módulo `infra`.

## Avances técnicos clave

- Auditoría automatizada de estructura Supabase.
- Consolidación de snapshot `supabase_table_index.json`.
- Validación de 83 tablas activas con conectividad CLI.
- Mapeo lógico de relaciones entre carpetas, campañas y blobs.
- Bitácora técnica `ZDU_INFRA_MILESTONE_001.md` con primer hito de conectividad y sincronización.
- Establecimiento del `processed_campaigns.json` como archivo fuente para evitar redundancias narrativas.
- Automatización del script `sync_supabase_to_blobs.cjs` con lógica para omitir duplicados, loggear eventos y escribir archivos directamente en `data/logs`.
- Evaluación y depuración de scripts obsoletos como `test_env_loads.cjs`.
- Inspección interactiva de referencias a tablas Supabase usando `inspect_supabase_tables.cjs`.

## Lógica operativa

Toda la infraestructura narrativa está diseñada para mantener portabilidad, trazabilidad y control auditado. Los scripts se ejecutan desde `scripts/utils` y escriben resultados dentro del árbol `data/`, evitando contaminación en carpetas externas como `zdu-campanas`.

Los logs de sincronización se escriben dentro de `data/logs/`, mientras que los archivos omitidos o generados se clasifican con nombre explícito y timestamps. El entorno se orquesta a través de variables `.env` leídas de forma segura.

## Próximos pasos

- Integrar el módulo de ingestión CDU para campañas físicas (carpetas ZIP).
- Activar módulo `ai/` con flujo dirigido por IA Ginny.
- Conectar `scripts/utils` con funciones Lambda o Azure Functions.
- Ejecutar escaneo cruzado de tablas Supabase con correlación narrativa.
- Expandir el control de versiones de campañas ya procesadas en checkpoints persistentes.

---
