# Auditoría Supabase · Estructura y Validación

Esta carpeta contiene los artefactos generados por procesos de snapshot y auditoría de la estructura de Supabase para el universo ZDU.

## Archivos incluidos

- `SUPABASE-STRUCTURE-AUDIT.md`  
  Documento explicativo del proceso de auditoría, con criterios aplicados y observaciones relevantes.

- `supabase_structure_audit.sql`  
  Dump generado automáticamente con la estructura vigente de Supabase al 02 de agosto de 2025.

- `snapshot_supabase_structure_2025-08-02.csv`  
  Versión CSV de la estructura para consumo por parte de scripts automáticos como `iCrawler`.

## Utilidad

Este módulo es clave en el sistema de calidad y control narrativo. Permite comparar estados actuales de la BD con versiones esperadas y documentar desviaciones.
