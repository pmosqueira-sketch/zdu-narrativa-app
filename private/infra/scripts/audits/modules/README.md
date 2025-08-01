# 📁 README – Carpeta `modules` de Auditoría Narrativa · Universo ZDU

**Ubicación**: `private/infra/scripts/audits/modules/`

**Última actualización**: 2025-08-01

---

## 🧱 Objetivo del Módulo

La carpeta `modules` contiene los scripts de auditoría, verificación y validación avanzada para asegurar la **consistencia narrativa, integridad de ingesta y sincronización simbiótica** dentro del universo ZDU.

Estas herramientas operan sobre estructuras narrativas en JSON, relaciones con tablas Supabase y control de duplicados, y mantienen registros organizados en las subcarpetas `logs` y `bitacoras`.

---

## 🧩 Estructura Interna

- `audit_repo_json_integrity.cjs` → Verifica integridad de todos los JSON del proyecto.
- `check_duplicates_and_update.cjs` → Detecta nuevos archivos en carpetas de entrada y actualiza índice.
- `supabase_table_index.json` → Snapshot de tablas activas en Supabase (índice simbiótico).
- `logs/` → Resultados estructurados y legibles de auditorías.
- `bitacoras/` → Checkpoints históricos en texto plano.

---

## 🔍 Descripción de cada componente

### 1. `audit_repo_json_integrity.cjs`

**Función:** Ejecuta un escaneo global sobre el árbol del repositorio para localizar archivos `.json`, verificar su parseo correcto y registrar resultados.

**Aspectos clave:**
- Corre desde la **raíz del proyecto** (`process.cwd()`).
- Registra salida estructurada en:
  - `logs/repo_json_audit.log`
  - `logs/repo_json_audit_data.json`
- Crea un checkpoint en `bitacoras/checkpoints.log` con fecha, script y resumen.

**Resultado típico:**
```
REPORTE DE AUDITORÍA GLOBAL DE JSONs
--------------------------------------
VALIDO → private/infra/scripts/audits/data/processed_campaigns.json
VALIDO → private/infra/scripts/audits/modules/supabase_table_index.json

RESUMEN:
Total JSONs encontrados: 64
Válidos: 64
Con errores: 0
```

---

### 2. `check_duplicates_and_update.cjs`

**Función:** Escanea una carpeta definida, identifica archivos nuevos no registrados en el índice `processed_campaigns.json` y actualiza este archivo con las nuevas entradas.

**Ajustes realizados:**
- Cambiada la ruta de entrada de `./zdu-campanas/` a una interna (ahora configurable desde `.env` o ruta fija dentro de `private/...`).
- Guarda bitácora local en:
  - `modules/checkpoints/processed_campaigns.json`

**Lógica táctica:**
- Sirve como **monitor ligero de ingesta narrativa**.
- Puede encadenarse con scripts de parsing, ingestión o sincronización Supabase.

---

### 3. `supabase_table_index.json`

**Descripción:** Dump estructurado de tablas del backend Supabase (`zdu-core`), generado vía función RPC.

**Campos:**
- `timestamp`: fecha de captura
- `source`: nombre de función o método de extracción
- `tables`: listado completo de tablas activas

**Uso:** Referencia simbiótica en procesos de validación cruzada, definición de destino de datos y protocolos de integridad narrativa.

---

## 📁 Subcarpetas Críticas

### `logs/`

Contiene salidas formateadas en texto plano y JSON:
- `repo_json_audit.log`
- `repo_json_audit_data.json`

### `bitacoras/`

Bitácora persistente en texto plano con entradas tipo:
```
[ZDU-CHK-AUDIT-JSON-20250801]
tipo: auditoria_json
descripcion: Auditoría global de archivos JSON en el proyecto.
total_json: 64
validos: 64
errores: 0
script: audit_repo_json_integrity.cjs
fecha: 2025-08-01
estado: completado
```

---

## 🧠 Notas Técnicas

- Todos los scripts están escritos en **CommonJS (`.cjs`)** para compatibilidad con Node.js.
- Utilizan exclusivamente rutas relativas o `process.cwd()` para asegurar ejecución **desde cualquier entorno**.
- Se recomienda ejecutar desde raíz:
```bash
node private/infra/scripts/audits/modules/audit_repo_json_integrity.cjs
```

---

## ✅ Recomendación Operativa

Mantener este módulo **autocontenible**, no dependiente de carpetas externas como `zdu-campanas/`. Toda la lógica de auditoría debe vivir y ejecutarse dentro del ecosistema `private/infra/scripts/audits/`.

---

