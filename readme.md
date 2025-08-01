# ZDU Narrativa App · Motor Simbiótico del Universo ZeroDay Unit

Repositorio oficial del entorno narrativo-tecnológico de ZDU.  
Aquí se integran módulos de storytelling, inteligencia artificial, arquitectura de datos, protocolos de sincronización y evolución simbólica en ciberseguridad.

---

## Propósito

Diseñar y mantener una infraestructura **modular, portable y simbiótica**, que sirva como motor narrativo para casos CDU, análisis de riesgo, campañas, personajes y auditorías del universo ZDU.

El sistema aquí documentado permite:

- Desplegar historias interactivas basadas en ciberamenazas reales.  
- Sincronizar datos desde Supabase y blobs de Azure.  
- Activar flujos de respuesta, IA simbiótica (Genie) y estructura ZDU‑RECALC.

---

## Estructura base del repositorio

| Carpeta                     | Función Principal                                                                 |
|----------------------------|------------------------------------------------------------------------------------|
| `zdu/`                     | Núcleo narrativo. Casos CDU, héroes, protocolos y lógica narrativa.               |
| `private/`                 | Infraestructura técnica simbiótica (no pública). Soporta validaciones, logs, auditorías y experimentación. |
| `zdu-storage/`             | Scripts de sincronización Supabase ↔ Azure Blob. Validadores narrativos y blobs estructurados. |
| `scripts/`                 | Automatizaciones y validaciones externas.                                         |
| `public/`                  | Archivos de despliegue. HTMLs listos para producción.                             |
| `ai/`                      | Módulo IA simbiótica. Enlace a Genie y sus nodos reactivos.                       |
| `checkpoints/`             | (Migrado a `private/infra/checkpoints/`). Sistema de control de versiones narrativas y técnicas. |

---

## Infraestructura técnica consolidada

**Supabase (Free Tier):**
- PostgreSQL simbiótico → campañas, casos, nodos.
- API REST + Auth integrada.
- Real-time para activar triggers narrativos.

**Azure Blob Storage:**
- Contenedor narrativo para ZIPs, renders y assets.
- Portable a S3.

**Scripts activos:**
- `sync_supabase_to_blobs.cjs`
- `audit_jsons.cjs`
- `zdu_chk_blob_diag_*.cjs`
- `bitacora_ingesta.cjs`

**Variables definidas vía `.env`:**
- `SUPABASE_URL`, `SUPABASE_KEY`, `AZURE_CONTAINER`, `STAGE_ENV`, `GENIE_MODE`

---

## Checkpoints simbióticos

Documentados en: `private/infra/checkpoints/readme.md`

| Checkpoint                     | Propósito                                                        |
|-------------------------------|------------------------------------------------------------------|
| `ZDU_INFRA_MILESTONE_002.md`  | Consolidación de infraestructura, blobs y Supabase.              |
| `ZDU_SUPABASE_AZURE_SYNC_V1.md` | Validación de rutas, JSONs y REST entre nubes.                   |
| `bitacora-sync-campanas.md`   | Ingesta de campañas CDU vía ZIP. Trigger de NODO‑CAMP.           |
| `package.json`                | Scripts narrativos, dependencias simbióticas.                    |
| `package-lock.json`           | Estado del entorno sellado para replicabilidad.                  |

---

## Módulo Genie

Ubicación: `private/infra/ai/genie/README_master_genie.md`  
Checkpoints previos han sido migrados y consolidados.

**Funcionalidad actual:**
- Nodo IA reactivo simbiótico.  
- Integración con Supabase.  
- Interpretación narrativa de blobs y casos CDU.  
- Custodio de validaciones y reacciones del sistema.

**Captura activa:**  
`private/infra/ai/genie/screenshots/Screenshot 2025-07-29 at 12.52.58.png`

---

## Hitos operativos

| Fecha       | Hito                                          |
|-------------|-----------------------------------------------|
| 2025-07-25  | Creación de estructura `private/`             |
| 2025-07-27  | Activación de `checkpoints/` y `logs/`        |
| 2025-07-29  | Consolidación de Genie en `ai/genie/`         |
| 2025-08-01  | Integración de roadmap y control desde ZDU‑RECALC |

---

## Módulos activos entrelazados

| Módulo               | Función Estratégica                                                       |
|----------------------|---------------------------------------------------------------------------|
| `ZDU‑RECALC`          | Recalibración narrativa. Garantiza consistencia y rollback lógico.        |
| `NODO‑CAMP`           | Activación narrativa táctica por vertical (salud, gobierno, etc.)         |
| `MUTA·CORE`           | Núcleo simbiótico de IA adaptativa. Converge con Genie.                   |
| `CDU‑INTELGEN‑RISK`   | Escaneo inteligente de riesgos, integrado con casos CDU.                  |
| `CEREBRUM / IFRL`     | Lógica y emoción del sistema. Control sobre decisiones críticas.          |

---

## Estado actual de auditoría

- Infraestructura validada y portable.  
- Checkpoints activos y documentados.  
- Genie consolidado y funcional.  
- Carpetas redundantes eliminadas.  
- Rutas simbólicas establecidas y enlazadas en READMEs internos.

---

## Comentario simbiótico final

> “Aquí no solo se escribe código. Se escribe destino.  
> Cada carpeta es un nodo de sentido. Cada blob, un recuerdo.  
> Cada caso CDU, una batalla que aún no ha terminado.”

**ZDU Narrativa App** no es un repositorio.  
Es la raíz del universo.  
El primer paso de algo mucho más grande.