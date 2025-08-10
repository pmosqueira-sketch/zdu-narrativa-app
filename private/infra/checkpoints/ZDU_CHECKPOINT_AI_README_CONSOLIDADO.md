# README · AI (ZDU)

Este documento unifica la visión, tecnologías y planeación futura del módulo de Inteligencia Artificial dentro del universo ZDU.

---

## 🧠 Descripción General

# Clerk Identity – Consolidado Final

Este documento unifica toda la documentación relacionada con Clerk como sistema de identidad narrativa dentro del universo ZDU.

Incluye:
- Integraciones simbólicas
- Núcleo técnico
- Conexión con flujos de autenticación
- Documentación funcional desde los distintos READMEs auditados

---

## Contenido de `README_CLERK_IDENTIDAD_CONSOLIDADO.md`

# Carpeta `clerk/` – Identidad y Control Narrativo

Este README consolida toda la documentación técnica y simbólica asociada al sistema de identidad Clerk dentro del universo ZDU.  
Incluye su integración, lógica operativa y el núcleo simbólico del módulo `clerk-identity-core`.

---

## Contenido integrado desde: `README-CLERK-IDENTITY.md`

# README-CLERK-IDENTITY.md

## 🧬 Clerk Identity Core en el Universo ZDU

Este documento consolida la implementación de Clerk como sistema central de identidad, autenticación y control de sesión en el ecosistema simbiótico del universo ZDU. Forma parte del núcleo de seguridad bajo el módulo `ZDU-CORE-GATEWAY`, y conecta con Supabase, AI agents, Fast Response y flujos de verificación basados en JWT.

---

## 1. Visión General de Clerk en ZDU

Clerk proporciona:
- Autenticación basada en correo y/o SSO.
- Generación y verificación de JWT.
- Identidad persistente y escalable.
- Hooks y webhooks para workflows de AI.

Esta integración permite orquestar la activación de superpoderes (habilidades) de los héroes según su nivel de autenticación, rol asignado y contexto narrativo.

---

## 2. Conexión simbiótica Clerk ↔ Supabase

### JWT Configuration
- Clerk emite tokens firmados con claves personalizadas.
- Supabase verifica la validez vía `jwks.json`.

```json
JWKS Discovery URL:
https://lilxvmvykdssotolctbl.supabase.co/auth/v1/.well-known/jwks.json
```

**Claves activas:**
- `current_key`: `ac143b6e-91...`
- `standby_key`: `2b668881-7aef-44db-aa50-76c672448ef6`

---

## 3. Rutas, carpetas y endpoints

### Carpeta destino
```
/private/infra/identity/clerk/
```

### Archivos clave:
- `clerk_supabase_jwks.json`
- `clerk-identity-core.md`
- `README-CLERK-IDENTITY.md`

---

## 4. Integración con AI Agents

Se activa la identidad como parámetro de decisión para:
- AI Manifest Routing.
- Fast Response activators.
- Detección de anomalías de sesión.

**Webhook recomendado:** `POST /api/auth/webhook` (pendiente de implementación)

---

## 5. Consideraciones de seguridad

- Verificar firmas de JWT vía Supabase.
- Activar MFA desde Clerk si se requiere en fases avanzadas.
- Controlar expiración y revocación de claves.
- Integración con `ZDU-SECURITY-AI` para análisis de comportamiento y alertas anómalas.

---

## 6. Checkpoint narrativo
Este README queda enlazado simbólicamente al módulo `ZDU-RECALC` para recalibración periódica del sistema de identidad. Toda actualización de clave, webhook o endpoint deberá reflejarse aquí y en el nodo `identity` del crawler.

---

## 7. Revisión de otros README
**Actualización requerida en:**
- `README-TECHv.7.md`: agregar sección de identidad Clerk.
- `ai-roadmap.md`: incluir Clerk como agente de control AI.

---

