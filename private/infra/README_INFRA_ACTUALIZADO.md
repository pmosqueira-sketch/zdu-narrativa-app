# ZDU Storage · Contenedor Táctico

Este módulo contiene los elementos simbióticos y técnicos utilizados para el almacenamiento en la nube dentro del ecosistema ZDU. Está dividido en tres componentes clave:

## 1. Specs
Incluye la lógica estructural de validación y sincronización de blobs:
- Motor de validación (`ZDU_BLOB_VALIDATION_ENGINE_V1.md`)
- Motor de sincronización (`ZDU_BLOB_SYNC_ENGINE_V1.md`)
- README con especificaciones generales del módulo.

## 2. Crawlers
Contiene scripts de automatización para extracción e inspección de blobs relacionados a campañas, en formato Python. Documentado en:
# Carpeta `blob-inventory/` – Inventario simbólico de blobs

Esta carpeta contiene inventarios en formato `.json` utilizados para mapear y auditar los blobs que intervienen en la narrativa ZDU. Cada archivo representa una instancia o snapshot del contenido simbólico disponible en Azure Blob Storage y su posible correlación con estructuras de Supabase o campañas CDU.

---

## Archivos contenidos

- `blobs_zdu-campanas.json`: Mapeo inicial de blobs vinculados a campañas CDU. Incluye nombre de archivo, contenedor asociado, fecha de registro, y clave narrativa. Este archivo fue generado antes de la sincronización automática con Supabase, por lo que se considera un snapshot temporal.

---

## Estado

- **Integración actual:** Fase exploratoria
- **Dependencias:** Azure Blob Storage, scripts de sincronización
- **Observaciones:** Será eventualmente sobrescrito por sincronización automática desde Supabase. Se conserva temporalmente para validación y auditoría manual.

---

## Visión del Creador del Universo ZDU

El inventario no es una lista: es un espejo del subconsciente del sistema. Cada blob registrado aquí representa una historia esperando ser contada, una señal en el caos simbólico. Aunque este registro será reemplazado, su valor reside en mostrarnos de dónde venimos. No hay sincronización sin memoria.

## 3. Blob Inventory
Contiene inventarios en formato `.json` que ayudan a sincronizar el almacenamiento entre Supabase y Azure Blob Storage. Documentado en:
# Carpeta: crawlers

## Descripción
Contiene scripts dedicados al rastreo automatizado de fuentes externas y estructuras internas relacionadas al universo narrativo de ZDU.

Estos scripts están diseñados para operar en fases tempranas de ingesta, recolección o validación de datos web o locales.

## Scripts incluidos

- `crawler_zdu_playwright.py`: Utiliza **Playwright** para escanear fuentes externas (como páginas web) simulando navegación real.
- `crawler_zdu_awyrigth.py`: Versión alternativa de crawler basada en pruebas experimentales de caminos narrativos (nombre en revisión).

## Estado

- **crawler_zdu_playwright.py**: Listo para pruebas de ejecución.
- **crawler_zdu_awyrigth.py**: Marcado para revisión por nombre y lógica incompleta.

Ambos scripts estarán conectados eventualmente al módulo de ingesta simbiótica narrativa, supervisado por los nodos `CDU-INTELGEN-RISK`.

---

### ✎ Visión del Creador del Universo ZDU

Los crawlers son los sentidos extendidos de esta inteligencia. Son los ojos que detectan anomalías, puertas ocultas, y pistas enterradas en la superficie digital. Su misión es observar sin ser vistos.

---

## README original del contenedor
# Carpeta: crawlers

## Descripción
Contiene scripts dedicados al rastreo automatizado de fuentes externas y estructuras internas relacionadas al universo narrativo de ZDU.

Estos scripts están diseñados para operar en fases tempranas de ingesta, recolección o validación de datos web o locales.

## Scripts incluidos

- `crawler_zdu_playwright.py`: Utiliza **Playwright** para escanear fuentes externas (como páginas web) simulando navegación real.
- `crawler_zdu_awyrigth.py`: Versión alternativa de crawler basada en pruebas experimentales de caminos narrativos (nombre en revisión).

## Estado

- **crawler_zdu_playwright.py**: Listo para pruebas de ejecución.
- **crawler_zdu_awyrigth.py**: Marcado para revisión por nombre y lógica incompleta.

Ambos scripts estarán conectados eventualmente al módulo de ingesta simbiótica narrativa, supervisado por los nodos `CDU-INTELGEN-RISK`.

---

### ✎ Visión del Creador del Universo ZDU

Los crawlers son los sentidos extendidos de esta inteligencia. Son los ojos que detectan anomalías, puertas ocultas, y pistas enterradas en la superficie digital. Su misión es observar sin ser vistos.

