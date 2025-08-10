# Carpeta `infra/mappings/` – Consolidado Narrativo y Técnico

Este documento unifica toda la información relacionada con los manifiestos, esquemas de mapeo y dependencias internas del universo ZDU.  
Los contenidos aquí presentados formaban parte de archivos sueltos en `/infra/mappings/` y ahora están centralizados en este `README.md`.

---

## Contenido integrado desde: `README_ZDU_MANIFESTS.md`

# Manifiestos de Navegación – ZDU

Este archivo documenta el propósito de cada uno de los `.json` manifest utilizados para navegación y crawling estructurado.

## Archivos clave

- `AI_Manifest.json`
- `Crawler_Manifest.json`
- `QMA360_Manifest.json`

## Objetivo

Dar inteligencia de contexto, navegación y aprendizaje adaptativo a toda la carpeta `zdu-narrativa-app`.
---

## Contenido integrado desde: `readme.md`

# Mappings

Esta carpeta contiene los esquemas de mapeo y estrategia de carpetas utilizados en el ecosistema Supabase-ZDU. Incluye:

- `ZDU_FOLDER_DEPENDENCY_STRATEGY_V1.md`: Estrategia lógica de dependencia entre carpetas.
- `ZDU_FOLDER_MAPPING_SCHEMA_V1.md`: Esquema simbólico de mapeo de carpetas dentro del blob.
- `ZDU_SUPABASE_FOLDER_OPTIMIZATION_V1.md`: Recomendaciones de optimización para el uso compartido entre blobs y Supabase.

Esta carpeta funciona como motor lógico para las automatizaciones y parseo de datos en campañas.

### `checkpoints/` 🧩
Contiene puntos de control técnico-narrativos extraídos del ecosistema simbiótico de ZDU. Cada archivo documenta eventos de sincronización, milestones clave y procesos de consolidación (ej. Supabase ↔ Azure).

- `ZDU_INFRA_MILESTONE_002.md` – Segundo hito estructural del entorno narrativo.
- `bitacora-sync-campanas.md` – Registro táctico de sincronización de campañas.
- `ZDU_SUPABASE_AZURE_SYNC_V1.md` – Detalle técnico de integración entre plataformas.
- `ZDU-ALPHA-GENIE/` – Módulo con `checkpoint.md` y documentos RAM vinculados a Genie.
---

## Contenido integrado desde: `ZDU_FOLDER_DEPENDENCY_STRATEGY_V1.md`

git add checkpoints/ZDU_FOLDER_DEPENDENCY_STRATEGY_V1.md
git commit -m "Checkpoint: Estrategia de dependencia Supabase ↔ Azure Blob (ZDU_FOLDER_DEPENDENCY_STRATEGY_V1)"
git push origin main

# Checkpoint: Estrategia de Dependencia entre Carpetas Supabase ↔ Azure Blob  
**Versión:** ZDU_FOLDER_DEPENDENCY_STRATEGY_V1  
**Fecha:** 2025-07-27  
**Ubicación:** /checkpoints/  

## Objetivo  
Establecer la lógica de dependencia entre carpetas funcionales en Supabase y su correspondencia directa con contenedores o rutas en Azure Blob, asegurando sincronización simbiótica entre Supabase, Azure y GitHub.

---

## Estructura de Dependencia

Cada entrada narrativa en Supabase (campaña, caso, villano, etc.) deberá tener:

- id
- slug o nombre_carpeta
- parent_id (si aplica, para representar jerarquía)
- folder_blob: ruta exacta o patrón transformable al Blob
- tabla_relacionada: para mantener modularidad

---

## Lógica de Sincronización

| Acción en Supabase | Reflejo esperado en Azure Blob                | Registro en GitHub       |
|---------------------|-----------------------------------------------|---------------------------|
| Crear carpeta       | Crear contenedor o carpeta lógica en Blob     | Commit con *_SYNC_V1.md   |
| Renombrar carpeta   | Renombrar blob asociado o crear nueva ruta    | Actualizar map.json       |
| Eliminar carpeta    | Marcar carpeta como archivada en Blob         | Crear *_DEPRECATION.md    |

---

## Reglas simbióticas

1. No se crean carpetas vacías: toda carpeta Supabase debe tener una razón narrativa o estructural (CDU, campaña, villano, etc.).
2. Cada tabla en Supabase debe contener su propio campo folder_blob.
3. Toda nueva dependencia debe registrarse en ZDU_FOLDER_MAPPING_SCHEMA.md antes de aplicarse.
4. La lógica se automatizará en fase posterior con funciones desde GitHub (ZDU_AUTO_SYNC_ENGINE_V1).

---

## Acción inmediata

1. Validar que las carpetas actuales en Supabase tengan su campo folder_blob.
2. Alinear todos los nombres de carpetas con Azure Blob.
3. Generar script para escucha de cambios (Webhook o CronJob).
4. Registrar evolución en esta bitácora simbólica.

---

## Referencias

- Repositorio GitHub: zdu-narrativa-app  
  https://github.com/pmosqueira-sketch/zdu-narrativa-app  
- Bitácora anterior: ZDU_FOLDER_MAPPING_SCHEMA_V1.md  
- Blob Explorer - Azure  
  https://portal.azure.com/

---

Marcado como CHECKPOINT ESTRATÉGICO.
---

## Contenido integrado desde: `ZDU_FOLDER_MAPPING_SCHEMA_V1.md`

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
