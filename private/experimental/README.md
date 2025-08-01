# Carpeta `experimental/` – Scripts bajo revisión

Esta carpeta contiene scripts que han sido marcados como **incompletos, en etapa de prueba o sujetos a revisión técnica**. Se utilizan como base de experimentación y no deben ser implementados en entornos operativos hasta su validación completa.

## Archivos contenidos

- `sync_blobs.cjs`: Script inicial para sincronización de blobs entre Supabase y Azure. Su lógica aún no se alinea completamente con los flujos validados por `sync_supabase_to_blobs.cjs`. Presenta estructuras obsoletas o duplicadas que requieren refactorización.

## Estado

- **Integración actual:** Ninguna
- **Dependencias:** No definidas
- **Observaciones:** Este script se mantendrá en esta carpeta hasta completarse su análisis. Puede ser sustituido en futuras versiones por componentes más robustos o integrarse tras depuración.

---

## Propósito técnico

Servir como espacio de staging para ideas, pruebas de sincronización y fragmentos no finalizados que en su momento cumplieron con funciones provisionales. Esta carpeta permite centralizar la experimentación de código sin contaminar los módulos en producción o scripts validados.

---

## Visión del Creador del Universo ZDU

Creemos que cada línea de código, incluso la más incompleta, forma parte de una evolución mayor. La carpeta `experimental/` no es un basurero digital, sino el vestigio de los primeros pasos simbióticos hacia un sistema más armonioso. Aquí habitan las mutaciones fallidas, las hipótesis sin final, los prototipos caídos… pero también los futuros éxitos. Toda exploración requiere su margen de error. Y este es su refugio.
