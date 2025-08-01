# Infraestructura Narrativa ZDU – Consolidado Técnico

Este módulo contiene los artefactos estructurales y de auditoría asociados a la evolución del backend narrativo del universo ZDU. Aquí se alojan snapshots técnicos, estrategias de dependencias, mapeos de carpetas y bitácoras clave.

## Estructura de carpetas

- **`supabase/`**: contiene índice actualizado de las tablas activas dentro del proyecto Supabase.
- **`campaigns/`**: lista de campañas ya procesadas, usadas como checkpoint para evitar repeticiones.
- **`docs/`**: documentos maestros que guían la lógica de carpetas, dependencias y estrategias de optimización narrativa.
- **`readme.md`**: este consolidado, que resume el propósito, avances y organización actual del módulo `infra`.

## Avances técnicos clave

- Auditoría automatizada de estructura Supabase.
- Consolidación de snapshot `supabase_table_index.json`.
- Validación de 83 tablas activas con conectividad CLI.
- Mapeo lógico de relaciones entre carpetas, campañas y blobs.
- Bitácora técnica `ZDU_INFRA_MILESTONE_001.md` con primer hito de conectividad y sincronización.
- Establecimiento del `processed_campaigns.json` como archivo fuente para evitar redundancias narrativas.

## Próximos pasos

1. Automatizar limpieza y versionado de `supabase_table_index.json`.
2. Integrar el `processed_campaigns.json` en los scripts activos de ingesta.
3. Activar revisión de consistencia periódica de carpetas desde `main_zdu.yml`.
4. Incorporar estrategias de `ZDU_SUPABASE_FOLDER_OPTIMIZATION_V1.md` a toda estructura del proyecto.

> Esta carpeta es clave para preservar la coherencia técnica del universo ZDU. Todo cambio estructural debe pasar por este nodo.