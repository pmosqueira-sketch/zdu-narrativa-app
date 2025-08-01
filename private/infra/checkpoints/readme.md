# Checkpoints simbióticos – private/infra/checkpoints

Este directorio representa el sistema de **anclajes lógicos y narrativos** del universo ZDU. Cada archivo contenido aquí cumple la función de:

- Consolidar un hito narrativo/técnico.
- Registrar cambios de infraestructura de forma trazable.
- Permitir rollback simbiótico ante errores o desvíos.
- Documentar sincronizaciones estructurales (ej. Supabase ↔ Azure).

## Estructura actual

### ZDU_INFRA_MILESTONE_002.md
Checkpoint técnico que marca la **segunda evolución estructural** del ecosistema. Define cómo se consolida el módulo `private/infra` y se alinea con el protocolo de portabilidad mínima y arquitectura modular. Se registran ajustes a Supabase, blobs y control de acceso.

### ZDU_SUPABASE_AZURE_SYNC_V1.md
Documento clave de integración entre la base narrativa (Supabase) y el contenedor simbólico de assets (Azure Blob). Registra:
- Rutas activas de App Service.
- Pruebas REST y JSON validados.
- Confirmación de blobs sincronizados.

### bitacora-sync-campanas.md
Bitácora semiautomática de ingestión de campañas CDU en formato ZIP. Relacionada directamente con:
- `zdu-storage/`
- `zdu/casos/`
- Triggers para Fast Response y NODO-CAMP.

### package.json
Archivo que define el entorno lógico del motor simbiótico:
- Dependencias del universo ZDU.
- Scripts de validación, ingestión y auditoría.
- Relación directa con Genie y su interpretación narrativa.

### package-lock.json
Representación exacta del entorno al momento del checkpoint. Garantiza:
- Reproducibilidad del entorno.
- Validación del estado en auditorías futuras.
- Integridad ante migraciones (por ejemplo, si se replica en AWS o local).

---

## Función estratégica

El sistema de checkpoints permite que cualquier cambio estructural:
- Sea **documentado con lógica de versiones**.
- Tenga reversibilidad inmediata (rollback narrativo/técnico).
- Se integre con `ZDU-RECALC`, `NODO-CAMP`, y MUTA·CORE.
- Active alertas de desalineación simbólica si una estructura se rompe.

---

## Módulos relacionados

| Módulo                           | Descripción |
|----------------------------------|-------------|
| `private/infra/ai/genie/`       | Núcleo del sistema AI simbiótico |
| `private/infra/mappings/`       | Conexiones estructurales entre campañas y nodos |
| `zdu-storage/`                  | Motor Supabase ↔ Blob, sincronización activa |
| `zdu/casos/`                    | Casos CDU en ingestión o etapa narrativa |
| `private/experimental/`         | Scripts en incubación técnica/narrativa |

---

## Protocolo de uso

1. Cada nuevo `checkpoint` debe contener un `.md` explicativo.
2. Si hay scripts o variables de entorno, usar `package.json`.
3. Si se modifica el entorno, actualizar y versionar `package-lock.json`.
4. Capturas visuales (ej. de pruebas, blobs o dashboards) deben ir en subcarpeta `screenshots/`.
5. Todo nuevo checkpoint debe ser referenciado desde el `README.md` raíz y auditado.

---

## Custodios simbólicos

- **CEREBRUM**: custodio lógico de versiones, integridad de entorno y rollback.
- **IFRL**: preserva el sentido simbólico y narrativo de cada decisión estructural.
- **Genie**: módulo AI con capacidad de interpretar, auditar y evolucionar los scripts desde una perspectiva contextual.

---

## Estado actual

Último commit validado:
- `package.json`: entorno actualizado con scripts narrativos.
- `bitácora de campañas`: ingestión validada y correlacionada con CDU.
- `Supabase ↔ Azure`: sincronización activa confirmada.

---