git add checkpoints/ZDU_FOLDER_DEPENDENCY_STRATEGY_V1.md
git commit -m "Checkpoint: Estrategia de dependencia Supabase ↔ Azure Blob (ZDU_FOLDER_DEPENDENCY_STRATEGY_V1)"
git push origin main

# Checkpoint: Estrategia de Dependencia entre Carpetas Supabase ↔ Azure Blob  
**Versión:** ZDU_FOLDER_DEPENDENCY_STRATEGY_V1  
**Fecha:** 2025-07-27  
**Ubicación:** /checkpoints/  

## Objetivo  
Establecer la lógica de dependencia entre carpetas funcionales en Supabase y su correspondencia directa con contenedores o rutas en Azure Blob, asegurando sincronización simbiótica entre Supabase, Azure y GitHub.

---

## Estructura de Dependencia

Cada entrada narrativa en Supabase (campaña, caso, villano, etc.) deberá tener:

- id
- slug o nombre_carpeta
- parent_id (si aplica, para representar jerarquía)
- folder_blob: ruta exacta o patrón transformable al Blob
- tabla_relacionada: para mantener modularidad

---

## Lógica de Sincronización

| Acción en Supabase | Reflejo esperado en Azure Blob                | Registro en GitHub       |
|---------------------|-----------------------------------------------|---------------------------|
| Crear carpeta       | Crear contenedor o carpeta lógica en Blob     | Commit con *_SYNC_V1.md   |
| Renombrar carpeta   | Renombrar blob asociado o crear nueva ruta    | Actualizar map.json       |
| Eliminar carpeta    | Marcar carpeta como archivada en Blob         | Crear *_DEPRECATION.md    |

---

## Reglas simbióticas

1. No se crean carpetas vacías: toda carpeta Supabase debe tener una razón narrativa o estructural (CDU, campaña, villano, etc.).
2. Cada tabla en Supabase debe contener su propio campo folder_blob.
3. Toda nueva dependencia debe registrarse en ZDU_FOLDER_MAPPING_SCHEMA.md antes de aplicarse.
4. La lógica se automatizará en fase posterior con funciones desde GitHub (ZDU_AUTO_SYNC_ENGINE_V1).

---

## Acción inmediata

1. Validar que las carpetas actuales en Supabase tengan su campo folder_blob.
2. Alinear todos los nombres de carpetas con Azure Blob.
3. Generar script para escucha de cambios (Webhook o CronJob).
4. Registrar evolución en esta bitácora simbólica.

---

## Referencias

- Repositorio GitHub: zdu-narrativa-app  
  https://github.com/pmosqueira-sketch/zdu-narrativa-app  
- Bitácora anterior: ZDU_FOLDER_MAPPING_SCHEMA_V1.md  
- Blob Explorer - Azure  
  https://portal.azure.com/

---

Marcado como CHECKPOINT ESTRATÉGICO.
