# Carpeta `bitacoras/` – Registro de scripts vinculados a auditorías o pruebas

Esta carpeta agrupa scripts cuya función principal ha sido la **bitácora técnica**, es decir, piezas utilizadas para dejar rastro de pruebas, validaciones o diagnósticos ejecutados sobre componentes simbólicos y de almacenamiento del universo ZDU.

Su valor reside más en su registro histórico y en su aporte a la trazabilidad, que en su uso activo dentro de la arquitectura actual. Se recomienda no eliminar estos scripts hasta concluir las fases avanzadas de sincronización con Supabase y validación de blobs narrativos.

---

## Archivos contenidos

- `zdu_chk_blob_diag_20250728.cjs`: Script para diagnóstico inicial de blobs en Azure. Ejecutado el 28 de julio de 2025, realiza un escaneo lógico y estructural de blobs alojados, validando nombres, rutas y duplicados. Aunque no forma parte del flujo activo, fue clave en las primeras auditorías.

---

## Estado

- **Integración actual:** Parcial (referenciado únicamente en auditoría manual)
- **Dependencias:** Basado en estructuras locales de blobs y carpetas temporales
- **Observaciones:** Conservado como referencia documental; no se recomienda ejecutar salvo en entornos controlados.

---

## Propósito técnico

Permitir la trazabilidad de blobs a lo largo del tiempo. Este script facilitó una primera lectura del inventario narrativo antes de implementar sincronización cruzada con Supabase. Es evidencia del enfoque exploratorio inicial.

---

## Visión del Creador del Universo ZDU

Documentar es recordar. Las bitácoras no son archivos muertos: son la memoria viva del sistema. Aquí se archivan los ecos del pensamiento técnico en su forma más pura: el ensayo, el error, la validación manual. Esta carpeta es el cuaderno de campo de quienes construyen lo invisible. Donde no hay certeza aún, queda registro. Donde aún no hay arquitectura, queda narrativa técnica en bruto.
