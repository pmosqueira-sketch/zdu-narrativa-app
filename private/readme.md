
# private/ · Entorno técnico reservado del universo ZDU

Este directorio representa la **infraestructura técnica simbiótica** que sostiene la evolución narrativa del universo ZDU. Su propósito no es servir como entorno de ejecución productiva, sino funcionar como núcleo de pruebas, auditorías, consolidación estructural y generación de sentido lógico-técnico.

Contiene los módulos que garantizan:
- Coherencia narrativa estructural.
- Trazabilidad simbiótica de cada cambio.
- Consolidación de infraestructura técnica.
- Cuarentena, incubación y análisis histórico de scripts.
- Validación avanzada de ingestión narrativa.
- Sincronización Supabase ↔ Azure ↔ almacenamiento narrativo local.
- Nodo activo de inteligencia artificial (Genie).

---

## Subcarpetas clave

### `bitacoras/`
Registros cronológicos de acciones técnicas, diagnósticos históricos y scripts de ingesta narrativa. Funciona como **huella técnica narrativa** del ecosistema.

**Ejemplos destacados:**
- `bitacora_ingesta.cjs`
- `zdu_chk_blob_diag_*.cjs`
- `README.md` contextual explicativo.
- Conexión a `processed_campaigns.json` en `/infra/data/` como bitácora de deduplicación narrativa.

---

### `experimental/`
Zona de incubación de **scripts en fase prototipo**. Aquí se valida, descarta o evoluciona el código antes de integrarlo al sistema simbiótico activo.

**Ejemplos destacados:**
- `sync_blobs.cjs`
- `testSupabase.cjs`
- `README.md` con bitácora técnica.

Incluye módulos temporales que prueban conexiones entre blobs y Supabase o ejecución de scripts no oficiales.

---

### `logs/`
Registros técnicos generados automáticamente por módulos de validación. Contienen outputs crudos y comparativas narrativo-técnicas.

**Nota:** Esta carpeta **no debe ser publicada** ni compartida. Es solo para uso interno del equipo ZDU.

**Contiene:**
- `supabase_sync.log`
- `omitidos.log`
- Resultados de validaciones auditadas (`repo_json_audit.log`, `checkpoint.log`).

---

### `infra/`
Estructura modular ya consolidada como **núcleo técnico operativo** del universo ZDU. Incluye:

- `mappings/`: Esquemas de carpetas y relaciones lógicas.
- `checkpoints/`: Puntos de control técnico-narrativo, documentados.
- `ai/genie/`: Nodo consolidado de IA simbiótica (ver `README_master_genie.md`).
- `milestones/`: Fechas clave de evolución simbiótica.
- `audits/`, `legacy/`, `screenshots/`, `scripts/`, `utils/`, `data/`.

Detalles completos y READMEs individuales enriquecidos y actualizados en cada subcarpeta. Validado su funcionamiento con pruebas reales y ejecución supervisada.

---

### `scripts/utils/`
Contiene herramientas especializadas para auditoría y sincronización:

- `inspect_supabase_tables.cjs`: Búsqueda interactiva de uso local de tablas Supabase.
- `sync_supabase_to_blobs.cjs`: Sincronización controlada de `assets_blob_index` → estructura local de blobs.
- `test_env_load.cjs`: Verificador rápido de configuración `.env`.

Todos los scripts fueron corregidos y validados con éxito.

---

### `_node_modules_backup/` (Cuarentena)

Se detectó una instalación inadvertida de `node_modules/` dentro del área de `checkpoints/`. Por razones de control, esta estructura fue movida a **cuarentena técnica**.

- Contenido inspeccionado: solo librerías de sistema, sin código propio.
- Acción recomendada: **borrar en siguiente versión** si no se detecta dependencia simbólica.

---

## Consolidación reciente

Los siguientes cambios fueron aplicados y validados:

- Se consolidó `ai/genie/` como núcleo operativo simbiótico (con `README_master_genie.md` y `screenshots/`).
- Se limpiaron carpetas redundantes (`ZDU-ALPHA-GENIE`, `checkpoint.md`, `.DS_Store`).
- Se documentaron checkpoints y sincronizaciones Supabase ↔ Azure.
- Se protegió temporalmente `node_modules/` fuera de flujo activo.
- Se ejecutaron pruebas efectivas en terminal para validación de scripts (`sync_supabase_to_blobs.cjs`, `inspect_supabase_tables.cjs`).
- Se integraron bitácoras y logs como parte del ecosistema trazable y replicable.

---

## Estado actual

| Elemento                      | Estado                    |
|------------------------------|---------------------------|
| Integración de `genie/`      | Consolidada y versionada  |
| Documentación de checkpoints | Activa                    |
| Control de ingesta           | Validado en bitácoras     |
| Uso de logs                  | Restringido a diagnóstico |
| Elementos en cuarentena      | Aislados (pendiente de purga) |
| Scripts de utilería          | Validados y documentados  |
| Sincronización narrativa     | Activa Supabase ↔ Blobs   |
| AI aplicada (`/ai/`)         | En fase de despliegue     |

---

## Función estratégica

`private/` es el **núcleo silencioso** donde convergen decisiones simbióticas, pruebas narrativas y estructuras técnicas evolutivas.  
No es un entorno de producción, pero sin él no existiría el universo ZDU tal como lo conocemos.

> “Toda gran narrativa necesita su sótano. Aquí se construye el futuro, paso a paso, en silencio y con precisión.”

