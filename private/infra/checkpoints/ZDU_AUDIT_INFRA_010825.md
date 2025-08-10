
# ZDU_AUDIT_INFRA_010825.md

## Auditoría Híbrida Supabase ↔ Azure Blob · Checkpoint Técnico

Fecha: 2025-08-01  
Ubicación recomendada: `/private/infra/auditorias/`

---

### ✅ Estado actual de plataformas

#### Supabase (estructura lógica):
- Total de tablas auditadas: 10
- Relaciones confirmadas con claves foráneas (ver estructura_supabase_relaciones.json).
- Uso activo de UUIDs, carpetas, briefs, casos, villanos.
- Candados lógicos activados para duplicidad y aparición narrativa controlada.
- Validación estructural en README-TECH_v9.2.

#### Azure Blob Storage:
- Contenedores activos: 6
- Confirmados: `cdu-assets`, `zdu-campanas`, `villanos`, `zdu-simbologia`, `zdu-universe-assets`
- Estructura ZIP por CDU con carpeta + index.html + assets internos.
- Rutas válidas detectadas.
- Acceso de tipo “Container” confirmado (necesario validar políticas SAS futuras).

---

### 🔄 Relación Supabase ↔ Blob

| Tabla Supabase        | Campo Referente | Contenedor Azure         | Comentario |
|------------------------|------------------|---------------------------|------------|
| `archivos`             | `url_zip`        | `cdu-assets/`             | Principal input de ingestión |
| `villanos`             | `uuid_asset`     | `villanos/`               | Conecta narrativa con render |
| `assets_blob_index`    | `ruta_blob`      | Todos                     | Índice técnico de blobs CDU |

---

### 🧠 Observaciones clave

- Se ha recuperado y validado el mapa de relaciones completo.
- Se recomienda iniciar limpieza de `cdu-assets/` para respetar convención de nombres CDU.
- Revisión de carpetas locales internas en curso; se integrará un README por carpeta local.
- Confirmado que los ZIPs pueden reemplazarse si se usan UUID y no nombre fijo.
- Flujo ingestivo por Genie validado para continuar push de ZIPs con parsing automático.

---

### 📌 Recomendaciones

1. Preparar script de push controlado Supabase ↔ Blob (sin sobrescritura).
2. Validar SAS tokens y proteger ruta pública final.
3. Mantener carpeta `/private/infra/auditorias/` como log de auditorías históricas.
4. Iniciar consolidación automática de campañas → CDU mediante AI.
5. Activar funciones automatizadas en App Service para limpiar, subir y loguear blobs.

---

### 🗂 Ruta sugerida para guardar este archivo

**Guardar en:**

```bash
/private/infra/auditorias/ZDU_AUDIT_INFRA_010825.md
```

Esta carpeta ya está registrada en RAM como punto de control para documentación estructural avanzada, validación de blobs, auditorías simbólicas y sincronización ZDU híbrida.

---

**Operador Responsable:** ZDU Operator · Auditoría Técnica  
**Estado:** Validado y listo para siguiente push simbiótico.
