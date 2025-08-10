# QUALITY Console – UI de Observabilidad y Seguridad

## 🎯 Propósito
Proporcionar una **interfaz visual** centralizada para monitorear, analizar y priorizar hallazgos de calidad y seguridad en ZDU.

## 🏗 Arquitectura
- **Frontend**: HTML + JS (TailwindCSS / shadcn/ui para widgets).
- **Backend**: lectura de JSONs de auditorías desde `/private/infra/scripts/logs/`.
- **Autenticación**: Clerk, con roles `viewer` / `operator` / `admin`.

## 📊 Módulos de la consola
- **Auditoría MD**: estructura, títulos, densidad.
- **Crawler**: hallazgos y nuevos “villanos”.
- **Campañas**: aperturas, rebotes, reputación de dominio.
- **Infra Web**: estado HTTP, redirecciones, eventos Wordfence.
- **Seguridad**: secret scan, permisos blobs, .htaccess.

## 📄 Contratos de Datos
- `logs.schema.json` – auditorías MD.
- `crawl.schema.json` – resultados crawler.
- `kpis.schema.json` – KPIs de campañas e infraestructura.

## 🔐 Acceso y Permisos
- Login Clerk.
- Claims JWT para filtrar vistas y acciones.
- Sin exposición de secretos en frontend.

## 📂 Organización
/private/quality/
  README_QUALITY.md
  /console/
    README_CONSOLE.md
    zdu_quality_console_FINAL_DARK.html
    /legacy/
    /widgets/
  /data-contracts/
    logs.schema.json
    crawl.schema.json
    kpis.schema.json
  /pipelines/
    security-gates.md
    metrics.md