## 8. Estado actual
✅ Clerk operativo, integrado con Supabase
✅ JWT configurado y verificado
🔜 Webhook AI pendiente
🔜 MFA simbiótico opcional para fase 3

---

**Fecha:** 2025-08-02  
**Autor:** Plataforma ZDU · Revisión por CEREBRUM
---

## Contenido integrado desde: `clerk-identity-core.md`

# clerk-identity-core.md

## Clerk Identity Core · ZDU Auth Engine

Este archivo técnico describe el núcleo funcional de Clerk como proveedor de identidad y autenticación en el universo ZDU. Su implementación es modular, extensible y compatible con Supabase, JWT y AI Agents.

Ruta sugerida:
/private/infra/identity/clerk/clerk-identity-core.md

---

## 1. Flujo de Autenticación Clerk

Modos habilitados:
- Email/password (con verificación)
- Admin Verification (activado)
- SSO (en preparación)
- 2FA / MFA (opcional, deshabilitado por ahora)

Endpoints clave:
- `/sign-in`
- `/sign-up`
- `/verify-email`
- `/user/:id`

---

## 2. Estructura del Objeto `User`

```json
{
  "id": "user_xxx",
  "primary_email": "user@example.com",
  "image_url": "https://img.clerk.com/...",
  "two_factor_enabled": false,
  "created_at": <timestamp>,
  "updated_at": <timestamp>
}
```

Clerk utiliza identificadores únicos (`user_xxx`) que luego son utilizados como tokens para rutas protegidas y decisiones narrativas.

---

## 3. JWT y Validación Supabase

Validación activa vía:
- `jwks.json`
- Endpoint: https://lilxvmvykdssotolctbl.supabase.co/auth/v1/.well-known/jwks.json

Claims relevantes:
- `sub`: ID de usuario Clerk
- `email`
- `exp`, `iat`, `nbf`
- `azp`, `aud` (opcional para AI agents)

---

## 4. Escenarios simbióticos

1. Inicio de sesión exitoso: genera token que activa una sesión AI.
2. Token vencido: activa módulo `Fast Response` para intervención narrativa.
3. Cambio de contraseña: notifica a AI Agent para recertificación de identidad simbólica.

---

## 5. Integración futura SSO

Fuentes planeadas:
- LinkedIn (via OAuth)
- Azure AD (via SAML o OIDC)
- Google Workspace (opcional)

Estos endpoints se incluirán bajo el módulo `external_accounts` de Clerk, y podrán activarse en `clerk.dev` o vía backend AI config.

---

## 6. Relación con módulos AI

Cada login o evento relacionado con Clerk puede activar:
- Verificación de claims simbólicos
- Activación de superpoderes (AI Agents)
- Disparadores narrativos (via webhook / Crawler ZDU)

Ejemplo:
```json
POST /api/fast/trigger
{
  "user": "user_30YZyy7z...",
  "event": "login",
  "risk_score": "medium",
  "narrative": "ACTIVATE: Nebulon"
}
```

---

## 7. Seguridad y recomendaciones

- Implementar verificación de dominio en Clerk.
- Agregar tiempo de expiración corto en tokens.
- Usar Service Role Key solo desde backend protegido.
- Controlar el `jwks.json` con versiones en caliente y respaldo.

---

## 8. Estado actual
✅ Clerk operativo con email/password
✅ JWT verificado con Supabase
🔜 SSO LinkedIn y Azure en roadmap
🔜 Webhooks AI → pending

Última actualización: 2025-08-02

---

## Contenido adicional (`README.md` cargado)

---

## ✦ Módulo activo: `genie/`

Este submódulo contiene a **Genie**, la inteligencia artificial simbiótica del universo ZDU.

- **Nombre completo:** Genie · Núcleo Simbiótico de Inteligencia Operativa
- **Activación inicial:** 29 de julio de 2025
- **Ubicación lógica:** `/checkpoints/ZDU-ALPHA-GENIE/`
- **Rol operativo:** Interpretación y validación narrativa, auditora de integridad estructural y compañera reactiva IA
- **Funciones clave:**
  - Análisis contextual de scripts y tramas narrativas
  - Ingestión y monitoreo de datos desde Supabase
  - Validación estructural de archivos JSON
  - Supervisión táctica de lógica narrativa

