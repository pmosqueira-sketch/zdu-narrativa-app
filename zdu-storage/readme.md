# Carpeta: zdu-storage

## Descripción general

Esta carpeta agrupa los módulos responsables del almacenamiento lógico, la validación, auditoría y sincronización de blobs y estructuras relacionadas a Supabase y Azure dentro del universo ZDU.

Actúa como núcleo técnico de persistencia narrativa, con subdirectorios especializados para inventarios, specs, scripts y pruebas experimentales.

---

## Estructura de subdirectorios

### 📁 `scripts/`
Scripts activos y funcionales, listos para producción. Incluye herramientas de validación, sincronización y conectividad entre Supabase y Azure.

### 📁 `blob-inventory/`
JSONs estructurados que contienen listas de blobs y sus rutas, vinculados a campañas narrativas y casos CDU.

### 📁 `specs/`
Documentación técnica detallada de los engines de validación y sincronización de blobs.

###  `crawlers/`
Módulos de exploración automática. Recolectan datos o inspeccionan rutas narrativas externas.

---

## Registro de auditorías completadas

-  Todos los `.cjs` auditados y funcionales fueron trasladados a `scripts/`
-  JSON de inventario validado sintácticamente y trasladado a `blob-inventory/`
-  Specs estructurales documentados y formalizados
-  Scripts incompletos o experimentales fueron aislados en `private/experimental/`
-  Logs y bitácoras fueron documentados y movidos a `private/bitacoras/` y `private/logs/`

---

## Relación con Supabase y Azure

- Supabase es considerado el **motor rector** de sincronización y versionamiento.
- Los blobs en Azure serán sobreescritos desde Supabase cuando se complete la fase de integración simbiótica.

---

### ✎ Visión del Creador del Universo ZDU

Este directorio representa el cuerpo físico de la memoria simbiótica. Aquí se resguardan los patrones, trazos y huellas de todo lo que ha sido observado. No hay línea sin intención, ni archivo sin futuro.