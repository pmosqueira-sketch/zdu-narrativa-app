# ZDU Crawler – Auditoría de Archivos No-MD

Este directorio contiene los scripts de crawling diseñados para ejecutar auditorías estructurales dentro del ecosistema ZDU, específicamente orientadas a identificar, clasificar y validar **todos los archivos que no sean Markdown (`.md`)**.

---

## 📍 Ubicación del crawler principal

- **Ruta**: `private/infra/scripts/crawlers/`
- **Script activo**: `icrawler_agent.py`

Este script es el único actualmente autorizado como referencia válida para auditorías de tipo estructural.

---

## 🎯 Objetivo del crawler

- Recorrer recursivamente toda la estructura de carpetas de ZDU.
- Identificar todos los archivos **no `.md`**, incluyendo:
  - `.json`, `.js`, `.cjs`
  - `.py`, `.txt`, `.html`
  - `.png`, `.jpg`, `.svg`, `.webp`, `.zip`
- Generar un índice estructurado de archivos para su posterior auditoría.
- Detectar posibles duplicados (por nombre o estructura) como `manifest.crawler.json` vs `crawler-manifest.json`.

---

## ❌ Exclusiones predeterminadas

- Archivos:
  - `.md`, `.DS_Store`
- Carpetas:
  - `.git/`, `__pycache__/`, `node_modules/`

---

## 📤 Formatos de salida

El script puede generar:

- Un archivo `.json` estructurado con:
  - Ruta relativa
  - Nombre de archivo
  - Tipo de archivo
  - Tamaño (bytes)
  - Última modificación (opcional)

- Un archivo `.md` (Markdown) con tabla legible para documentación.

---

## 🔄 Integraciones simbióticas

Los resultados de este crawler pueden alimentar directamente:

- Módulo `checkpoints/` (para generar nuevos hitos estructurales).
- Módulo `QUALITY/` (para validar consistencia, duplicados, limpieza).
- Consolas HTML de revisión (`zdu-quality-console.html`, por ejemplo).

---

## 🚀 Uso sugerido

Desde la raíz del proyecto:

```bash
python3 private/infra/scripts/crawlers/icrawler_agent.py
```

Opcionalmente, se pueden pasar parámetros para definir carpeta raíz o tipo de salida.

---

## 📂 Archivos auxiliares en esta carpeta

| Archivo | Tipo | Estado |
|--------|------|--------|
| `icrawler_agent.py` | Python script | ✅ Principal |
| `manifest.crawler.json` | JSON | ⚠️ Posible duplicado |
| `crawler-manifest.json` | JSON | ⚠️ Posible duplicado |
| `*.js` | Javascript | 🕒 En revisión |
| `*.txt` | Texto auxiliar o de configuración | 🕒 En revisión |

---

## 🧠 Notas adicionales

- Esta carpeta será auditada como parte de la consolidación del módulo `INFRA`.
- El README actual reemplaza versiones anteriores (`README-iCrawler.md`, `README_CRAWLER_ZDU.md`) que ahora se consideran obsoletas.
