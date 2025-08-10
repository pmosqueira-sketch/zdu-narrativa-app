
# INTELGEN-MD-AUDIT · Auditoría de Archivos Markdown

## 🧱 Descripción

Este módulo forma parte del subsistema **INTELGEN-RISK** y está diseñado para realizar una **auditoría lógica y simbólica** sobre todos los archivos `.md` clave del universo ZDU, asegurando que:

- Existen contenidos válidos.
- No haya archivos vacíos ni estructuras dañadas.
- Se genere un log estructurado que pueda ser interpretado por otras consolas o agentes AI.

## 📌 Ubicación del Script

```
/zdu-narrativa-app/private/infra/scripts/audits/runners/intelgen_md_audit.py
```

## 📤 Output generado

El script produce un archivo JSON de auditoría en:

```
/zdu-narrativa-app/private/infra/scripts/audits/logs/audit_md_output.json
```

### Formato de salida:
```json
[
  {
    "path": "private/universe/ifr/IFRL.md",
    "status": "valid",
    "lines": 42
  },
  {
    "path": "private/recalc/ZDU-RECALC.md",
    "status": "empty",
    "lines": 0
  }
]
```

## 🔍 Directorios escaneados

El script revisa simbólicamente los siguientes módulos estructurales:

- `private/quality`
- `private/framework`
- `private/rules`
- `private/recalc`
- `private/campaigns`
- `private/universe`

## 🧠 Integración simbiótica

Este escaneo sirve como insumo para futuras visualizaciones en consolas (HTML, dashboards) y para el **agente inteligente de calidad narrativa** (`iCrawler`), facilitando las acciones del protocolo `FAST-RESPONSE`.

## ✅ Checkpoint generado

Este módulo activa el checkpoint simbólico:

```
ZDU‑INTELGEN‑MD‑AUDITED
```

---

© ZDU · Subsistema INTELGEN-RISK · 2025
