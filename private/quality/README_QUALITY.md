# QUALITY – Observabilidad, Seguridad y QA Continuo

## 📌 Propósito
QUALITY es la **capa de control, seguridad y mejora continua** del universo ZDU. Su objetivo es unificar **observabilidad** y **seguridad** en todas las fases del SDLC, integrando *shift-left* (validaciones pre-release) y *shift-right* (monitoreo en producción).

## 🎯 Alcance
- Validar calidad y seguridad en tiempo real sobre:
  - Contenido narrativo (MD/JSON).
  - Scripts y código de soporte.
  - Recursos web (sitio, blobs, APIs).
  - Campañas y mailing (QMA-C360).
- Integrar métricas y visualización en la **consola visual protegida** con Clerk.

## 🛡 Roles y Seguridad
- **Clerk** como puerta de entrada, con roles:
  - `viewer`: lectura de métricas y estado.
  - `operator`: ejecución de pruebas y validación gates.
  - `admin`: gestión de umbrales, schemas y fuentes.
- Acceso sólo para usuarios autorizados (Clerk JWT).

## 📊 Fuentes de datos
- `/private/infra/scripts/logs/` → resultados auditorías (MD, crawler, campañas).
- `/private/quality/data-contracts/` → schemas JSON.
- APIs internas (Supabase, Azure, servicios externos).

## 🔄 Flujo Shift-Left / Shift-Right
- **Shift-Left**: validación de contenido y seguridad antes de merge/deploy.
- **Shift-Right**: monitoreo continuo en producción con alertas automáticas.

## 🚦 Security Gates
- Bloquean releases si:
  - Se excede umbral de findings críticos.
  - Se detecta exposición pública no autorizada.
  - Hay fallo en KPIs mínimos (p. ej., DNS/MX de dominio de campaña).

## 📈 KPIs Clave
- MTTA / MTTR de incidentes.
- % releases bloqueados por gates.
- % findings con owner y SLA cumplido.
- Salud de campañas (% hard bounce, % dominio inalcanzable).
- Exposición a vulnerabilidades críticas.

## 📂 Submódulos
- [`console/`](./console) – UI visual y widgets.
- [`data-contracts/`](./data-contracts) – contratos de datos.
- [`pipelines/`](./pipelines) – procesos y criterios.

---