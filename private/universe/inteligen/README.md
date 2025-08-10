# README · INTELGEN-RISK (ZDU)

Este módulo representa el sistema de análisis simbiótico de amenazas aplicado por vertical dentro del universo ZDU.

---

## 🧠 Introducción

# INTELGEN-RISK · Activación del iCrawler

## 🧠 Descripción del módulo

El `iCrawler` es el agente simbiótico de escaneo estructural y narrativo del universo ZDU, vinculado al protocolo `INTELGEN-RISK`. Su función principal es auditar la integridad de los manifiestos, módulos, carpetas y archivos simbólicos (como `.md`, `.json`, `.sql`, `.csv`) desde la raíz del proyecto.

---

## ✅ Checkpoint alcanzado

**ZDU‑INTELGEN‑SCANNED**  
El universo fue escaneado exitosamente desde la raíz (`/`) usando el agente `iCrawler`, con validación de estructuras activas y generación del log en formato JSON.

---

## 📂 Estructura de logs

- Carpeta destino: `private/logs/`
- Reporte más reciente: `crawl_audit_2025_08_02.json`
- Línea base registrada: `historic/crawl_audit_2025_08_02_FULL_BASELINE.json`

---

## 🔍 Alcance de escaneo actual

- Root path: `/`
- Extensiones válidas: `.md`, `.json`, `.sql`, `.csv`
- Carpetas incluidas:  
  `infra/`, `framework/`, `quality/`, `scripts/`, `console/`, `zdu-campanas/`, `logs/`, `db/`, `inteligen/`

---

## ⚙️ Configuración simbólica

- Archivo de configuración: `intelgen_risk.json`
- Script ejecutor: `icrawler_agent.py`
- Activador simbólico: `iCrawler.md`
- Consola visual: `zdu_quality_console_FULL.html`

---

## 🧪 Módulos validados (ejemplos)

- `AI_Manifest.json`
- `repo_json_audit_data.json`
- `manifest_qma360.json`
- `campaign_*.json`
- `estructura_qma360.sql`
- `INTELGEN-RISK.md` *(previsto para documentación extendida)*

---

## 📌 Próximas acciones sugeridas

- Conectar `iCrawler` con validación semántica (`.md`, `README`, `checkpoints`)
- Integrar resultados al visor central (consola visual)
- Activar correlación Supabase + Blob para módulos simbólicos
- Desplegar `iCrawler` en Azure Function para ejecución autónoma

---

*Este README documenta la activación inicial del protocolo simbiótico de escaneo ZDU.  
Mantén actualizado este archivo con cada checkpoint registrado o modificación del manifiesto INTELGEN-RISK.*

---

## ⚙️ Detalle Técnico y Narrativo

# INTELGEN‑RISK · Sistema de Inteligencia Narrativa de Riesgos

Este módulo forma parte del núcleo estratégico de inteligencia simbiótica del universo **Zero-Day Unit (ZDU)** y está integrado dentro del ciclo de recalibración continua definido por **ZDU‑RECALC**, **RULESTACK**, **NODO-CAMP**, y **SIGMA‑CORE**.

---

## 🎯 Objetivo

El propósito principal del sistema INTELGEN‑RISK es:

- Realizar un escaneo contextual **por vertical** (salud, banca, industria, gobierno, etc.).
- Detectar **URLs**, amenazas, exploits o actores maliciosos en entornos reales.
- Mapear correlaciones entre eventos del mundo real y narrativa del universo ZDU.
- Activar módulos de respuesta (Fast Response, alerta COMOPS) de forma táctica.
- Nutrir la narrativa con elementos de alta relevancia para campañas CDU.

---

## 🔍 Fuentes de Datos Analizadas

- The Hacker News
- BleepingComputer
- MITRE ATT&CK (top 25)
- Blogs técnicos oficiales de fabricantes
- Intelligence compartida vía crawling de IA

---

## 🧠 Integración con Módulos Existentes

- **RULESTACK:** define si una amenaza puede entrar como villano o catalizador.
- **NODO-CAMP:** activa campañas y casos CDU con base en las amenazas encontradas.
- **ZDU‑RECALC:** recalibra si el input simbólico entra en contradicción con lógica previa.
- **SIGMA‑CORE:** archiva resultados y verifica consistencia con control de calidad.

---

## 🔄 Ciclo de Ejecución

1. Crawling dirigido por AI o input humano (ej. nueva URL o boletín).
2. Análisis contra fuentes previamente definidas.
3. Mapeo con amenazas reales (Top 25, CVEs, campañas públicas).
4. Si coincide con villano activo o categoría autorizada → se permite ingreso.
5. Se conecta con narrativas y héroes relevantes → se genera caso CDU.
6. Se activa alerta o ingesta si cumple candados definidos en `RULESTACK`.

---

## 🛡️ Candados Activos

- Candado de aparición por fecha (basado en año de URL o CVE).
- Candado de correlación real (debe encontrarse mención en fuente validada).
- Candado de cumplimiento regulatorio (si aplica, activa revisión con Regulator).
- Candado de impacto reputacional.

---

## 📁 Ubicación sugerida

`/private/intelgen/INTELGEN-RISK.md`

Este archivo será leído por el crawler AI y formará parte del sistema permanente de inteligencia del universo ZDU.

---
## 🧾 Checkpoint JSON Asociado

El archivo `intelgen-risk-checkpoint.json` complementa este módulo con información estructurada para activación lógica por parte de agentes AI.

- **Versión:** 1.0.0
- **Ruta:** `/private/inteligen/`
- **Archivo:** `intelgen-risk-checkpoint.json`
- **Agente Vinculado:** ZDU-CRAWLER-AI
- **Última actualización:** 2025-08-02T00:00:00Z
- **Revisión programada:** 2025-09-01T00:00:00Z

### 🔄 Entradas:
threat-urls, vertical-tags, rule-stack-top25, mitre-sources, crawler-scan

### 🎯 Salidas:
risk-maps, trigger-alerts, recommendation-json, fast-response-init

> Checkpoint del módulo INTELGEN-RISK que sirve como punto de referencia lógico para activación y monitoreo por parte del ZDU-CRAWLER-AI.
