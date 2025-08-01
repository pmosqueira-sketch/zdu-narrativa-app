# Carpeta `utils` – Infraestructura ZDU

Este módulo contiene scripts utilitarios esenciales para tareas de inspección, sincronización, pruebas de variables de entorno y escaneo de tablas Supabase. Es una herramienta auxiliar para operaciones tácticas dentro del ecosistema `zdu-narrativa-app`, ejecutada desde la ruta:

```
/private/infra/scripts/utils/
```

---

## Scripts incluidos

### 1. `inspect_supabase_tables.cjs`

**Función principal:** Escaneo interactivo del uso de nombres de tabla Supabase en toda la infraestructura local.

**Entrada esperada:** `supabase_table_index.json` ubicado en:

```
/private/infra/scripts/data/supabase_table_index.json
```

**Acciones que ejecuta:**

- Carga el índice de tablas Supabase como array JSON.
- Presenta menú interactivo con numeración de tablas.
- Escanea **todo el proyecto (recursivo)** en busca de referencias a cada tabla seleccionada.
- Devuelve listado de rutas que contienen coincidencias.

**Requisitos:**
- Node.js
- Acceso local de lectura a todo el árbol del proyecto

---

### 2. `test_env_load.cjs`

**Función principal:** Verificar que las variables de entorno críticas están correctamente cargadas desde `.env`.

**Variables verificadas:**

- `SUPABASE_URL`
- `SUPABASE_KEY` o `SUPABASE_ANON_KEY`
- `AZURE_STORAGE_ACCOUNT`

**Recomendación:** Este script sirve para pruebas puntuales y diagnósticos en tiempo de desarrollo. Puede mantenerse como verificador puntual, aunque no se requiere en producción.

---

### 3. `sync_supabase_to_blobs.cjs`

**Función principal:** Sincronización de contenido desde la tabla `assets_blob_index` en Supabase hacia archivos `.json` y `.html` locales.

**Arquitectura operativa:**

- Consulta Supabase con `@supabase/supabase-js`
- Toma todos los registros de `assets_blob_index`
- Genera un archivo por registro en:

```
/private/infra/scripts/data/logs/
```

**Registros adicionales:**

- `supabase_sync.log` – Bitácora de eventos generados u omitidos.
- `omitidos.log` – Lista de archivos que no se sobrescribieron porque ya existían.

**Validaciones y seguridad:**

- Abortará si no encuentra `.env` o si faltan variables críticas.
- No crea carpetas fuera del sistema controlado (`/data/logs/`).
- Puede ser llamado desde CI/CD si se requiere exportar archivos estáticos.

---

## JSONs requeridos

La funcionalidad de esta carpeta depende de los siguientes archivos ubicados en `/scripts/data/`:

1. **`supabase_table_index.json`**  
   Contiene la lista centralizada de tablas Supabase para inspección narrativa y trazabilidad en código.

2. **`.env` (raíz del proyecto)**  
   Contiene credenciales de Supabase y Azure Blob.  
   Requiere mínimo: `SUPABASE_URL`, `SUPABASE_ANON_KEY`, `AZURE_STORAGE_ACCOUNT`.

---

## Consideraciones estratégicas

- Esta carpeta opera como un *módulo de utilerías narrativas internas*, no debe ser expuesta ni ejecutada en entornos productivos públicos.
- Las herramientas pueden integrarse a procesos CI/CD, tareas CRON u operaciones tácticas de mantenimiento simbiótico.
- Todo resultado generado se mantiene dentro del sistema de `infra/scripts/data`, nunca se escribe fuera de `private`.

---

## Estado

Carpeta auditada y validada. Todos los scripts funcionales y estructurados para portabilidad entre entornos.

**Última actualización:** 2025-08-01 21:35:56
