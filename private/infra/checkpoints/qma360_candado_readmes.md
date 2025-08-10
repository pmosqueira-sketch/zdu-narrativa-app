# 🔐 Checkpoint · Candado de Actualización de READMEs para Campañas QMA360

## Declaración

Toda carpeta simbólica que represente un nodo de campaña, vertical, o dataset dentro de la iniciativa QMA360 **debe contar con un archivo `README.md`** que explique:

- Qué contiene la carpeta.
- Cuál es su propósito dentro de la narrativa o campaña.
- Qué tipo de documentos se esperan (ej. datasheets, casos de estudio, etc.).
- Relación con la base de datos Supabase (`estructura_qma360`).
- Ruta local y Blob asociada.
- Fecha de creación o última actualización.

## Activación del candado

Este candado queda activado de forma permanente en el proyecto.  
Cada vez que se ejecute un `INSERT INTO` o se agregue contenido nuevo en la carpeta simbólica correspondiente, se debe:

1. Editar el `README.md` en la carpeta afectada.
2. Registrar el update como parte del siguiente `checkpoint`.
3. Garantizar trazabilidad y transparencia simbiótica.

---

**Fecha:** 2025-08-01  
**Checkpoint registrado en:** `/private/checkpoints/qma360_candado_readmes.md`