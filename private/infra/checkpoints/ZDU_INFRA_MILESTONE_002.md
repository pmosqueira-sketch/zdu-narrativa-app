# ZDU_INFRA_MILESTONE_002

## Objetivo

Consolidar el motor de sincronización inversa desde Supabase hacia Blob Storage y dejar habilitado el flujo bidireccional. Se generaron archivos reales de campaña y un brief táctico estructurado como prueba de funcionamiento.

---

## Componentes logrados

1. **Script `sync_supabase_to_blobs.cjs`**
   - Consulta la base de datos de Supabase.
   - Extrae campañas narrativas y briefs tácticos.
   - Genera archivos `.json` y `.html` estructurados.
   - Organiza la salida en la carpeta `zdu-campanas/`.

2. **Variables de entorno**
   - Uso de `.env` con protección por `.gitignore`.
   - Claves funcionales para Supabase y Azure Blob.

3. **Bitácora**
   - Registro paralelo en `checkpoints/bitacora-sync-campanas.md`.

4. **Outputs sincronizados**
   - 4 archivos de campañas `.json`
   - 1 archivo HTML con brief táctico
   - Todos versionados en `zdu-campanas/`

---

## Estado del Repositorio

- Estructura limpia y modular.
- Sync unidireccional activado:
  - **Supabase → Blob** funcionando.
  - **Blob → Supabase** también disponible (`sync_blobs.cjs`).
- Markdown técnico agregado en `checkpoints/`.

---

## Siguiente Milestone Sugerido

**ZDU_INFRA_MILESTONE_003.md – Activación del flujo continuo**

Objetivo:
- Automatizar el sync periódico con triggers o cron jobs.
- Agregar validación de duplicados y control de versiones.
- Conectar con RAM y activar entrada automática a `NODO-CAMP`.

---

## Recomendación técnica

Mantener la ingesta en formato abierto:
- `.json` para campañas.
- `.html` para briefs.
- No usar formatos cerrados o propietarios.