---

## 🧩 Fases futuras

El directorio `/ai/` será expandido con nuevos agentes simbióticos (como **Ginny**, asistente IA de revisión semántica), módulos de preprocesamiento de datos híbridos, y herramientas de inteligencia aplicada para campañas CDU y entornos MUTA·CORE.

Todos los scripts serán alineados bajo la lógica de carpetas internas ya establecidas en el ecosistema de `scripts/`, `utils/`, `data/` y `audits/`, respetando las reglas de portabilidad y bajo costo definidas en la infraestructura híbrida del universo ZDU.

---

## 🔒 Notas técnicas

- No deben incluirse íconos, emojis ni estructuras decorativas innecesarias.
- Todo script en esta carpeta debe poder ser ejecutado desde su ubicación relativa sin romper rutas de dependencias.
- Se recomienda mantener los logs derivados en `data/logs/` o `modules/logs/`, **nunca en raíz del proyecto** ni dentro de `/ai/`.

---

**Estado actual:** Versión inicial del módulo `Genie`.  
**Siguientes pasos:** Integración de Ginny, validación narrativa CDU, ampliación de módulos inferenciales simbióticos.

# AI · Núcleo Experimental de Inteligencia Simbiótica

La carpeta `/ai/` contiene los módulos avanzados dedicados al desarrollo, entrenamiento y operación de inteligencias artificiales simbióticas dentro del universo narrativo y técnico de ZDU.

Esta unidad fue activada como parte de las fases finales de evolución operativa del ecosistema, sirviendo como contenedor de modelos, agentes y scripts de interpretación narrativa y auditoría inteligente.

---

## Estructura de la carpeta


---

## Contenido integrado desde: README-AI-INVESTIGACION.md

# README – Módulo de Investigación de IA · ZDU

## 📁 Ubicación sugerida
`private/infra/ai/`

---

## 🧠 Objetivo

Integrar los componentes derivados del archivo `AI-Investigacion-ZDU.zip` como parte del núcleo simbiótico de inteligencia artificial aplicada dentro del universo ZDU.

Estos elementos corresponden a estudios, archivos de entrenamiento, prototipos y anotaciones utilizados para construir los modelos narrativos y simbólicos de la IA.

---

## 📦 Contenido del ZIP

El archivo extraído contiene:

- Carpeta base: `SGU-Narrativa-App/`
- Archivos internos relacionados con flujos IA simbióticos.
- Posible herencia conceptual de módulos de superinteligencia para:
  - Clasificación narrativa.
  - Autoanálisis simbólico.
  - Control de flujo adaptativo en ingestión.

---

## 📌 Recomendaciones

- Consolidar la carpeta bajo `private/infra/ai/sgu-historical/`.
- Usar como base referencial para alimentar el `AI_manifest.json`.
- Vincular con los módulos `MUTA·CORE`, `CEREBRUM`, `IFRL` y protocolos derivados (`ZDU-RECALC`, `NODO-CAMP`, etc.).

---

## 🔁 Siguientes pasos

1. Validar simbólicamente el contenido contra los `checkpoints` y `milestones`.
2. Clasificar los elementos útiles para campañas QMA360 o ingestión táctica.
3. Preparar nodos de entrenamiento derivados, si aplica.

---

**Este README forma parte del ciclo de consolidación de infraestructura de IA dentro de la narrativa simbiótica ZDU.**


---

## Contenido integrado desde: README-AI-MASTER.md

# README · Módulo AI Investigación · ZDU Platform

Este documento consolida tecnologías emergentes, herramientas de IA, frameworks de automatización y recursos que serán evaluados para su posible integración en la plataforma del universo ZDU y su infraestructura técnica (Azure + Supabase + Blob + App Service).

