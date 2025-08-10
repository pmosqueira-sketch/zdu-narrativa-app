# README · UNIVERSE

Este documento consolida la información operativa de los cinco módulos simbólicos de la carpeta `private/universe/` del universo ZDU.

---

### Sección 1

# ZDU‑RECALC

**ZDU‑RECALC** es el módulo de recalibración narrativa y simbiótica del universo ZDU. Su función es mantener la coherencia lógica del ecosistema ante cambios en reglas, amenazas o configuraciones tácticas.

---

## Propósito

ZDU‑RECALC garantiza:
- Integración estructurada de nuevos inputs (nuevas amenazas, superpoderes, módulos, héroes, villanos).
- Propagación coherente a todos los sistemas del universo.
- Sincronización narrativa en tiempo real.
- Prevención de contradicciones o repeticiones en campañas activas.

---

## Flujo de Ejecución

1. **Detección de cambio**
   - Se activa al modificar reglas en RULESTACK o recibir nueva entrada de INTELGEN-RISK.
2. **Revisión y validación**
   - Compara contra campañas activas, superpoderes asignados, nodos de conflicto.
3. **Propagación**
   - Ajusta nodos dependientes: NODO-CAMP, RULESTACK, CDU-cases, calidad (SIGMA-CORE).
4. **Checkpoint**
   - Genera un log de versión estructurado (`/checkpoints/recalc_logs.json`)

---

## Ejemplo de Evento

```json
{
  "evento": "nueva amenaza integrada",
  "afecta": ["NODO-CAMP", "RULESTACK"],
  "villano": "DarkFog",
  "causa": "exploit detectado en vertical banca",
  "fecha": "2025-08-01",
  "recalc_id": "ZDU-RCL-005"
}
```

---

## Conexiones Estratégicas

ZDU‑RECALC se vincula directamente con:

- **INTELGEN-RISK** → Provee datos de amenazas emergentes.
- **RULESTACK** → Emite alertas de inconsistencias o nuevas reglas.
- **NODO-CAMP** → Reconfigura campañas que dependen de nodos afectados.
- **SIGMA-CORE** → Activa procesos de calidad para evaluar el impacto de las recalibraciones.

---

## Filosofía

ZDU‑RECALC representa la inteligencia adaptativa del universo ZDU. 
Es el núcleo simbiótico que permite la evolución constante, amarrando lógica narrativa, control matemático y balance estratégico.

---

## Ruta sugerida de almacenamiento

Guardar este archivo como:

```
/zdu-narrativa-app/private/recalc/ZDU-RECALC.md
```

Y amarrarlo al `README-SIGMA-CORE.md` y `INTELGEN-RISK.md`.

---

## 🧠 Módulo INTELLIGENT · INTELGEN-RISK

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


## Se agregaron carpetas de heroes y de villanos a la carpeta de universum para consolidar a nuestros heroes y modulos maestros bajo carpeta de universum. anteriormente estas carpetas se encontraban en infra/assets/
