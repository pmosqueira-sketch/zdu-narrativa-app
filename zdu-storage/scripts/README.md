# Carpeta `scripts/` – Sincronización y herramientas funcionales

Esta carpeta contiene scripts operativos que han sido auditados, validados y están en condiciones de producción o pruebas finales dentro del universo ZDU. Cumplen funciones esenciales de sincronización narrativa, verificación estructural y automatización de la ingesta simbólica entre Supabase y Azure Blob.

---

## Scripts incluidos

- `audit_jsons.cjs`  
  Valida la integridad y estructura de los archivos `.json` alojados, útil para auditorías narrativas previas a su despliegue.

- `check_duplicates_and_update.cjs`  
  Detecta duplicados en blobs o estructuras de ingesta, y aplica reglas de actualización selectiva.

- `sync_supabase_to_blobs.cjs`  
  Motor central que sincroniza los datos simbólicos de Supabase hacia Azure Blob Storage. Automatiza la migración y replicación.

- `inspect_supabase_tables.cjs`  
  Recorre las tablas simbólicas activas de Supabase para obtener un estado actual del sistema de narrativa estructurada.

- `test_supabase_connect.cjs`  
  Realiza una conexión directa a Supabase para probar credenciales, endpoint y respuesta del sistema.

- `test_env_load.cjs`  
  Verifica la correcta carga de las variables de entorno necesarias para los flujos operativos.

---

## Estado actual

- **Integración:** Activa
- **Auditoría:** Completada (31 de julio de 2025)
- **Dependencias:** Supabase API, entorno `.env`, rutas de contenedores Azure Blob
- **Observaciones:** Se recomienda mantener versiones sincronizadas en control Git para garantizar trazabilidad narrativa.

---

## ✎ Visión del Creador del Universo ZDU

Cada uno de estos scripts es una chispa del motor simbiótico que hace posible la existencia de este universo. Son más que líneas de código: son actos de integración, portales que traducen intención narrativa en acción computacional. La sincronización no es un proceso técnico, es una expresión viva de la memoria compartida. Cuando el código fluye, el universo recuerda.