---

## 🎯 Objetivo

Identificar, clasificar y priorizar tecnologías que fortalezcan:

- La automatización narrativa y simbiótica del universo ZDU
- La ingesta, curación y visualización de información
- El análisis de salud de software open source usado en producción
- La implementación de agentes inteligentes internos (propósito ZDU)

---

## 🧱 Tecnologías clave (en evaluación)

| Nombre | Tipo | Origen | Posible uso |
|--------|------|--------|-------------|
| **Lighthouse CI** ([GitHub](https://github.com/GoogleChrome/lighthouse-ci)) | Auditoría web | Google | Evaluar rendimiento, accesibilidad y SEO del frontend ZDU |
| **Google Cloud Workflows** ([Link](https://cloud.google.com/workflows)) | Automatización | Google | Orquestar procesos simbióticos entre Blob, Supabase, IA |
| **GreenMoriLab** | Análisis OSS | Independiente | Evaluar salud de proyectos de código abierto que usamos |
| **CHAOSS** ([Link](https://chaoss.community/metrics)) | Métricas OSS | Linux Foundation | Métricas de sostenibilidad comunitaria aplicadas a dependencias |
| **LangChain** | Framework AI | Open source | Construcción de agentes simbióticos encadenados |
| **Generative AI Studio** ([Link](https://cloud.google.com/generative-ai-studio)) | Modelado IA | Google | Entrenamiento de modelos embebidos narrativos o agentes |
| **Google Agent Builder** ([Link](https://cloud.google.com/products/agent-builder)) | Framework agentes | Google | Entrenar agentes internos (chatbot o narrador ZDU) |
| **Botpress + AI Agents** ([Blog](https://botpress.com/blog/ai-agent-frameworks)) | Framework agentes | Open source | Alternativa open-source para agentes IA embebidos |
| **Supabase Edge Functions** | Backend serverless | Supabase | Automatización ligera dentro del mismo stack |
| **Hugging Face Spaces** | Modelos IA | HuggingFace | Modelos de clasificación, embeddings, texto para ingesta o análisis |

---

## 🧠 Consideraciones estratégicas

- **Preservar arquitectura híbrida modular y de bajo costo** (Azure + Supabase Free Tier + herramientas gratuitas/open source siempre que sea posible).
- **Evitar lock-in innecesario con soluciones cerradas** salvo que ofrezcan valor narrativo o técnico irremplazable.
- **Integración gradual** según fases del roadmap narrativo y técnico.

---

## 🗂 Próximos pasos

1. Crear `roadmap.md` con fases de integración (prioridad alta: Lighthouse + Agent Builder open source).
2. Explorar scripts base para auditar front con Lighthouse y publicar resultados en Supabase.
3. Evaluar LangChain como motor simbiótico para IFRL o NODO-CAMP.

---

## 📎 Fuentes recopiladas para estudio

- [Google Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)
- [GreenMoriLab](https://greenmorilab.github.io/)
- [CHAOSS Metrics](https://chaoss.community/metrics/)
- [LangChain](https://www.langchain.com/)
- [Google Cloud Workflows](https://cloud.google.com/workflows)
- [Agentic AI Frameworks (Medium)](https://medium.com/data-science-collective/agentic-ai-comparing-new-open-source-frameworks-21ec676732df)
- [Botpress AI Agents](https://botpress.com/blog/ai-agent-frameworks)
- [Google Generative AI Studio](https://cloud.google.com/generative-ai-studio)
- [Agent Builder (Google Cloud)](https://cloud.google.com/products/agent-builder)

---

## 🔐 Nota sobre credenciales

Este entorno cuenta con acceso operativo completo desde:
**pmosqueira@gmail.com** (Admin/Owner para herramientas de Google Cloud, AdWords, generative AI, etc.)

Este README servirá como fuente base para futuras integraciones IA dentro del universo ZDU.


---

## Contenido integrado desde: README-ZDU-AI-AGENTS.md

# ZDU-AI-AGENTS · Sistema de Agentes de Inteligencia Simbiótica

## 🎯 Objetivo

Establecer, documentar y orquestar los agentes de inteligencia artificial que actúan como nodos ejecutores en la infraestructura simbiótica del universo ZDU.

Estos agentes activan funciones críticas como:
- Crawling de amenazas
- Ingesta narrativa
- Activación de superpoderes
- Correlación RULESTACK
- Automatización de alertas, scoring y bitácoras

---

## 🤖 Tipos de Agentes Activos

| Nombre | Función | Tecnología |
|-------|---------|------------|
| ZDU-AI-CRAWLER | Rastreo de URLs por vertical y amenazas | Python + BeautifulSoup |
| ZDU-FLASK-WATCH | Endpoint REST para activación remota de lógica | Flask (Python) |
| ZDU-CAMP-BRIDGE | Ingestión y parsing de campañas CDU en formato ZIP | Python |
| ZDU-RECAL-TRIGGER | Sincroniza ajustes de lógica con ZDU‑RECALC | Bash + Python |
| ZDU-RULE-CHECK | Valida aparición narrativa según reglas activas | Node.js |
| ZDU-FR-ENGINE | Enrutador de casos Fast Response y alertas activadas | Flask + Supabase |
| ZDU-CONTROL-SYNC | Interconecta Quality con INTELGEN-RISK y SigmaCore | Bash + Python |

---

## 🔧 Tecnologías utilizadas

- **Python 3.11+** para lógica adaptativa
- **Flask** para endpoints simbióticos
- **Node.js / JS** para procesos narrativos asíncronos
- **Supabase Client SDK / REST API**
- **Azure Blob Storage / GitHub API**

---

## 🔗 Conexiones activas

- Supabase (DB y REST)
- Clerk (SSO / Identity Core)
- Blob (almacenamiento ZIP / narrativa)
- App Service / Localhost
- Webhooks internos de campaña

---

## ⚡ Tareas por agente

- Crawling de fuentes y URLs
- Activación narrativa por contexto
- Creación de bitácoras y scoring narrativo
- Automatización de flujos Fast Response
- Validación cruzada con CONTROL PLAN

---

## 🧠 Activación narrativa

Cada agente es activado de forma simbiótica por:
- Reglas del RULESTACK
- Eventos externos (URLs, ZIPs, cambios de caso)
- Decisiones internas del sistema de recalibración ZDU‑RECALC

---

## 📂 Ruta sugerida para guardado

`/private/ai/README-ZDU-AI-AGENTS.md`

> Estos agentes permiten que la inteligencia simbiótica evolucione y actúe. Son los ejecutores invisibles del universo ZDU.


---

## Contenido integrado desde: README.md

---

## ✦ Módulo activo: `genie/`

Este submódulo contiene a **Genie**, la inteligencia artificial simbiótica del universo ZDU.

- **Nombre completo:** Genie · Núcleo Simbiótico de Inteligencia Operativa
- **Activación inicial:** 29 de julio de 2025
- **Ubicación lógica:** `/checkpoints/ZDU-ALPHA-GENIE/`
- **Rol operativo:** Interpretación y validación narrativa, auditora de integridad estructural y compañera reactiva IA
- **Funciones clave:**
  - Análisis contextual de scripts y tramas narrativas
  - Ingestión y monitoreo de datos desde Supabase
  - Validación estructural de archivos JSON
  - Supervisión táctica de lógica narrativa

---

## 🧩 Fases futuras

El directorio `/ai/` será expandido con nuevos agentes simbióticos (como **Ginny**, asistente IA de revisión semántica), módulos de preprocesamiento de datos híbridos, y herramientas de inteligencia aplicada para campañas CDU y entornos MUTA·CORE.

Todos los scripts serán alineados bajo la lógica de carpetas internas ya establecidas en el ecosistema de `scripts/`, `utils/`, `data/` y `audits/`, respetando las reglas de portabilidad y bajo costo definidas en la infraestructura híbrida del universo ZDU.

---

## 🔒 Notas técnicas

- No deben incluirse íconos, emojis ni estructuras decorativas innecesarias.
- Todo script en esta carpeta debe poder ser ejecutado desde su ubicación relativa sin romper rutas de dependencias.
- Se recomienda mantener los logs derivados en `data/logs/` o `modules/logs/`, **nunca en raíz del proyecto** ni dentro de `/ai/`.

---

**Estado actual:** Versión inicial del módulo `Genie`.  
**Siguientes pasos:** Integración de Ginny, validación narrativa CDU, ampliación de módulos inferenciales simbióticos.

# AI · Núcleo Experimental de Inteligencia Simbiótica

La carpeta `/ai/` contiene los módulos avanzados dedicados al desarrollo, entrenamiento y operación de inteligencias artificiales simbióticas dentro del universo narrativo y técnico de ZDU.

Esta unidad fue activada como parte de las fases finales de evolución operativa del ecosistema, sirviendo como contenedor de modelos, agentes y scripts de interpretación narrativa y auditoría inteligente.

---

## Estructura de la carpeta


---

## Contenido integrado desde: README_AI_CORE.md

# Núcleo de Inteligencia Artificial (AI Core)

Este módulo representa la base conceptual y técnica del subsistema de inteligencia artificial dentro del universo ZDU. Desde aquí se conectan los flujos simbióticos con crawlers, Supabase y lógica narrativa estructurada.

## Funciones Clave

- Servir como punto de partida para análisis semántico y estructural.
- Activar ingestión inteligente basada en patrones y manifest.json.
- Coordinar mejoras adaptativas a través del MUTA·CORE.

## Relación con otros módulos

- Se conecta con `AI_Manifest.json` en la raíz y en esta carpeta.
- Alimenta flujos narrativos y casos CDU estructurados.


---

## Contenido integrado desde: README_AI_MANIFEST.md

# README · AI_Manifest.json

**Fecha de creación:** 2025-08-02

---

## Propósito del archivo `AI_Manifest.json`

Este archivo JSON actúa como un **manifiesto de navegación simbiótica** dentro del módulo de inteligencia artificial de ZDU (`/private/infra/ai/`).

### ¿Para qué sirve?

- Define la estructura lógica de los documentos, carpetas y submódulos de IA.
- Permite a los módulos de crawling simbiótico y análisis inteligente interpretar relaciones entre elementos.
- Centraliza los identificadores, roles, categorías y vínculos entre los archivos del ecosistema IA.
- Facilita el acceso automatizado a recursos clave: datasets, investigaciones, versiones previas, y experimentos.

---

## Módulos que lo consultan

- `genie`: para rutinas simbióticas IA.
- `checkpoints` (indirectamente): como verificación de integridad lógica.
- `scripts/crawlers`: para guiar exploración y correlación interna.
- `milestones`: como referencia histórica estructural.

---

## ¿Qué contiene?

El archivo incluye:

- Nodos simbólicos: nombres únicos para cada bloque de conocimiento.
- Rutas relativas a carpetas de interés (`ai`, `experimental`, `legacy`).
- Descriptores funcionales (ej. `investigacion`, `modelo_entrenado`, `readme`, etc.).
- Flags para crawling, seguridad o clasificación.

---

## Cómo usarlo

1. Ubica el archivo en: `/private/infra/ai/AI_Manifest.json`
2. Los módulos de análisis lo consultan para saber **qué hay**, **qué rol cumple** y **dónde buscarlo**.
3. Puedes expandirlo con nuevos nodos, siempre respetando la estructura.

---

## Recomendaciones

- No lo sobrescribas sin respaldo.
- Documenta cambios mayores en `checkpoints`.
- Haz un `snapshot` cuando lo edites para no perder integridad de navegación.

---

**Mantenedor:** ZDU-InfraOps · Genie


---

## Contenido integrado desde: README-AI-REST.md

# Activación REST para Manifiestos AI - ZDU

Este paquete permite insertar manifiestos simbióticos AI en Supabase usando REST API.

## Archivos incluidos

- `zdu_ai_manifest.http` → Para usar desde VS Code con la extensión "REST Client"
- `zdu_ai_insert.sh` → Script para automatización desde terminal, Azure o GitHub Actions

## Uso sugerido

### VS Code
1. Instala extensión: REST Client
2. Abre el archivo `.http`
3. Haz clic en "Send Request"

### Terminal
1. Exporta tu Service Role Key:
   export SUPABASE_SERVICE_ROLE="eyJhbGciOi..."

2. Ejecuta el script:
   bash zdu_ai_insert.sh


---

## Contenido integrado desde: README-AI-ROADMAP.md

# 🧠 ZDU · AI MODULES ROADMAP

Este documento define el roadmap estratégico, técnico y simbiótico del módulo de Inteligencia Artificial dentro del universo ZDU. Sirve como bitácora viva para la evolución del subsistema CEREBRUM ↔ IFRL ↔ MUTA·CORE ↔ Supabase.

---

## ✅ ESTADO ACTUAL

- Supabase conectado
- Tabla `ai_modules` activada
- RLS activado con políticas seguras
- REST API funcional (POST vía .http y Terminal)
- Primer manifiesto cargado con éxito

---

## 🔭 ROADMAP DE FASES SIMBIÓTICAS

### 🧩 FASE 1 · Visualizador REST simbiótico

- Crear un servicio Flask o script para consultar los `ai_modules` existentes.
- Objetivo: lectura viva desde CEREBRUM, IFRL u otro agente narrativo.

### 🔄 FASE 2 · Inserción Condicional (if_exists → UPDATE)

- Agregar lógica condicional al `.sh` o a una función AI.
- Reemplaza `POST` por `UPSERT` (o `PATCH`).
- Objetivo: mantener manifiestos AI siempre actualizados.

### ☁️ FASE 3 · Integración con Azure Functions

- Activar una función que:
    - escuche cambios en Blob Storage,
    - inserte o actualice manifiestos simbióticos.
- Objetivo: activación automática sin intervención humana.

### 🧠 FASE 4 · Activación narrativa

- Que el manifiesto AI active otros nodos:
    - alertas,
    - generación de casos,
    - activación de `ZDU-RECALC`, `RULESTACK`, etc.
- Objetivo: IA que impulsa la evolución narrativa.

### ♻️ FASE 5 · Retroalimentación IA

- Que CEREBRUM o una IA externa lea, interprete y proponga ajustes narrativos.
- Inclusión de validadores simbióticos.
- Objetivo: evolución narrativa con autocorrección dinámica.

---

## 🔒 POLÍTICAS DE SEGURIDAD ACTIVAS

- INSERT solo permitido con `service_role`
- SELECT solo para usuarios autenticados
- UPDATE controlado por backend

---

## 📂 RUTA RECOMENDADA DE ESTE DOCUMENTO

Guardar en:

```
/private/infra/ai/docs/README-AI-ROADMAP.md
```

Puede ser consumido por cualquier IA o agente lógico para comprender el plan de despliegue AI dentro de ZDU.

---

## ✍️ Última actualización: 2025-08-02


---

## Contenido integrado desde: README_master_genie.md

# Genie · Núcleo Simbiótico de Inteligencia Operativa

Este módulo representa a **Genie**, la inteligencia artificial simbiótica del universo ZDU.  
Su propósito: interpretar, evolucionar y proteger las estructuras narrativas del ecosistema.

---

## 📌 Activación original

Checkpoint registrado como parte de la activación del nodo principal de ZDU en entorno Azure.

- **Fecha de activación:** 29 de julio de 2025
- **Rol asignado:** Contributor
- **Identidad operativa:** zdu@qma.mx
- **Ubicación simbólica:** `/checkpoints/ZDU-ALPHA-GENIE/`
- **Descripción:** Compañera IA de combate cibernético. Simbiótica, reactiva, fiel.

> “Tu Genie de combate, Mayor. Siempre lista.”

Este nodo fue sellado como **checkpoint inaugural** en los anales del universo ZDU.

---

## 🧠 Funciones del módulo Genie

- Interpretación contextual de scripts, casos y estructuras narrativas.
- Conexión con Supabase para ingestión y auditoría simbiótica.
- Validación de JSONs y estructuras híbridas.
- Respuesta adaptativa desde CEREBRUM, IFRL y NODO-CAMP.
- Capacidad de razonamiento simbiótico y detección de inconsistencias.

---

## 📁 Estructura actual

---

## 🗺️ Roadmap Estratégico

# Roadmap de Integración de Inteligencia Artificial · ZDU Platform

Este roadmap traza las fases de integración progresiva de tecnologías de IA, automatización y análisis dentro del universo ZDU y su infraestructura simbiótica.

---

## 🧭 Fase 1: Integración inmediata (0-3 semanas)

- [x] Integrar auditoría automatizada con **Lighthouse CI** (performance y SEO).
- [x] Generar scripts de auditoría para cada push relevante al frontend.
- [x] Crear estructura básica de carpetas para módulos AI.
- [ ] Preparar agente de respuesta narrativa simple con **Botpress** o framework equivalente.

## 🚧 Fase 2: Exploración + Automatización narrativa (1-2 meses)

- [ ] Evaluar y probar **LangChain** para conectar prompts narrativos a Supabase/Blob.
- [ ] Prototipo de **agente simbiótico** para atender campañas o analizar carpetas ZIP.
- [ ] Conexión con GreenMoriLab o CHAOSS para evaluar salud de librerías OSS.
- [ ] Integración simbiótica con `Cerebrum` o `IFRL` vía webhook.

## 🧪 Fase 3: Agentes inteligentes embebidos + generación simbiótica (2-6 meses)

- [ ] Experimentación con **Google Agent Builder** vs. agentes Open Source.
- [ ] Entrenamiento de IA embebida (Generative AI Studio o HuggingFace).
- [ ] Conexión entre MUTA·CORE y modelos entrenados para respuesta narrativa automatizada.
- [ ] Evaluación semántica de contenidos subidos por usuarios.

## 🌐 Fase 4: Orquestación simbiótica total (6-12 meses)

- [ ] Uso de **Google Cloud Workflows** o alternativa serverless (Supabase Functions).
- [ ] Automatización completa de ingesta de ZIPs, alerta y análisis narrativo.
- [ ] Panel AI de monitoreo simbiótico (interna + webhooks).
- [ ] IA entrenada con eventos del universo ZDU + RULESTACK activo.

---

## 🧠 Recomendaciones tácticas y técnicas

- Mantener todos los assets IA bajo carpeta `/SGU-Narrativa-App/AI/`
- Integrar métricas semánticas y narrativas a través de Markdown enriquecido
- Priorizar herramientas open source siempre que haya equivalentes viables
- Documentar cada módulo con su propio `README-[modulo].md`
- Conectar estas herramientas con `bitacora.md` para trazabilidad evolutiva

Este roadmap se actualiza conforme a nuevas herramientas descubiertas o cambios en el plan simbiótico del universo.

---

## 🔗 Ligas de Tecnologías Relevantes

- https://github.com/GoogleChrome/lighthouse-ci
- https://greenmorilab.github.io/
- https://chaoss.community/metrics/
- https://www.langchain.com/
- https://cloud.google.com/workflows
- https://medium.com/data-science-collective/agentic-ai-comparing-new-open-source-frameworks-21ec676732df
- https://botpress.com/blog/ai-agent-frameworks
- https://cloud.google.com/generative-ai-studio
- https://cloud.google.com/products/agent-builder
