# NODO-CAMP

**NODO-CAMP** es el núcleo operativo de campañas narrativas del universo ZDU. Este módulo conecta amenazas detectadas con la ejecución de campañas simbólicas, estructurando la respuesta táctica y la asignación narrativa de recursos (héroes, exploits, superpoderes).

---

## Función Central

El NODO-CAMP activa el flujo de inteligencia narrativa a partir de una fuente (URL, ZIP, JSON), validada por:
- **INTELGEN-RISK**: asegura la validez de la amenaza.
- **RULESTACK**: confirma cumplimiento de las reglas narrativas.
- **ZDU‑RECALC**: recalibra condiciones cuando la lógica cambia.

---

## Fases del Ciclo

1. **Ingesta**
   - Entrada de URL o ZIP con material narrativo.
   - Clasificación por vertical, tipo de amenaza, villano involucrado.
2. **Validación**
   - Validación cruzada por los módulos mencionados.
   - Confirmación de lógica de aparición y pertinencia de la amenaza.
3. **Activación**
   - Se lanza una campaña CDU con:
     - Héroes asignados (por vertical, habilidad o antagonismo).
     - Superpoderes a activar.
     - Ruta narrativa.

---

## Datos Estructurados (Recomendado en JSON)

```json
{
  "camp_id": "ZDU-002",
  "vertical": "salud",
  "exploit": "BlackCat",
  "villano": "BlackCat",
  "fecha_activacion": "2025-07-22",
  "estado": "activo",
  "heroes": ["Eris", "Nebulon"],
  "superpoderes": ["Tenable Identity Exposure", "CIEM"],
  "alerta_comops": true
}
```

---

## Integración Narrativa

Este módulo también genera automáticamente:
- **Brief táctico** para CISOs (800 palabras, sin héroes).
- **Narrativa del caso ZDU** (1000 palabras, con héroes, antagonismo).
- Carga estructurada en ZIP para publicación en web o distribución.

---

## Conexiones

- **ZDU‑RECALC**: ajusta lógica cuando cambian condiciones de campaña.
- **RULESTACK**: revisa validez temporal y narrativa.
- **SIGMA-CORE**: audita campañas activadas en ciclos de calidad.

---

## Cierre de campaña

Las campañas pueden:
- Quedar archivadas como `CDU-case`
- Reabrirse si aparece nueva amenaza relacionada
- Activar misiones de seguimiento si RULESTACK detecta inconsistencias o mutaciones

---

## Archivos Relacionados

Guardar junto con los siguientes archivos en la carpeta `/private/campaigns/`:
- `CDU-cases.json`
- `alerts_comops.json`
- `campaign_templates/`

