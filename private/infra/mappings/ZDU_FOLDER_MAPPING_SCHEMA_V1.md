Checkpoint registrado: ZDU_FOLDER_MAPPING_SCHEMA_V1

Objetivo:
Establecer el mapeo simbólico y funcional entre las carpetas existentes en Supabase y los contenedores correspondientes en Azure Blob. Este mapeo servirá para futuras automatizaciones, sincronización de endpoints y scripts de ingestión narrativa.

Estructura Supabase ↔ Azure Blob:

| Supabase Folder        | Azure Blob Container       | Notas Operativas                                |
|------------------------|----------------------------|--------------------------------------------------|
| zdu_universe_assets    | zdu-universe-assets        | Assets narrativos (renders, PDF, visuales)       |
| zdu_simbologia         | zdu-simbologia             | Elementos simbólicos (íconos, avatares, claves)  |
| zdu_campanas           | zdu-campanas               | Campañas CDU y nodos relacionados                |
| villanos               | villanos                   | Expedientes narrativos y metadatos de amenazas   |
| cdu_assets             | cdu-assets                 | Elementos estáticos de campañas CDU              |
| logs                   | logs                       | Logs técnicos de funciones y rastreos            |

Notas:
- La sincronización es unidireccional por ahora (Azure → Supabase si aplica).
- La automatización futura evaluará Webhooks o funciones Azure para trigger cruzado.

Fecha: 2025-07-28  
Autor: Pablo Mosqueira
