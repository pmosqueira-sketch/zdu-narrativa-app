# Carpeta `specs/` – Especificaciones de motores narrativos y técnicos

Esta carpeta contiene archivos de especificación para engines utilizados dentro del universo narrativo ZDU. Su propósito es documentar estructuras funcionales o lógicas que rigen sincronizaciones, validaciones o acciones simbólicas entre componentes como Supabase, Azure Blob Storage y scripts CDU.

Los archivos en esta carpeta no son scripts ejecutables, sino **documentación técnica con valor estructural**, empleada para mantener la coherencia entre módulos, rutas de blobs y funciones simbióticas.

---

## Archivos contenidos

- `ZDU_BLOB_SYNC_ENGINE_V1.md`: Describe el flujo de sincronización entre Supabase y Azure Blob Storage. Incluye triggers y lógica de validación narrativa.
- `ZDU_BLOB_VALIDATION_ENGINE_V1.md`: Detalla las reglas de validación estructural para blobs simbólicos. Define cómo deben organizarse, nombrarse y auditarse los blobs vinculados a campañas CDU y escenas narrativas.

---

## Estado

- **Integración actual:** Activa en procesos de auditoría y diseño de pipelines
- **Dependencias:** Ninguna directa; se vinculan conceptualmente a módulos `scripts/` y `blob-inventory/`
- **Observaciones:** Deben mantenerse actualizados si se modifica la lógica de sincronización o validación.

---

## Visión del Creador del Universo ZDU

Un universo simbiótico necesita de mapas precisos. Esta carpeta es el plano técnico del arquetipo funcional. Aquí se trazan los engines que harán girar las historias, los pulsos invisibles que dan sentido al caos narrativo. Sin especificaciones, no hay mitología computable. Aquí comienza el orden.