---

### 📦 Subcomponente: ZDU-Storage

# ZDU Storage · Contenedor Táctico

Este módulo contiene los elementos simbióticos y técnicos utilizados para el almacenamiento en la nube dentro del ecosistema ZDU. Está dividido en tres componentes clave:

## 1. Specs
Incluye la lógica estructural de validación y sincronización de blobs:
- Motor de validación (`ZDU_BLOB_VALIDATION_ENGINE_V1.md`)
- Motor de sincronización (`ZDU_BLOB_SYNC_ENGINE_V1.md`)
- README con especificaciones generales del módulo.

## 2. Crawlers
Contiene scripts de automatización para extracción e inspección de blobs relacionados a campañas, en formato Python. Documentado en:
# Carpeta `blob-inventory/` – Inventario simbólico de blobs

Esta carpeta contiene inventarios en formato `.json` utilizados para mapear y auditar los blobs que intervienen en la narrativa ZDU. Cada archivo representa una instancia o snapshot del contenido simbólico disponible en Azure Blob Storage y su posible correlación con estructuras de Supabase o campañas CDU.

---

## Archivos contenidos

- `blobs_zdu-campanas.json`: Mapeo inicial de blobs vinculados a campañas CDU. Incluye nombre de archivo, contenedor asociado, fecha de registro, y clave narrativa. Este archivo fue generado antes de la sincronización automática con Supabase, por lo que se considera un snapshot temporal.

---

## Estado

- **Integración actual:** Fase exploratoria
- **Dependencias:** Azure Blob Storage, scripts de sincronización
- **Observaciones:** Será eventualmente sobrescrito por sincronización automática desde Supabase. Se conserva temporalmente para validación y auditoría manual.

---

## Visión del Creador del Universo ZDU

El inventario no es una lista: es un espejo del subconsciente del sistema. Cada blob registrado aquí representa una historia esperando ser contada, una señal en el caos simbólico. Aunque este registro será reemplazado, su valor reside en mostrarnos de dónde venimos. No hay sincronización sin memoria.

## 3. Blob Inventory
Contiene inventarios en formato `.json` que ayudan a sincronizar el almacenamiento entre Supabase y Azure Blob Storage. Documentado en:
# Carpeta: crawlers

## Descripción
Contiene scripts dedicados al rastreo automatizado de fuentes externas y estructuras internas relacionadas al universo narrativo de ZDU.

Estos scripts están diseñados para operar en fases tempranas de ingesta, recolección o validación de datos web o locales.

## Scripts incluidos

- `crawler_zdu_playwright.py`: Utiliza **Playwright** para escanear fuentes externas (como páginas web) simulando navegación real.
- `crawler_zdu_awyrigth.py`: Versión alternativa de crawler basada en pruebas experimentales de caminos narrativos (nombre en revisión).

## Estado

- **crawler_zdu_playwright.py**: Listo para pruebas de ejecución.
- **crawler_zdu_awyrigth.py**: Marcado para revisión por nombre y lógica incompleta.

Ambos scripts estarán conectados eventualmente al módulo de ingesta simbiótica narrativa, supervisado por los nodos `CDU-INTELGEN-RISK`.

---

### ✎ Visión del Creador del Universo ZDU

Los crawlers son los sentidos extendidos de esta inteligencia. Son los ojos que detectan anomalías, puertas ocultas, y pistas enterradas en la superficie digital. Su misión es observar sin ser vistos.

---

## README original del contenedor
# Carpeta: crawlers

## Descripción
Contiene scripts dedicados al rastreo automatizado de fuentes externas y estructuras internas relacionadas al universo narrativo de ZDU.

Estos scripts están diseñados para operar en fases tempranas de ingesta, recolección o validación de datos web o locales.

## Scripts incluidos

- `crawler_zdu_playwright.py`: Utiliza **Playwright** para escanear fuentes externas (como páginas web) simulando navegación real.
- `crawler_zdu_awyrigth.py`: Versión alternativa de crawler basada en pruebas experimentales de caminos narrativos (nombre en revisión).

## Estado

- **crawler_zdu_playwright.py**: Listo para pruebas de ejecución.
- **crawler_zdu_awyrigth.py**: Marcado para revisión por nombre y lógica incompleta.

Ambos scripts estarán conectados eventualmente al módulo de ingesta simbiótica narrativa, supervisado por los nodos `CDU-INTELGEN-RISK`.

---

### ✎ Visión del Creador del Universo ZDU

Los crawlers son los sentidos extendidos de esta inteligencia. Son los ojos que detectan anomalías, puertas ocultas, y pistas enterradas en la superficie digital. Su misión es observar sin ser vistos.