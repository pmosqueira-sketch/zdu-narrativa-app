
# ZDU_CONTAINER_VALIDATION_010825.md

## Validación Manual de Contenedores Azure Blob (ZDUStorage)

**Fecha:** 2025-08-01  
**Ubicación:** `/private/infra/checkpoints/`

---

### ✅ Contenedores confirmados como funcionales y activos

```bash
[✓] cdu-assets           → ZIPs narrativos por caso CDU (estructura válida)
[✓] zdu-campanas         → Clasificación por vertical (gobierno, salud, etc.)
[✓] villanos             → Assets visuales, renders y metadatos simbióticos
[✓] zdu-simbologia       → Placeholder simbólico, íconos y marcas narrativas
```

---

### ⚠️ Contenedores con observaciones

```bash
[!] $logs                → Logs automáticos del sistema Azure. No se toca.
[!] zdu-universe-assets  → Incluye información visual de héroes. Actualmente no conectado ni actualizado. Evaluar eliminación futura.
```

---

### 🧭 Recomendación

Mantener todos los contenedores por ahora.  
Eliminación o migración de `zdu-universe-assets` puede programarse después de la consolidación de renders oficiales desde el módulo ZIP por caso (`cdu-assets`).

---

### 📌 Siguiente paso sugerido

→ Iniciar validación cruzada de contenido ZIP en `cdu-assets/`  
→ Confirmar estructura: `/CDU-XXX/index.html` + `/assets/`  
→ Asociar archivos con casos y briefs en Supabase (`archivos`, `briefs`, `carpetas`)

---

**Estado:** Validación completada · Esperando paso 1.3  
**Responsable:** ZDU Operator · Infraestructura Narrativa Técnica
