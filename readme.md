# ZDU Narrativa App

Repositorio central para la narrativa simbiótica del universo ZeroDay Unit (ZDU).

## Objetivo

Diseñar, estructurar y sincronizar una infraestructura narrativa modular que combine storytelling con elementos de ciberseguridad, inteligencia artificial y arquitectura digital multiplataforma.

## Estructura

El repositorio contiene carpetas organizadas por función narrativa y técnica:

- `zdu/`: Núcleo narrativo, casos CDU, y módulos simbólicos.
- `ZDU-INFRA/`: Índices, mapeos y soporte técnico para la infraestructura narrativa.
- `public/`: Archivos listos para despliegue (ej. `index.html`).
- `scripts/`: Automatizaciones de sincronización y validación.
- `bitacoras/`: Logs narrativos, técnicos y checkpoints auditados.

## Auditorías y versión de trabajo

Los siguientes puntos de control han sido establecidos para mantener trazabilidad sobre los cambios críticos:

- `infra-audit-v1`: Auditoría inicial de carpetas técnicas y sincronización Supabase–Blob.
- `ai-integration-v1`: Registro de integración simbiótica del módulo AI y trazabilidad con Genie.

## Convenciones

- Todos los archivos `.json` deben validarse antes de subirse.
- Toda carpeta debe contener su propio `README.md` con propósito, archivos clave y estado de auditoría.
- Los módulos auditados deben documentarse en el bloque inferior de este archivo raíz.
- No se deben incluir íconos gráficos ni decoraciones visuales dentro de los archivos Markdown.

---

## Módulos auditados

### Carpeta: `zdu/private/`

**Propósito:** Scripts de sincronización entre Supabase y Azure Blob.

**Archivos clave:**
- `sync_supabase_to_blobs.cjs`
- `audit_repo_json_integrity_zdu.cjs`
- `parse_bitacora_legacy.cjs`
- `parse_universo_simbolico.cjs`
- `bitacora_ingesta.cjs`
- `RAM_TRACE.log`

**Auditoría:**  
**Fecha:** 31 de julio 2025  
**Subcarpetas revisadas:**
- `/private/bitacoras/`
- `/private/logs/`
- `/private/scripts/`
- `/private/`

**Observaciones:**
- Algunos scripts aún no están referenciados cruzadamente (por ejemplo, `parse_legacy`).
- Se corrigió el funcionamiento de `sync_supabase_to_blobs.cjs`.
- No se hallaron versiones anteriores ni respaldo (`no backup`).
- Evitar dejar `package.json` sin propósito o en blanco.
- Integridad narrativa verificada en rutas profundas (`backbone`, `RAM_TRACE`).

---

### Carpeta: `zdu/casos`

**Estado:** VACÍA  
**Archivos encontrados:** 0  
**Acción:** Ninguna requerida por ahora.  
**Observación:** Lista para futura ingesta de casos CDU. No se detectaron archivos `.json`, `.cjson` o similares.

---

### Carpeta: `zdu/ai/`

**Propósito:** Módulo simbiótico para pruebas de integración con modelos de inteligencia artificial (Genie).

**Archivos principales:**
- `README.md` local
- Scripts de prueba y entorno para ejecución de comandos shell con análisis IA.

**Observaciones:**
- La carpeta fue creada para establecer conectores entre IA generativa (Genie) y la narrativa del universo ZDU.
- Se documentó su propósito dentro del README raíz como parte del proceso de auditoría.
- Se considera un módulo preliminar en etapa experimental, sin archivos `.json` generados aún.
- Documentado oficialmente bajo el checkpoint `ai-integration-v1`.

---

Este README es incremental y debe mantenerse actualizado con cada nueva carpeta auditada.
