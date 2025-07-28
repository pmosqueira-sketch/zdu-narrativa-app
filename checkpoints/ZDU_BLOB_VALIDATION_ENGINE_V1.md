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
