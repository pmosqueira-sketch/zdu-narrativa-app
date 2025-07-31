## [2025-07-29] Ingesta y Auditoría JSON Automatizada

- Se agregó script `audit_repo_json_integrity.cjs` para validar integridad de archivos .json.
- Se agregó script `bitacora_ingesta.cjs` que registra en `checkpoints.log` el número de archivos sincronizados desde Supabase.
- Se validó detección de duplicados por fecha.
- Archivos `.log` están ignorados por `.gitignore` por seguridad y limpieza del repositorio.

## [Infraestructura ZDU · Blob Integration] - 2025-07-31

### Agregado
- Primer despliegue exitoso de carpeta `CDU/ZDU-002/index.html` a Azure Blob vía CLI.
- Confirmación de conectividad entre GitHub → Azure (YAML pipeline funcional).
- Separación estratégica de contenedores: `cdu-assets` definido como base para narrativa CDU.
- Validación de carga desde línea de comandos y ejecución controlada desde GitHub Actions.
- Consolidación de `README-TECH-v.9.1.md` como arquitectura confirmada.

### Cambios clave
- Eliminación del uso de carpeta `narrativas/` en favor de una estructura más limpia en raíz: `CDU/`, `CAMPAÑAS/`, `STATIC/`, `assets/`.
- Asignación lógica de `index.html` como punto simbólico en cada carpeta ZDU.
- Registro de carpetas estructurales a replicar en Blob vía Supabase (próximo hilo).

### Ventajas estratégicas
- Se valida conectividad directa y bidireccional GitHub → Azure.
- Se define arquitectura híbrida modular con posibilidad de automatizar ingestas.
- El universo ZDU obtiene trazabilidad de su infraestructura narrativa y técnica.

### Versión v9.2-SUPABASE-AUDIT — Auditoría estructural de Supabase (31-Julio-2025)

En esta versión se ejecutó una validación técnica completa sobre la conectividad entre la CLI de Supabase y el entorno de desarrollo local.

- Se confirmó la autenticación CLI mediante token local.
- Se resolvieron errores previos de linking (`project-ref`) y variables mal configuradas en `.env`.
- Se auditó de forma automatizada la estructura completa del proyecto Supabase con 83 tablas activas.
- Se generó el archivo `supabase_table_index.json` como snapshot para control futuro de integridad y referencias cruzadas.
- Se desplegó menú interactivo para inspección por tabla desde NodeJS.
- Se habilita la estructura para comparar, consolidar y optimizar el uso narrativo y técnico de las tablas actuales.

> Esta marca representa el primer hito oficial de validación de infraestructura Supabase ↔ CLI ↔ Local Dev, base para la conexión posterior con Azure Blob y AppService.
