## 📁 Carpeta `data/` · Scripts de Control Narrativo

Ubicación: `private/infra/scripts/audits/data/`

Este directorio contiene los archivos base utilizados como referencia para validar la ingesta narrativa dentro del universo ZDU. Su propósito es proporcionar un punto de control sobre qué campañas han sido procesadas y cuáles deben ser revisadas automáticamente por los scripts del sistema de auditoría (`audit_jsons.cjs`).

---

### 1. `processed_campaigns.json`

Archivo en formato JSON que lista las campañas narrativas que han sido validadas y procesadas. Este archivo **no contiene los datos de las campañas**, sino **referencias a los archivos JSON externos** que representan cada campaña.  

Ejemplo de contenido:

```json
[
  "campaña_salud_001.json",
  "campaña_gobierno_002.json",
  "campaña_educacion_003.json"
]