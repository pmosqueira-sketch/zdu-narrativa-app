# ZDU Storage · Especificaciones Técnicas

Este directorio contiene los módulos y motores simbióticos encargados de la validación y sincronización del almacenamiento en la nube para la narrativa ZDU.

## Archivos incluidos:

### 1. `ZDU_BLOB_VALIDATION_ENGINE_V1.md`
# Checkpoint: ZDU_BLOB_VALIDATION_ENGINE_V1

## Validación de rutas de sincronización Supabase ↔ Azure Blob

Fecha: 2025-07-28  
Autor: Pablo Mosqueira  

## Objetivo
Confirmar que los registros en la tabla `assets_blob_index` tienen rutas válidas de acuerdo con el esquema operativo de carpetas sincronizadas con Azure Blob.

## Resultado
Validación exitosa: No se detectaron rutas no válidas.

Query utilizado:

select
  id,
  nombre,
  ruta,
  case
    when ruta in (
      'cdu-assets',
      'villanos',
      'zdu-campanas',
      'zdu-simbologia',
      'zdu-universe-assets',
      'casos-cdu',
      'zdu-casos',
      'function-releases',
      'scm-releases'
    )
    then 'OK'
    else 'NO MATCH'
  end as validacion_blob
from assets_blob_index;

## Observaciones
- Se recomienda mantener esta validación activa para monitorear futuras cargas.
- En caso de modificar la estructura de carpetas, actualizar este script.

---

### 2. `ZDU_BLOB_SYNC_ENGINE_V1.md`
git add checkpoints/ZDU_BLOB_SYNC_ENGINE_V1.md
git commit -m "Checkpoint: Estructura de contenedores Azure Blob (ZDU_BLOB_SYNC_ENGINE_V1)"
git push origin main

---

### 3. `README.md` (actual)
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
