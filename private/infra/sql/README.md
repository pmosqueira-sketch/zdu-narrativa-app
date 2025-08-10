# SQL · Infraestructura Narrativa y de Auditoría ZDU

Esta carpeta contiene los scripts, estructuras y auditorías relacionadas con el modelo narrativo QMA 360, desplegado sobre Supabase como base de datos simbiótica del universo ZDU.

## Contenido principal

- `estructura_qma360_inserts.sql`  
  Script de inserción de datos estructurados conforme al modelo QMA 360. Define datos base para entidades clave en Supabase.

- `supabase_qma360_estructura.sql`  
  Script de creación de tablas y relaciones utilizadas en la narrativa simbiótica.

- `auditoria/`  
  Subcarpeta que contiene la auditoría estructural y snapshots de Supabase, útil para validaciones automáticas mediante `iCrawler` o `INTELGEN‑MD‑AUDIT`.

## Uso sugerido

Los archivos `.sql` aquí presentes son esenciales para reconstruir o validar el entorno narrativo en entornos nuevos. El modelo es portable y puede migrarse fácilmente a PostgreSQL/RDS en AWS.
