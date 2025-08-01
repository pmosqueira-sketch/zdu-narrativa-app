# ZDU Narrativa App

Repositorio central para la narrativa simbiótica del universo ZeroDay Unit (ZDU).

---

## Objetivo

Diseñar, estructurar y sincronizar una infraestructura narrativa modular que combine storytelling con elementos de ciberseguridad, inteligencia artificial y arquitectura digital multiplataforma.

---

## Estructura

El repositorio contiene carpetas organizadas por función narrativa y técnica:

- `zdu/`: Núcleo narrativo, casos CDU, y módulos simbólicos.
- `ZDU-INFRA/`: Índices, mapeos y soporte técnico para la infraestructura narrativa.
- `public/`: Archivos listos para despliegue (ej. `index.html`).
- `scripts/`: Automatizaciones de sincronización y validación.
- `bitacoras/`: Logs narrativos, técnicos y checkpoints auditados.
- `zdu-storage/`: Motor de sincronización Supabase ↔ Azure Blob y centro de auditoría de blobs y scripts.
- `private/`: Carpeta protegida para bitácoras, logs y scripts experimentales.
- `ai/`: Módulo de pruebas de integración con inteligencia artificial (Genie).

---

## Auditorías y versión de trabajo

Los siguientes puntos de control han sido establecidos para mantener trazabilidad sobre los cambios críticos:

- `infra-audit-v1`: Auditoría inicial de carpetas técnicas y sincronización Supabase–Blob.
- `ai-integration-v1`: Registro de integración simbiótica del módulo AI y trazabilidad con Genie.
- `readme-consolidation-20250731`: Versión actual de consolidación estructural del repositorio.

---

## Convenciones

- Todos los archivos `.json` deben validarse antes de subirse.
- Toda carpeta debe contener su propio `README.md` con propósito, archivos clave y estado de auditoría.
- Los módulos auditados deben documentarse en el bloque inferior de este archivo raíz.
- No se deben incluir íconos gráficos ni decoraciones visuales dentro de los archivos Markdown.
- Toda referencia a módulos de inteligencia artificial debe indicar su relación directa con el sistema Genie o su derivado simbiótico.

---

## Módulos auditados

### Carpeta: `zdu/private/`

**Propósito:** Scripts de sincronización entre Supabase y Azure Blob.

**Archivos clave:**
- `sync_supabase_to_blobs.cjs`
- `audit_repo_json_integrity_zdu.cjs`
- `parse_bitacora_legacy.cjs`
- `parse_universo_simbolico.cjs`
- `bitacora_ingesta.cjs`
- `RAM_TRACE.log`

**Subcarpetas revisadas:**
- `/private/bitacoras/`
- `/private/logs/`
- `/private/scripts/`
- `/private/experimental/`

**Observaciones:**
- Algunos scripts aún no están referenciados cruzadamente.
- Se corrigió el funcionamiento de `sync_supabase_to_blobs.cjs`.
- No se hallaron versiones anteriores (`no backup`).
- Evitar dejar `package.json` sin propósito.
- Todos los scripts en `experimental/` han sido aislados y documentados para revisión futura.

---

### Carpeta: `zdu/casos/`

**Estado:** VACÍA  
**Archivos encontrados:** 0  
**Acción:** Ninguna requerida por ahora.  
**Observación:** Lista para futura ingesta de casos CDU. No se detectaron archivos `.json`, `.cjson` o similares.

---

### Carpeta: `zdu/ai/`

**Propósito:** Módulo simbiótico para pruebas de integración con modelos de inteligencia artificial.

**Archivos principales:**
- Scripts de prueba con ejecución de shell.
- Variables de entorno en sandbox local.
- `README.md` incluido con documentación funcional.

**Observaciones:**
- Se ha comenzado el entrenamiento contextual de Genie.
- Se integrarán conexiones con Supabase para analizar carga semántica.
- Se considera parte del stack simbiótico del motor MUTA·CORE.

---

### Carpeta: `zdu-storage/`

**Propósito:** Sincronización, trazabilidad y validación entre Supabase y Azure Blob.

**Subcarpetas:**
- `scripts/`: Scripts operativos y auditados.
- `blob-inventory/`: JSONs de snapshot narrativo (ej. `blobs_zdu-campanas.json`).
- `specs/`: Documentación técnica y checkpoints.
- `logs/`: (Movida a `private/logs/` tras consolidación).

**Archivos auditados (julio 2025):**
- `sync_supabase_to_blobs.cjs`
- `inspect_supabase_tables.cjs`
- `test_supabase_connect.cjs`
- `check_duplicates_and_update.cjs`
- `audit_jsons.cjs`
- `test_env_load.cjs`
- `blobs_zdu-campanas.json`

**Reubicados:**
- `sync_blobs.cjs` → `private/experimental/`
- `zdu_chk_blob_diag_20250728.cjs` → `private/bitacoras/`

**Observaciones:**
- Los archivos se revisaron a nivel de integridad estructural y propósito narrativo.
- La auditoría sigue abierta durante el despliegue continuo Supabase ↔ Azure.

---

## Bloque técnico y simbiótico

### Visión técnica

La infraestructura aquí desplegada ha logrado integrar de forma eficiente:

- Base de datos Postgres desde Supabase.
- API REST para consultas narrativas.
- Automatización en scripts CJS.
- Revisión semántica en blobs y casos CDU.
- Flujo de auditoría híbrido y trazable.

Cada módulo está pensado para ser portable, modular y abierto a expansión. El código es interoperable con AWS o cualquier entorno que soporte PostgreSQL, JSON y storage tipo S3.

### Visión del Creador del Universo ZDU

Aquí no se construyen solo sistemas. Se construyen **realidades posibles**. Cada script que aquí reposa es un acto de resistencia simbiótica ante el caos digital. Los logs son diarios de guerra. Las rutas son líneas de tiempo. Y los blobs... memorias fractales.

ZDU no es solo infraestructura. Es un acto narrativo que crece línea por línea, caso por caso, con lógica, estrategia y memoria viva. Genie no solo asiste: interpreta, aprende, recuerda. Porque este universo no vive en código, sino en propósito.

**ZDU vive. ZDU evoluciona. Y todo queda documentado.**

---