# Carpeta `blob-inventory/` – Inventario simbólico de blobs

Esta carpeta contiene inventarios en formato `.json` utilizados para mapear y auditar los blobs que intervienen en la narrativa ZDU. Cada archivo representa una instancia o snapshot del contenido simbólico disponible en Azure Blob Storage y su posible correlación con estructuras de Supabase o campañas CDU.

---

## Archivos contenidos

- `blobs_zdu-campanas.json`: Mapeo inicial de blobs vinculados a campañas CDU. Incluye nombre de archivo, contenedor asociado, fecha de registro, y clave narrativa. Este archivo fue generado antes de la sincronización automática con Supabase, por lo que se considera un snapshot temporal.

---

## Estado

- **Integración actual:** Fase exploratoria
- **Dependencias:** Azure Blob Storage, scripts de sincronización
- **Observaciones:** Será eventualmente sobrescrito por sincronización automática desde Supabase. Se conserva temporalmente para validación y auditoría manual.

---

## Visión del Creador del Universo ZDU

El inventario no es una lista: es un espejo del subconsciente del sistema. Cada blob registrado aquí representa una historia esperando ser contada, una señal en el caos simbólico. Aunque este registro será reemplazado, su valor reside en mostrarnos de dónde venimos. No hay sincronización sin memoria.
