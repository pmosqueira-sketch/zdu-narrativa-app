# SUPABASE STRUCTURE AUDIT · 2025-08-02

## 📊 Objetivo del Análisis

Este documento consolida la auditoría de la estructura activa de la base de datos Supabase utilizada en el universo ZDU. La auditoría fue realizada en la fecha actual mediante ejecución directa sobre Supabase, con obtención de:
- Listado completo de tablas activas
- Relación de claves primarias
- Relaciones Foreign Key
- Validación cruzada con módulos simbióticos

---

## ✅ Tablas Detectadas

Se identificaron y clasificaron **88 tablas** relevantes, entre las cuales destacan:

- `heroes`, `heroes_poderes`, `heroes_narrativa_operativa`, `heroes_identidad`
- `casos`, `campañas`, `villanos`, `ram`, `zdu_logs`
- `rule_stack`, `nodo_camp`, `crawler_input`, `checkpoints`, `cduraw_input_files`
- `supabase_render_prompts`, `emociones_heroes`, `heroes_backbone_tecnologico`, etc.

> 🔎 *Consulta completa de tablas disponible en `Supabase Snippet Database Schema Explorer (3).csv`.*

---

## 🔐 Claves Primarias y Relaciones

- Las claves primarias están correctamente configuradas en tablas como `heroes`, `villanos`, `casos_cdu`, `poderes`.
- Se detectaron relaciones cruzadas en `heroes_poderes_simbioticos`, `campañas_villanos_crossref`, y `casos_villanos_crossref`.
- Se sugiere revisar integridad en relaciones como `cases` (tabla no encontrada) y homogeneizar nombres (`powers` vs `poderes`).

---

## 🤖 Integración con Módulos AI

Este checkpoint será consumido directamente por el módulo:

- `INTELIGEN-RISK`: Para escaneo de consistencia estructural simbiótica.
- `CDU-INTELGEN-RISK` (referencia histórica, ahora absorbido como **INTELIGEN-RISK**).
- `crawler_output`: que leerá validaciones para generación de insights automáticos.

---

## 🧩 Recomendaciones

- Normalizar nombres de tablas (`powers`, `poderes`, `cases`).
- Consolidar estructura `heroes_*` en esquema simbiótico.
- Activar módulo `restorepoints` y vincular con este checkpoint para revertir estados.

---

## 🗂 Ruta de Almacenamiento Recomendada

`/private/infra/checkpoints/supabase/checkpoint_supabase_structure_2025-08-02.json`

---

_Archivo auditado generado automáticamente desde crawler simbiótico en entorno local Mac Studio M4 Max._

