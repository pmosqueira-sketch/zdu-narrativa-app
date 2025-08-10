
# Módulo Estratégico QMA360 · Campañas Comerciales y Documentación de Productos

📂 Ruta sugerida: `/private/infra/assets/qma360/README.md`  
🧠 Estado: Activado como puente entre el universo simbiótico ZDU y las campañas comerciales reales de QMA  
📅 Fecha de inicio formal: 2025-08-01

---

## 🧠 Descripción General

El módulo **QMA360** representa el espacio narrativo y técnico donde se integran todos los activos comerciales y documentales reales de **QMA.mx**. Está diseñado para recibir campañas, productos, fichas técnicas, casos de estudio y materiales de fabricantes de forma estructurada, codificada y preparada para ingesta automatizada.

---

## 🔄 Unificación con Campañas Narrativas

Todas las **campañas simbólicas por vertical (salud, banca, educación, etc.)** en ZDU estarán vinculadas a campañas QMA360 **reales**.

Este módulo permitirá conectar campañas narrativas con:
- Beneficios reales por vertical
- Productos o soluciones activas
- Materiales aprobados por fabricantes
- Activos de marketing y estrategia de ventas

---

## ✅ Estructura sugerida

```bash
/qma360/
├── salud-beneficios/                  → Argumentarios comerciales
├── salud-casos-estudio/              → Casos reales de hospitales, clínicas
├── salud-datasheets/                 → PDFs de fabricantes para salud
├── banca-beneficios/
├── banca-datasheets/
├── educación-textsheets/
├── global-productos/
│   ├── iboss/
│   ├── sentinelone/
│   ├── kymatio/
├── documentos/
│   ├── 2025_iboss_zero_trust.pdf
│   ├── 2025_kymatio_casos_mexico.docx
├── scripts/
│   └── crawler_qma360.js
└── README.md
```

> El nombre de la carpeta codifica: vertical + tipo de documento

---

## 🔐 Candados estructurales

- Cada documento debe tener vínculo válido a un producto o campaña.
- Solo se aceptan documentos de origen controlado (fabricante, QMA).
- Cada archivo será registrado en Supabase con metadatos: fecha, categoría, vertical, fuente.
- Campañas se integrarán también al sitio web (por vertical).

---

## 🧬 Tablas Supabase requeridas

- `productos_qma` → Catálogo oficial
- `documentos_qma` → Fichas técnicas, PDFs, textsheets
- `campañas_qma360` → Agrupadores por vertical y periodo
- `crawler_hooks_qma` → Webhooks o triggers narrativos

---

## 🧭 Recomendaciones de expansión

- Activar ingesta desde Google Drive o Box
- Activar crawlers simbióticos para RSS y sitios de fabricantes
- Integrar lógica de validación con CEREBRUM para clasificar

---

**Responsable simbólico:** ZDU Operator + Unidad Comercial Estratégica  
**Checkpoint asociado:** Inicio módulo QMA360, Fase 2 de sincronización


## 🗂️ Backup registrado – 2025-08-01

Se generó un paquete simbólico con todos los `README.md` por vertical e instrucciones para ingesta QMA360.  
Archivo: `README_qma360_package.zip`  
Ubicación: `/backups/`  
Estructura incluida: salud, banca, gobierno, industria — con carpetas `input`, `output`, `procesado`.  
Este respaldo funciona como snapshot narrativo-operativo antes de cualquier modificación mayor.
