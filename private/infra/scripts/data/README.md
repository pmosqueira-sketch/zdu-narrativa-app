# Carpeta `/data/` – Infraestructura de Auditoría Narrativa · ZDU

Esta carpeta forma parte del ecosistema de validación narrativa y de consistencia interna de JSONs dentro del universo ZDU. Aquí se consolidan los **resultados estructurados** derivados de procesos automáticos de escaneo, auditoría y checkpointing de datos narrativos, reglas, y estructuras simbólicas que componen campañas, casos, y elementos asociados.

---

## 📁 Estructura de la Carpeta

```
/data/
  ├── processed_campaigns.json
  ├── logs/
      ├── repo_json_audit_data.json
      ├── repo_json_audit.log
      └── checkpoints.log
```

---

## 📌 Descripción de Archivos

- `processed_campaigns.json`  
  Archivo que contiene un índice histórico de campañas detectadas y procesadas. Es utilizado por motores de ingesta para evitar duplicados o reprocesamientos innecesarios. Su contenido es actualizado automáticamente cuando se detectan nuevas campañas.

- `logs/repo_json_audit_data.json`  
  Salida estructurada en JSON de los resultados de auditorías ejecutadas con el script `audit_repo_json_integrity.cjs`. Incluye estado de validez por archivo, fechas de modificación, y rutas relativas.

- `logs/repo_json_audit.log`  
  Versión legible en texto plano del resultado de auditoría global. Resume los archivos JSON escaneados, errores de parseo (si existen) y totales del proceso.

- `logs/checkpoints.log`  
  Bitácora cronológica con cada ejecución del motor de auditoría. Cada entrada incluye fecha, resumen de auditoría, número de archivos válidos/erróneos, y el script utilizado.

---

## ⚙️ Proceso Típico

1. Un motor como `audit_repo_json_integrity.cjs` escanea todo el repositorio desde raíz.
2. Genera un reporte estructurado en `/data/logs/` (formato `.log` y `.json`).
3. Inserta entrada simbólica en `checkpoints.log` para trazabilidad.

---

## ✅ Último Registro en Checkpoint

```
[ZDU-CHK-AUDIT-JSON-20250801]
tipo: auditoria_json
descripcion: Auditoría global de archivos JSON en el proyecto.
total_json: 3
validos: 3
errores: 0
script: audit_repo_json_integrity.cjs
fecha: 2025-08-01
estado: completado
```

---

## 🧠 Observaciones Técnicas

- La auditoría se ejecuta desde raíz (`process.cwd()`), abarcando todas las subcarpetas.
- Los archivos generados aquí no deben moverse fuera del árbol `/private/infra/scripts/audits/`.
- Las rutas se mantienen relativas para permitir portabilidad y facilitar integraciones futuras con Supabase o pipelines externos.

---

Este directorio funciona como núcleo de **memoria técnica simbiótica** del estado de los JSONs críticos del universo ZDU.