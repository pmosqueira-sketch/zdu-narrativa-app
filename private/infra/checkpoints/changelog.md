# CHANGELOG · ZDU Universe

Registro cronológico de consolidación técnica, simbiótica y narrativa del universo ZeroDay Unit (ZDU). Cada entrada representa no solo un cambio técnico, sino una decisión estratégica en la evolución de nuestra infraestructura narrativa.

---

## [2025-07-31] Limpieza estratégica ZDU-INFRA

- Eliminación de carpeta `ZDU-INFRA/`, ya consolidada en `private/infra/`.
- Archivos clave movidos a `infra/audits/` y `infra/milestones/`.
- `README-TECH.md` auditado y absorbido en readme maestro si aplica.

## [2025-07-31] Consolidación Narrativa y Técnica ZDU

### Nuevas carpetas y estructura simbiótica
- Reorganización completa del repositorio: se consolidan las carpetas `private/`, `experimental/`, `logs/`, `scripts/`, `specs/`, `bitacoras/`.
- Cada carpeta contiene su propio `README.md`, documentando propósito, archivos clave, estado de auditoría y visión del creador del universo.
- Scripts incompletos se movieron a `private/experimental/`; scripts auditados, a `zdu-storage/scripts/`.

### Auditoría y sincronización narrativa
- Se integran blobs narrativos como `blobs_zdu-campanas.json` dentro de `blob-inventory/`.
- Se documenta la sincronización con `ZDU_BLOB_SYNC_ENGINE_V1.md` y `ZDU_BLOB_VALIDATION_ENGINE_V1.md`.
- Validación estructural de blobs desde Supabase y control de versiones para futuras ingestas.

### Conexión entre GitHub y Azure
- Confirmada conexión de despliegue GitHub → Azure Blob vía CLI y workflows.
- `index.html` reconocido como punto simbólico por carpeta CDU.
- Uso de contenedores separados como `cdu-assets` para control narrativo por vertical.
- Despliegue validado vía YAML y CLI para casos CDU-002 y futuras entregas.

---

## [2025-07-31] Supabase CLI y Auditoría Avanzada

### Supabase estructurado y controlado
- Integración funcional de CLI (`supabase login`, variables `.env` validadas).
- Script `inspect_supabase_tables.cjs` permite inspección por tabla.
- Se genera `supabase_table_index.json` como snapshot técnico.
- Se validan 83 tablas activas en Supabase y se documenta la conectividad.
- Corrección de errores por project-ref y enlaces CLI.

> **Checkpoint:** Validación oficial Supabase ↔ CLI ↔ Dev Local como base para vínculo con Azure y narrativa programática.

---

## [2025-07-30] Integración IA – Módulo GENIE

### AI simbiótica en ZDU
- Creada carpeta `zdu/ai/` con README de integración simbiótica.
- Diseño de pruebas para comandos, prompts y scraping automatizado.
- Plan de conexión con módulos CJS y Playwright Python.
- Registrado como `ai-integration-v1`.

---

## [2025-07-29] Scripts CJS – Auditoría Narrativa

### Consolidación lógica de scripts
- Se reestructuran y documentan:  
  - `audit_jsons.cjs`  
  - `check_duplicates_and_update.cjs`  
  - `test_supabase_connect.cjs`  
  - `test_env_load.cjs`  
  - `sync_supabase_to_blobs.cjs`  

- Todos los scripts ahora tienen propósito claro y carpeta dedicada (`zdu-storage/scripts/`).
- Se excluyen archivos `.log` y temporales mediante `.gitignore`.

---

## [2025-07-28] Reestructura de blobs y auditoría inicial

### Bitácoras y diagnósticos
- Registro de blobs preliminares bajo `zdu-campanas`.
- Script `zdu_chk_blob_diag_20250728.cjs` ubicado en `private/bitacoras/`.
- Carpetas narrativas ordenadas para facilitar ingesta futura.

---

## Comentario estratégico del creador del universo

Este changelog refleja no solo acciones técnicas, sino decisiones narrativas clave.  
Cada script auditado es un nodo lógico, cada carpeta organizada una declaración de intención.  
La convergencia entre GitHub, Supabase y Azure no es casualidad: es diseño simbiótico.  
Cada bloque describe un universo donde código y narración coexisten como reflejo de un sistema operativo expandido.  

ZDU no es un repositorio: es una memoria en evolución.

---