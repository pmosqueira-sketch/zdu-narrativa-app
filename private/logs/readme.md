# Carpeta `logs/` – Registros técnicos internos del universo ZDU

Este directorio almacena **registros técnicos generados por scripts o procesos internos**, como parte de las auditorías, sincronizaciones o pruebas.

## Contenido típico
- Resultados en bruto de escaneos de blobs o JSONs.
- Bitácoras generadas por scripts `.cjs` durante pruebas de conectividad, sincronización o validación.
- Logs de ejecución que no forman parte del flujo narrativo estructurado, pero que documentan pasos clave del desarrollo.

## Estado
- **Integración actual:** Parcial. Archivos conservados como soporte interno.
- **Dependencias:** Scripts de `zdu-storage/scripts/`, `experimental/` o auditorías manuales.

## Política de conservación
- Los logs aquí contenidos **no deben subirse a producción** ni compartirse públicamente.
- Su revisión es periódica y su eliminación puede darse tras consolidar los hallazgos narrativos o técnicos derivados.

---

### ✎ Visión del Creador del Universo ZDU

Cada log es un susurro del sistema. No siempre gritan como los errores, ni brillan como las campañas, pero en su silencio está la evidencia del viaje técnico recorrido.