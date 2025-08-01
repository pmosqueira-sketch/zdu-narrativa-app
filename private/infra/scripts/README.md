# scripts – scripts técnicos de auditoría y conectividad

esta carpeta contiene los scripts esenciales que permiten ejecutar tareas técnicas y simbióticas dentro del ecosistema zdu. cada script automatiza una función específica, desde validación de estructura de datos hasta conexión con supabase y blobs.

estos scripts no deben utilizarse en producción sin validación previa. forman parte del entorno técnico contenido en `private/infra/`.

# Scripts Operativos · Infraestructura Narrativa ZDU

Este directorio contiene los módulos operativos y utilitarios que forman parte del backend narrativo del universo ZDU. Se estructura en componentes clave que habilitan el escaneo, ingesta, sincronización y análisis de datos provenientes de Supabase y Blob Storage. Su propósito es mantener la coherencia entre el núcleo de datos simbólicos y los activos narrativos desplegados en campañas, casos y estructuras RAM del universo.

## Estructura General

```bash
/scripts/
│
├── utils/          ← Scripts auxiliares de conexión, diagnóstico y sincronización Supabase → Blob
├── data/           ← Contenedor lógico para archivos generados localmente (HTML, JSON)
├── audits/         ← Reportes de auditoría y control sobre tablas, metadata, ejecuciones
├── logs/           ← Archivos de log persistentes de cada operación (supabase_sync, omitidos, errores)
└── README.md       ← Documento actual

---

## scripts incluidos

### audit_jsons.cjs
ejecuta una validación estructural sobre archivos `.json` encontrados en el repositorio. permite identificar errores de sintaxis, campos incompletos o formatos inválidos según las reglas definidas en el ecosistema zdu.

### audit_repo_json_integrity.cjs
auditoría general de integridad narrativa: verifica consistencia de todos los `.json` del proyecto, ideal para validación antes de sincronización o publicación.

### check_duplicates_and_update.cjs
identifica archivos `.json` duplicados con contenido redundante o conflictivo. permite fusionar datos y consolidar la narrativa. es clave para campañas cdu y mantenimiento de blobs.

### inspect_supabase_tables.cjs
conecta con supabase y obtiene la lista actual de tablas, sus columnas y conteo de registros. útil para auditar el estado de la base de datos activa.

### test_supabase_connect.cjs
verifica si las credenciales de acceso a supabase son válidas y si se establece la conexión correctamente. devuelve mensaje de confirmación o error detallado.

### test_env_load.cjs
verifica que el archivo `.env` exista, esté bien formado y que las variables necesarias estén cargadas en memoria. es útil antes de ejecutar procesos automatizados dependientes de variables de entorno.

### sync_supabase_to_blobs.cjs
revisa y compara el estado de los blobs en azure contra los registros disponibles en supabase. ayuda a detectar archivos huérfanos, inconsistencias narrativas o desincronización de contenidos.



---

## ejecución

todos los scripts están escritos en commonjs (`.cjs`). para correrlos:

```bash
node nombre_del_script.cjs