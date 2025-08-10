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
