# 📁 README – Carpeta `infra`  
**Infraestructura Lógica y Técnica del Universo ZDU**

---

## 🧱 Propósito de la Carpeta `infra`

La carpeta `infra` consolida todos los componentes técnicos que sostienen la operación narrativa, simbólica y táctica del universo ZDU. Su objetivo es proporcionar la base estructural para la ejecución de scripts, despliegue de manifiestos, control de calidad, autenticación, y organización jerárquica de submódulos críticos. Es el corazón técnico de toda la operación, y está diseñada para facilitar auditorías, conexiones cloud, y despliegues modulares.

---

## 🧩 Subcarpetas y su función

- **`/scripts/`**  
  Contiene herramientas automatizadas como `iCrawler` y `INTELGEN-MD-AUDIT` que ejecutan auditorías sobre los archivos `.md` del universo ZDU. También alberga los logs generados por estos escaneos.

- **`/checkpoints/`**  
  Archivos de control de versiones y estados históricos del proyecto. Cada checkpoint representa una validación o cierre lógico. Incluye el índice maestro `ZDU_CHECKPOINTS_INDEX.md` que actúa como bitácora viva.

- **`/zdu-storage/`**  
  Almacena elementos narrativos, técnicos o simbólicos estructurados que requieren conservación aislada del flujo narrativo general.

- **`/quality-console/`**  
  Consola visual y auditable de los resultados del `iCrawler`. Cada auditoría genera archivos `.html` con los hallazgos, accesibles desde esta interfaz. Está en evolución hacia una consola dinámica con menú e indexación.

- **`/auth/` (ex: `/jwt/`)**  
  Manejo de autenticación simbiótica basada en Supabase + Clerk. Incluye puente JWT, esquema gráfico y documentación táctica (`clerk-supabase-jwt-bridge.md` y `clerk-identity-core.md`).

- **`/manifests/`**  
  Contiene archivos `AI_Manifest.json` y otros manifiestos usados para declarar componentes activos de la plataforma (ej. quality-crawler, infra-audit-agent).

- **`/mappings/`**  
  Archivos de estrategia de mapeo simbólico: estructuras de carpetas, dependencias entre subdirectorios y guías de replicación. Ahora consolidados en el checkpoint `ZDU_INFRA_MAPPINGS_CONSOLIDATED.md`.

---

## 🧠 Suprainfraestructura narrativa (derivado de `README_SUPRASTRUCTURE.md`)

Este módulo documenta la **suprainfraestructura**, es decir, la lógica que ordena el resto del universo ZDU:

- **Principio narrativo:** Cada archivo `.md` o script operativo debe estar respaldado por un manifiesto o referencia simbólica.
- **Estructura suprajerárquica:** Se validan los hilos padre como `UNIVERSE`, `PRIVET`, `INTELGEN`, `NODO-CAMP`, etc., para garantizar orden lógico.
- **Rastreo simbiótico:** Toda acción realizada dentro del proyecto deja una huella en los logs, manifiestos o checkpoints.

---

## 🧾 Logs y trazabilidad

Todos los logs se encuentran en:  
`/private/infra/scripts/logs/`  
Ahí se depositan los archivos `.json` generados por auditorías, como:  
- `crawl_audit_2025_08_03.json`
- `INTELGEN-MD-AUDIT_OUTPUT.json`

Estos logs están cruzados con la consola visual para trazabilidad rápida.

---

## ✅ Checkpoints relevantes

- `ZDU-CHECKPOINT-FRAMEWORK.md`  
  Consolidación de la estructura activa en INFRA.  
- `ZDU_INFRA_MAPPINGS_CONSOLIDATED.md`  
  Reúne y reemplaza todos los documentos sueltos de mapeo y dependencias (`ZDU_FOLDER_DEPENDENCY`, `ZDU_MANIFESTS`, etc.).  
- `ZDU-CHECKPOINT-QUALITY-PHASE_III_COMPLETED.md`  
  Confirma ejecución de `iCrawler`, auditoría inicial de `.md`, y consola visual.

---

## 🚨 Auditoría activa

La carpeta `infra` está bajo revisión continua mediante:
- Scripts automatizados.
- Checkpoints de cierre.
- Validación simbólica (por módulos como LURA e INTELGEN-RISK).

# Carpeta `infra/` – Infraestructura Simbólica y Operativa del Universo ZDU

# Carpeta `infra/` – Consolidado de Arquitectura y Suprastructura

Este documento integra los contenidos previos de infraestructura, índice técnico y definición de suprastructura del universo ZDU.  
Debe usarse como punto de referencia unificado para propósitos de mantenimiento, despliegue y documentación general del stack.

---

## Contenido integrado desde: `ZDU_INFRA_INDEX.md`

# ZDU_INFRA_INDEX.md

**Índice Maestro de Documentación Técnica de Infraestructura**
Ubicación sugerida: `/private/infra/`

---

## 1. Infraestructura General
- [README_SUPRASTRUCTURE.md](README_SUPRASTRUCTURE.md)
- [readme.md](readme.md)

## 2. Experimental
- [README-AI-MASTER2.md](experimental/README-AI-MASTER2.md)

## 3. Identity / Clerk
- [README-CLERK-IDENTITY.md](identity/clerk/README-CLERK-IDENTITY.md)
- [clerk-identity-core.md](identity/clerk/clerk-identity-core.md)

## 4. Autenticación
- [clerk-supabase-jwt-bridge.md](auth/clerk-supabase-jwt-bridge.md)
- [clerk-identity-core.md](auth/clerk-identity-core.md)

### JWT
- [README.md](auth/jwt/README.md)
- [README_AUTH.md](auth/jwt/README_AUTH.md)
- [clerk_supabase_jwks.json](auth/jwt/clerk_supabase_jwks.json)

## 5. Checkpoints Técnicos
- [ZDU_INFRA_MILESTONE_002.md](checkpoints/ZDU_INFRA_MILESTONE_002.md)
- [ZDU_CHECKPOINT_CLEANUP_20250801.md](checkpoints/ZDU_CHECKPOINT_CLEANUP_20250801.md)
- [bitacora-sync-campanas.md](checkpoints/bitacora-sync-campanas.md)
- [ZDU_SUPABASE_AZURE_SYNC_V1.md](checkpoints/ZDU_SUPABASE_AZURE_SYNC_V1.md)
- [ZDU_CONTAINER_VALIDATION_010825.md](checkpoints/ZDU_CONTAINER_VALIDATION_010825.md)
- [ZDU_AUDIT_INFRA_010825.md](checkpoints/ZDU_AUDIT_INFRA_010825.md)
- [readme.md](checkpoints/readme.md)

---

**Última actualización:** Generado automáticamente por la IA ZDU (infra-crawler).
---

## Contenido integrado desde: `README_SUPRASTRUCTURE.md`

# Suprastructura de Inteligencia – ZDU

Este archivo conecta todos los puntos clave del universo simbiótico:

## Módulos integrados

- **AI Core**
- **QMA360 Assets**
- **Crawlers**
- **Supabase + Azure Blob**
- **Fast Response / RULESTACK**

## Visión

Esta estructura permite que ZDU funcione como un organismo narrativo autónomo, capaz de adaptarse, aprender e integrar contenido desde múltiples fuentes.
---

## Contenido integrado desde: `readme.md`

# Infraestructura Narrativa ZDU – Consolidado Técnico

Este módulo contiene los artefactos estructurales y de auditoría asociados a la evolución del backend narrativo del universo ZDU. Aquí se alojan snapshots técnicos, estrategias de dependencias, mapeos de carpetas y bitácoras clave.

## Estructura de carpetas

- **`supabase/`**: contiene índice actualizado de las tablas activas dentro del proyecto Supabase.
- **`campaigns/`**: lista de campañas ya procesadas, usadas como checkpoint para evitar repeticiones.
- **`docs/`**: documentos maestros que guían la lógica de carpetas, dependencias y estrategias de optimización narrativa.
- **`scripts/`**: carpeta central de automatizaciones. Contiene `utils/`, `logs/`, `audits/` y `data/` para auditoría JSON, sincronización y escaneos.
- **`ai/`**: módulo de inteligencia simbiótica experimental (Ginny). Orquestará análisis predictivo y generación avanzada en fases finales.
- **`readme.md`**: este consolidado, que resume el propósito, avances y organización actual del módulo `infra`.

## Avances técnicos clave

- Auditoría automatizada de estructura Supabase.
- Consolidación de snapshot `supabase_table_index.json`.
- Validación de 83 tablas activas con conectividad CLI.
- Mapeo lógico de relaciones entre carpetas, campañas y blobs.
- Bitácora técnica `ZDU_INFRA_MILESTONE_001.md` con primer hito de conectividad y sincronización.
- Establecimiento del `processed_campaigns.json` como archivo fuente para evitar redundancias narrativas.
- Automatización del script `sync_supabase_to_blobs.cjs` con lógica para omitir duplicados, loggear eventos y escribir archivos directamente en `data/logs`.
- Evaluación y depuración de scripts obsoletos como `test_env_loads.cjs`.
- Inspección interactiva de referencias a tablas Supabase usando `inspect_supabase_tables.cjs`.

## Lógica operativa

Toda la infraestructura narrativa está diseñada para mantener portabilidad, trazabilidad y control auditado. Los scripts se ejecutan desde `scripts/utils` y escriben resultados dentro del árbol `data/`, evitando contaminación en carpetas externas como `zdu-campanas`.

Los logs de sincronización se escriben dentro de `data/logs/`, mientras que los archivos omitidos o generados se clasifican con nombre explícito y timestamps. El entorno se orquesta a través de variables `.env` leídas de forma segura.

## Próximos pasos

- Integrar el módulo de ingestión CDU para campañas físicas (carpetas ZIP).
- Activar módulo `ai/` con flujo dirigido por IA Ginny.
- Conectar `scripts/utils` con funciones Lambda o Azure Functions.
- Ejecutar escaneo cruzado de tablas Supabase con correlación narrativa.
- Expandir el control de versiones de campañas ya procesadas en checkpoints persistentes.

---

---

## 🔄 Secciones integradas desde subdirectorios

---

## Contenido complementario: `README-CLERK-IDENTITY.md`

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
**Autor:** Plataforma ZDU · Revisión por CEREBRUM---

## Contenido complementario: `README.md`

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

## 📁 Estructura actual---

## Contenido complementario: `README_CLERK_FINAL.md`

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

## 📁 Estructura actual---

## Contenido complementario: `README_CLERK_IDENTIDAD_CONSOLIDADO.md`

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

Última actualización: 2025-08-02---

## Contenido complementario: `README_INFRA_CONSOLIDADO.md`

# Carpeta `infra/` – Consolidado de Arquitectura y Suprastructura

Este documento integra los contenidos previos de infraestructura, índice técnico y definición de suprastructura del universo ZDU.  
Debe usarse como punto de referencia unificado para propósitos de mantenimiento, despliegue y documentación general del stack.

---

## Contenido integrado desde: `ZDU_INFRA_INDEX.md`

# ZDU_INFRA_INDEX.md

**Índice Maestro de Documentación Técnica de Infraestructura**
Ubicación sugerida: `/private/infra/`

---

## 1. Infraestructura General
- [README_SUPRASTRUCTURE.md](README_SUPRASTRUCTURE.md)
- [readme.md](readme.md)

## 2. Experimental
- [README-AI-MASTER2.md](experimental/README-AI-MASTER2.md)

## 3. Identity / Clerk
- [README-CLERK-IDENTITY.md](identity/clerk/README-CLERK-IDENTITY.md)
- [clerk-identity-core.md](identity/clerk/clerk-identity-core.md)

## 4. Autenticación
- [clerk-supabase-jwt-bridge.md](auth/clerk-supabase-jwt-bridge.md)
- [clerk-identity-core.md](auth/clerk-identity-core.md)

### JWT
- [README.md](auth/jwt/README.md)
- [README_AUTH.md](auth/jwt/README_AUTH.md)
- [clerk_supabase_jwks.json](auth/jwt/clerk_supabase_jwks.json)

## 5. Checkpoints Técnicos
- [ZDU_INFRA_MILESTONE_002.md](checkpoints/ZDU_INFRA_MILESTONE_002.md)
- [ZDU_CHECKPOINT_CLEANUP_20250801.md](checkpoints/ZDU_CHECKPOINT_CLEANUP_20250801.md)
- [bitacora-sync-campanas.md](checkpoints/bitacora-sync-campanas.md)
- [ZDU_SUPABASE_AZURE_SYNC_V1.md](checkpoints/ZDU_SUPABASE_AZURE_SYNC_V1.md)
- [ZDU_CONTAINER_VALIDATION_010825.md](checkpoints/ZDU_CONTAINER_VALIDATION_010825.md)
- [ZDU_AUDIT_INFRA_010825.md](checkpoints/ZDU_AUDIT_INFRA_010825.md)
- [readme.md](checkpoints/readme.md)

---

**Última actualización:** Generado automáticamente por la IA ZDU (infra-crawler).
---

## Contenido integrado desde: `README_SUPRASTRUCTURE.md`

# Suprastructura de Inteligencia – ZDU

Este archivo conecta todos los puntos clave del universo simbiótico:

## Módulos integrados

- **AI Core**
- **QMA360 Assets**
- **Crawlers**
- **Supabase + Azure Blob**
- **Fast Response / RULESTACK**

## Visión

Esta estructura permite que ZDU funcione como un organismo narrativo autónomo, capaz de adaptarse, aprender e integrar contenido desde múltiples fuentes.
---

## Contenido integrado desde: `readme.md`

# Infraestructura Narrativa ZDU – Consolidado Técnico

Este módulo contiene los artefactos estructurales y de auditoría asociados a la evolución del backend narrativo del universo ZDU. Aquí se alojan snapshots técnicos, estrategias de dependencias, mapeos de carpetas y bitácoras clave.

## Estructura de carpetas

- **`supabase/`**: contiene índice actualizado de las tablas activas dentro del proyecto Supabase.
- **`campaigns/`**: lista de campañas ya procesadas, usadas como checkpoint para evitar repeticiones.
- **`docs/`**: documentos maestros que guían la lógica de carpetas, dependencias y estrategias de optimización narrativa.
- **`scripts/`**: carpeta central de automatizaciones. Contiene `utils/`, `logs/`, `audits/` y `data/` para auditoría JSON, sincronización y escaneos.
- **`ai/`**: módulo de inteligencia simbiótica experimental (Ginny). Orquestará análisis predictivo y generación avanzada en fases finales.
- **`readme.md`**: este consolidado, que resume el propósito, avances y organización actual del módulo `infra`.

## Avances técnicos clave

- Auditoría automatizada de estructura Supabase.
- Consolidación de snapshot `supabase_table_index.json`.
- Validación de 83 tablas activas con conectividad CLI.
- Mapeo lógico de relaciones entre carpetas, campañas y blobs.
- Bitácora técnica `ZDU_INFRA_MILESTONE_001.md` con primer hito de conectividad y sincronización.
- Establecimiento del `processed_campaigns.json` como archivo fuente para evitar redundancias narrativas.
- Automatización del script `sync_supabase_to_blobs.cjs` con lógica para omitir duplicados, loggear eventos y escribir archivos directamente en `data/logs`.
- Evaluación y depuración de scripts obsoletos como `test_env_loads.cjs`.
- Inspección interactiva de referencias a tablas Supabase usando `inspect_supabase_tables.cjs`.

## Lógica operativa

Toda la infraestructura narrativa está diseñada para mantener portabilidad, trazabilidad y control auditado. Los scripts se ejecutan desde `scripts/utils` y escriben resultados dentro del árbol `data/`, evitando contaminación en carpetas externas como `zdu-campanas`.

Los logs de sincronización se escriben dentro de `data/logs/`, mientras que los archivos omitidos o generados se clasifican con nombre explícito y timestamps. El entorno se orquesta a través de variables `.env` leídas de forma segura.

## Próximos pasos

- Integrar el módulo de ingestión CDU para campañas físicas (carpetas ZIP).
- Activar módulo `ai/` con flujo dirigido por IA Ginny.
- Conectar `scripts/utils` con funciones Lambda o Azure Functions.
- Ejecutar escaneo cruzado de tablas Supabase con correlación narrativa.
- Expandir el control de versiones de campañas ya procesadas en checkpoints persistentes.

------

## Contenido complementario: `README_INFRA_MAPPINGS_CONSOLIDADO.md`

# Carpeta `infra/mappings/` – Consolidado Narrativo y Técnico

Este documento unifica toda la información relacionada con los manifiestos, esquemas de mapeo y dependencias internas del universo ZDU.  
Los contenidos aquí presentados formaban parte de archivos sueltos en `/infra/mappings/` y ahora están centralizados en este `README.md`.

---

## Contenido integrado desde: `README_ZDU_MANIFESTS.md`

# Manifiestos de Navegación – ZDU

Este archivo documenta el propósito de cada uno de los `.json` manifest utilizados para navegación y crawling estructurado.

## Archivos clave

- `AI_Manifest.json`
- `Crawler_Manifest.json`
- `QMA360_Manifest.json`

## Objetivo

Dar inteligencia de contexto, navegación y aprendizaje adaptativo a toda la carpeta `zdu-narrativa-app`.
---

## Contenido integrado desde: `readme.md`

# Mappings

Esta carpeta contiene los esquemas de mapeo y estrategia de carpetas utilizados en el ecosistema Supabase-ZDU. Incluye:

- `ZDU_FOLDER_DEPENDENCY_STRATEGY_V1.md`: Estrategia lógica de dependencia entre carpetas.
- `ZDU_FOLDER_MAPPING_SCHEMA_V1.md`: Esquema simbólico de mapeo de carpetas dentro del blob.
- `ZDU_SUPABASE_FOLDER_OPTIMIZATION_V1.md`: Recomendaciones de optimización para el uso compartido entre blobs y Supabase.

Esta carpeta funciona como motor lógico para las automatizaciones y parseo de datos en campañas.

### `checkpoints/` 🧩
Contiene puntos de control técnico-narrativos extraídos del ecosistema simbiótico de ZDU. Cada archivo documenta eventos de sincronización, milestones clave y procesos de consolidación (ej. Supabase ↔ Azure).

- `ZDU_INFRA_MILESTONE_002.md` – Segundo hito estructural del entorno narrativo.
- `bitacora-sync-campanas.md` – Registro táctico de sincronización de campañas.
- `ZDU_SUPABASE_AZURE_SYNC_V1.md` – Detalle técnico de integración entre plataformas.
- `ZDU-ALPHA-GENIE/` – Módulo con `checkpoint.md` y documentos RAM vinculados a Genie.
---

## Contenido integrado desde: `ZDU_FOLDER_DEPENDENCY_STRATEGY_V1.md`

git add checkpoints/ZDU_FOLDER_DEPENDENCY_STRATEGY_V1.md
git commit -m "Checkpoint: Estrategia de dependencia Supabase ↔ Azure Blob (ZDU_FOLDER_DEPENDENCY_STRATEGY_V1)"
git push origin main

# Checkpoint: Estrategia de Dependencia entre Carpetas Supabase ↔ Azure Blob  
**Versión:** ZDU_FOLDER_DEPENDENCY_STRATEGY_V1  
**Fecha:** 2025-07-27  
**Ubicación:** /checkpoints/  

## Objetivo  
Establecer la lógica de dependencia entre carpetas funcionales en Supabase y su correspondencia directa con contenedores o rutas en Azure Blob, asegurando sincronización simbiótica entre Supabase, Azure y GitHub.

---

## Estructura de Dependencia

Cada entrada narrativa en Supabase (campaña, caso, villano, etc.) deberá tener:

- id
- slug o nombre_carpeta
- parent_id (si aplica, para representar jerarquía)
- folder_blob: ruta exacta o patrón transformable al Blob
- tabla_relacionada: para mantener modularidad

---

## Lógica de Sincronización

| Acción en Supabase | Reflejo esperado en Azure Blob                | Registro en GitHub       |
|---------------------|-----------------------------------------------|---------------------------|
| Crear carpeta       | Crear contenedor o carpeta lógica en Blob     | Commit con *_SYNC_V1.md   |
| Renombrar carpeta   | Renombrar blob asociado o crear nueva ruta    | Actualizar map.json       |
| Eliminar carpeta    | Marcar carpeta como archivada en Blob         | Crear *_DEPRECATION.md    |

---

## Reglas simbióticas

1. No se crean carpetas vacías: toda carpeta Supabase debe tener una razón narrativa o estructural (CDU, campaña, villano, etc.).
2. Cada tabla en Supabase debe contener su propio campo folder_blob.
3. Toda nueva dependencia debe registrarse en ZDU_FOLDER_MAPPING_SCHEMA.md antes de aplicarse.
4. La lógica se automatizará en fase posterior con funciones desde GitHub (ZDU_AUTO_SYNC_ENGINE_V1).

---

## Acción inmediata

1. Validar que las carpetas actuales en Supabase tengan su campo folder_blob.
2. Alinear todos los nombres de carpetas con Azure Blob.
3. Generar script para escucha de cambios (Webhook o CronJob).
4. Registrar evolución en esta bitácora simbólica.

---

## Referencias

- Repositorio GitHub: zdu-narrativa-app  
  https://github.com/pmosqueira-sketch/zdu-narrativa-app  
- Bitácora anterior: ZDU_FOLDER_MAPPING_SCHEMA_V1.md  
- Blob Explorer - Azure  
  https://portal.azure.com/

---

Marcado como CHECKPOINT ESTRATÉGICO.
---

## Contenido integrado desde: `ZDU_FOLDER_MAPPING_SCHEMA_V1.md`

Checkpoint registrado: ZDU_FOLDER_MAPPING_SCHEMA_V1

Objetivo:
Establecer el mapeo simbólico y funcional entre las carpetas existentes en Supabase y los contenedores correspondientes en Azure Blob. Este mapeo servirá para futuras automatizaciones, sincronización de endpoints y scripts de ingestión narrativa.

Estructura Supabase ↔ Azure Blob:

| Supabase Folder        | Azure Blob Container       | Notas Operativas                                |
|------------------------|----------------------------|--------------------------------------------------|
| zdu_universe_assets    | zdu-universe-assets        | Assets narrativos (renders, PDF, visuales)       |
| zdu_simbologia         | zdu-simbologia             | Elementos simbólicos (íconos, avatares, claves)  |
| zdu_campanas           | zdu-campanas               | Campañas CDU y nodos relacionados                |
| villanos               | villanos                   | Expedientes narrativos y metadatos de amenazas   |
| cdu_assets             | cdu-assets                 | Elementos estáticos de campañas CDU              |
| logs                   | logs                       | Logs técnicos de funciones y rastreos            |

Notas:
- La sincronización es unidireccional por ahora (Azure → Supabase si aplica).
- La automatización futura evaluará Webhooks o funciones Azure para trigger cruzado.

Fecha: 2025-07-28  
Autor: Pablo Mosqueira---

## Contenido complementario: `README_QUALITY_CONSOLIDADO.md`

# Carpeta `quality/` – Control de Calidad del Universo ZDU

Este documento consolida todos los archivos `.md` previos que formaban parte de los planes, índices, AMEF y puntos de control de calidad.  
A partir de este README, se centraliza la documentación del módulo de aseguramiento de calidad del sistema narrativo ZDU.

---

## Archivo consolidado: `AMEF-ZDU.md`

# AMEF-ZDU.md

## Análisis Modal de Efectos y Fallas · Universo ZDU
Versión inicial: 2025-08-02

Este documento estructura el AMEF (Análisis Modal de Efectos y Fallas) aplicado a la infraestructura simbiótica del universo ZDU, con el fin de prevenir fallas críticas, anticipar desviaciones narrativas, y establecer ciclos de recalibración con ayuda de MUTA·CORE y ZDU‑RECALC.

---

## 1. Objetivo

Prevenir y mitigar fallas operativas y simbólicas en los sistemas AI, Supabase, Clerk, App Service y Blob Storage dentro del universo narrativo y operativo ZDU.

---

## 2. Componentes Críticos Analizados

| Módulo         | Descripción                                      | Riesgo clave                      |
|----------------|--------------------------------------------------|----------------------------------|
| Supabase       | Base simbólica narrativa (DB + API)              | Falla de conexión, RLS mal usado |
| Clerk          | Identidad y autenticación de usuarios            | Expiración de token, error de sync |
| Blob Storage   | Repositorio de ZIPs y assets                     | Enlace roto, MIME mal definido   |
| App Service    | Hosting del frontend ZDU                         | Despliegue incorrecto, rutas 404 |
| AI Agents      | Agentes de lógica narrativa y defensiva          | Loop infinito, error en parseo   |
| ZDU‑RECALC     | Módulo de recalibración adaptativa               | No activado tras errores         |
| CEREBRUM       | Nodo lógico controlador                         | No recibe señales, timeout       |
| IFRL           | Nodo emocional / narrativo                       | Sesgo de narrativa o inestabilidad|

---

## 3. Matriz AMEF

| # | Falla Potencial                | Causa Raíz               | Severidad | Ocurrencia | Detección | NPR  |
|---|-------------------------------|---------------------------|-----------|------------|-----------|------|
| 1 | Base no responde              | Supabase desconectado     | 9         | 3          | 5         | 135  |
| 2 | Token inválido en AI          | Expiró o mal firmado      | 8         | 4          | 4         | 128  |
| 3 | ZIP no encontrado             | Blob mal direccionado     | 7         | 5          | 3         | 105  |
| 4 | Narrativa desincronizada      | Error entre IFRL ↔ AI     | 9         | 2          | 6         | 108  |
| 5 | RLS mal configurado           | Política no habilitada    | 9         | 3          | 5         | 135  |
| 6 | Despliegue erróneo            | Push sin revisión         | 8         | 3          | 4         | 96   |
| 7 | Crawler AI no responde        | Error en parsing JSON     | 8         | 3          | 3         | 72   |

---

## 4. Acciones Recomendadas

- Activar doble validación de tokens AI (Clerk ↔ Supabase)
- Validar RLS al 100% en cada tabla simbólica
- Automatizar revisión diaria de contenedores Blob
- Sincronizar MUTA·CORE ↔ ZDU‑RECALC como watchdog
- Integrar DAST/IAST para escaneo de endpoints
- Anclar puntos de revisión en README de cada módulo

---

## 5. Integraciones

- Este archivo se conecta con:
  - `CONTROL_PLAN-ZDU.md`
  - `zdu_ai_manifest.json`
  - `README-CLERK-IDENTITY.md`
  - `README-JAVA-ENV.md`

---

## 6. Estado Actual

✅ Fase 1 AMEF trazada  
🔜 Fase 2: Score automatizado vía AI Agents  
🔜 Fase 3: Integración visual con `AMEF-dashboard.html`

---

*Este módulo es parte del sistema ZDU-SIGMA-CORE vinculado a MUTA·CORE, CEREBRUM y el universo narrativo total de ZDU.*
---

## Archivo consolidado: `CONTROL_PLAN-ZDU.md`

# CONTROL_PLAN-ZDU.md

## Plan de Control Operativo y Narrativo · Universo ZDU
Versión inicial: 2025-08-02

Este documento establece el **Plan de Control ZDU** como una guía viva para mantener la estabilidad narrativa, técnica y simbiótica de todos los módulos activos dentro del universo. Forma parte integral del sistema ZDU-SIGMA-CORE junto al documento `AMEF-ZDU.md`.

---

## 1. Objetivo del Plan de Control

Establecer puntos de verificación, revisión y recalibración continua para:
- Infraestructura híbrida (Supabase + Azure)
- Seguridad narrativa (CEREBRUM, RULESTACK, IFRL)
- Integridad simbiótica (MUTA·CORE + AI Agents)

---

## 2. Ámbitos de control

| Componente       | Tipo de Control                | Periodicidad  | Responsable (simbólico) |
|------------------|-------------------------------|---------------|--------------------------|
| Supabase         | Validación RLS / tokens        | Diaria        | Nebulon                  |
| Clerk            | Sincronización SSO / JWT       | Semanal       | Regulator                |
| Blob Storage     | Integridad de ZIPs y renders   | Diaria        | Neon                     |
| App Service      | Salud de endpoints / errores   | Cada push     | Eris                     |
| AI Agents        | Respuesta / aprendizaje activo | Cada sesión   | CEREBRUM                 |
| Narrativa        | Coherencia de campañas         | Cada capítulo | IFRL                     |
| ZDU‑RECALC       | Recalibración general          | Mensual       | MUTA·CORE                |

---

## 3. Checkpoints establecidos

- [x] RLS activo en `ai_modules`
- [x] Clerk integrado con Supabase JWT
- [x] Flujo REST de manifest insertado
- [ ] Dashboard AMEF con NPR automatizado
- [ ] Escaneo DAST/IAST incorporado
- [ ] Reportes semanales generados por AI

---

## 4. Herramientas de Control Sugeridas

- `cron + curl` para automatización diaria
- `supabase.js` para validaciones en tiempo real
- `postman / httpie` para pruebas externas
- `zdu_ai_manifest.http` para pruebas de flujo
- `ZDU-INTELGEN-RISK` como visor activo de riesgo

---

## 5. Relación con otros módulos

Este plan alimenta e interactúa con:

- `AMEF-ZDU.md`
- `README-CLERK-IDENTITY.md`
- `README-JAVA-ENV.md`
- `ZDU‑RECALC.log`
- `zdu_ai_manifest.json`

---

## 6. Estado Actual

✅ Primera versión generada  
🔜 Fase 2: Automatización de checkpoints vía webhook  
🔜 Fase 3: Integración visual vía `controlplan-dashboard.html`

---

*Este documento es parte del sistema de calidad simbiótica `ZDU-SIGMA-CORE`, en vinculación con IFRL, CEREBRUM, MUTA·CORE y el protocolo narrativo de ZDU.*
---

## Archivo consolidado: `README-QUALITY-AMEF.md`

# Análisis Modal de Efectos y Fallos (AMEF) – ZDU Quality Layer

## Descripción General

Este módulo representa el componente AMEF (Análisis Modal de Efectos y Fallos) aplicado al universo ZDU como parte del sistema de calidad simbiótico. Su objetivo es anticipar y mitigar posibles fallos dentro de los flujos narrativos, técnicos y estructurales.

## Objetivos

- Identificar modos de fallo dentro de los sistemas y nodos de ZDU.
- Evaluar el impacto de los fallos en la narrativa, infraestructura o comportamiento de los héroes y villanos.
- Establecer acciones preventivas o correctivas.
- Integrar lógica Six Sigma y recalibración mutacional con ZDU-MUTA·CORE.

## Variables del AMEF

| Variable         | Descripción |
|------------------|-------------|
| Modo de fallo    | El evento, debilidad o fallo identificado (ej. inconsistencia en login, pérdida de integridad narrativa). |
| Efecto           | Consecuencia en el sistema (ej. activación incorrecta de poderes, ruptura de continuidad narrativa). |
| Severidad (S)    | Impacto del efecto (escala 1-10). |
| Ocurrencia (O)   | Probabilidad de que ocurra (escala 1-10). |
| Detección (D)    | Probabilidad de detección antes del impacto (escala 1-10). |
| Número de Prioridad de Riesgo (RPN) | RPN = S × O × D |

## Lógica aplicada en el universo ZDU

- Los módulos narrativos y técnicos clave tienen un AMEF asociado.
- La IA integrada puede evaluar RPN y recomendar intervenciones (modo simbiótico).
- El ciclo se conecta con ZDU‑RECALC para establecer puntos de recalibración narrativa o técnica.

## Ejemplo aplicado

| Modo de Fallo     | Efecto | S | O | D | RPN | Acción |
|-------------------|--------|---|---|---|-----|--------|
| Token expirado sin alerta | Usuario queda sin acceso a funciones críticas | 9 | 5 | 6 | 270 | Integrar alerta proactiva desde AI |
| Ingreso duplicado de datos | Ruptura de integridad narrativa | 7 | 6 | 7 | 294 | Validación previa y aviso por consola |

## Recomendación

El archivo AMEF puede crecer dinámicamente con cada nueva amenaza o desvío identificado. Se recomienda:

- Conectarlo a la consola Quality.
- Establecer un JSON asociado con semáforo activo.
- Habilitar lógica automática para actualización vía crawler AI.

## Ubicación

Este archivo debe guardarse en:

`/private/quality/README-QUALITY-AMEF.md`
---

## Archivo consolidado: `README-QUALITY-CHECKPOINT.md`

# README-QUALITY-CHECKPOINT.md

## Propósito

Este archivo actúa como punto de control (Checkpoint) del sistema de calidad implementado en el universo ZDU. Su objetivo es registrar y validar el estado actual de los módulos de calidad (AMEF, Control Plan, SigmaCore), garantizando su correcta integración antes de iniciar procesos automatizados con inteligencia artificial (AI Crawler).

## Fecha de última validación

**2025-08-02 21:31:59**

## Archivos auditados

- `AMEF-ZDU.md` ✅
- `CONTROL_PLAN-ZDU.md` ✅
- `ZDU-SIGMA-CORE.md` ✅

## Semáforo de estado por módulo

| Módulo              | Estado   | Observaciones                         |
|---------------------|----------|---------------------------------------|
| AMEF-ZDU            | 🟢 Verde | Validado y actualizado                |
| CONTROL_PLAN-ZDU    | 🟢 Verde | Validado y actualizado                |
| ZDU-SIGMA-CORE      | 🟢 Verde | Revisión completa, sin cambios        |
| QUALITY-CONSOLE     | 🟡 Amarillo | Falta revisión visual de navegación  |
| AI-Crawler Bind     | 🔴 Rojo  | Pendiente integración completa        |

## Integración con AI-Crawler

Este Checkpoint alimentará el proceso de escaneo inteligente para verificar la integridad narrativa y técnica del módulo de calidad. El AI-Crawler validará:
- Existencia de todos los archivos clave.
- Consistencia semántica entre secciones.
- Identificación de rutas rotas o datos obsoletos.

## Instrucciones para actualización

1. Verificar cambios en cualquiera de los archivos auditados.
2. Actualizar el campo de fecha.
3. Modificar estado en la tabla de semáforo.
4. Guardar y sincronizar este archivo en `/private/quality/`.

## Ruta de almacenamiento recomendada

`/private/quality/README-QUALITY-CHECKPOINT.md`
---

## Archivo consolidado: `README-QUALITY-CONTROL-PLAN.md`

# QUALITY CONTROL PLAN · ZDU UNIVERSE

## Objetivo
Establecer un plan de control integral dentro del universo ZDU para garantizar la calidad narrativa, operativa y técnica de cada módulo y submódulo implementado.

## Alcance
Este plan aplica a:
- Módulos simbióticos narrativos (ZDU-MUTA·CORE, IFRL, Cerebrum, etc.)
- Módulos de infraestructura técnica (Supabase, Azure Blob, App Service)
- Sistemas de autenticación (Clerk)
- Procesos de Fast Response

## Elementos clave

### 1. Puntos de control por fase
- **Infraestructura técnica**: verificación de variables de entorno, claves, conectividad entre módulos.
- **Narrativa simbólica**: coherencia de personajes, aparición lógica de villanos, cumplimiento del RULESTACK.
- **Integridad de datos**: validación de consistencia de JSONs, manifests y md estructurados.
- **Revisión de superpoderes**: activación adecuada en workflows AI o detecciones automatizadas.

### 2. Herramientas de soporte
- **DAST e IAST**: para identificar vulnerabilidades durante el desarrollo.
- **INTELIGEN-AI**: motor simbiótico de revisión narrativa y técnica.
- **Crawlers internos**: exploración y verificación automatizada de carpetas y manifiestos.

### 3. Checklist operativo
- [ ] Rutas de archivos verificadas
- [ ] Claves protegidas en .env
- [ ] Manifiestos estructurados
- [ ] READMEs auditados y validados
- [ ] AI operativa en consola local

## Revisión y auditoría
Cada fase del universo ZDU será auditada semanalmente como parte del proceso de recalibración (ZDU-RECALC). La inteligencia artificial instalada en el nodo local servirá de auditor simbiótico permanente.

## Responsable
Este control será ejecutado por el agente AI local y supervisado por el Enlace de Inteligencia Estratégica.

---
Archivo generado como parte del sistema `/private/quality/`.
---

## Archivo consolidado: `ZDU-SIGMA-CORE-CHECKPOINT.md`

# ZDU-SIGMA-CORE · Checkpoint Técnico

## Fecha de actualización: 2025-08-02

### Documentos cargados en `/private/quality/`:
- [x] AMEF-ZDU.md
- [x] CONTROL_PLAN-ZDU.md

### Estado de Integración:
- ZDU‑RECALC sincronizado ✅
- AI Agents conectados a ambos documentos ✅
- Clerk y Supabase alineados con criterios AMEF y Plan de Control ✅
- `zdu_ai_manifest.json` vinculado como fuente operativa de revisión técnica
- Flujo REST de inteligencia insertado y funcionando vía `zdu_ai_insert.sh`
- Revisión de tokens Supabase (JWKS) cruzado con Clerk implementado

### Próximos pasos sugeridos:
- Crear `controlplan-dashboard.html` y `amef-dashboard.html` como tableros visuales simbióticos
- Automatizar reportes NPR y Checkpoints con agentes AI integrados
- Consolidar `ZDU‑SIGMA-CORE.log` como bitácora viva del sistema de calidad

*Este checkpoint es parte del protocolo permanente de recalibración simbiótica del universo ZDU. Se encuentra ya en estado activo.*
---

## Archivo consolidado: `ZDU_QUALITY_INDEX.md`

# ZDU QUALITY INDEX

**Ubicación sugerida:** `/private/quality/ZDU_QUALITY_INDEX.md`

Este índice maestro consolida todos los módulos relacionados con la calidad, control de riesgos y Six Sigma dentro del universo ZDU.

---

## Archivos activos:

### 1. Plan de Control
- **Nombre:** `CONTROL_PLAN-ZDU.md`
- **Ruta sugerida:** `/private/quality/CONTROL_PLAN-ZDU.md`
- **Descripción:** Documento guía con las fases, responsables y métricas clave para evaluar riesgos.

### 2. Análisis de Modo y Efecto de Falla (AMEF)
- **Nombre:** `AMEF-ZDU.md`
- **Ruta sugerida:** `/private/quality/AMEF-ZDU.md`
- **Descripción:** Matriz de priorización de fallos potenciales y contramedidas por vertical crítica.

### 3. Núcleo de Calidad (Sigma Core)
- **Nombre:** `ZDU-SIGMA-CORE.md`
- **Ruta sugerida:** `/private/quality/ZDU-SIGMA-CORE.md`
- **Descripción:** Punto central de calibración, que conecta con módulos como MUTA·CORE, RE-CALC y Quality Webhooks.

---

## Recomendaciones:
- Actualizar este índice después de cada incorporación de módulo nuevo.
- Conectar este índice desde la consola HTML o menú estructural del sistema de navegación.

---

**Versión:** 2025.08  
**Estado:** ACTIVO ✅
---

## Archivo consolidado: `ZDU_QUALITY_INDEX.md`

# ZDU Quality System · Índice de Consolas

Este índice consolida las herramientas visuales y técnicas del sistema de calidad del universo ZDU. Aquí puedes acceder directamente a las consolas más recientes y validadas para revisión, auditoría y visualización de resultados del sistema de crawler y auditoría de Markdown.

---

## 🔍 Consolas Visuales Unificadas

| Consola | Descripción | Ruta |
|--------|-------------|------|
| **ZDU Quality Console · Final** | Consola consolidada para auditoría `.md` e integración con iCrawler | [zdu_quality_console_FINAL.html](zdu_quality_console_FINAL.html) |

---

## 📁 Ubicación de Logs

Los resultados de auditoría deben colocarse en:

```
/private/infra/scripts/logs/
```

Archivos esperados:
- `crawl_audit_*.json` (generados por `icrawler_agent.py`)
- `intelgen_md_audit.log` (si aplica)

---

## 🧠 Scripts Relacionados

- `icrawler_agent.py`: Ejecuta análisis de estructura.
- `intelligent_md_audit.py`: Evalúa calidad y estructura de archivos `.md`.

---

## 📅 Última consolidación

**2 de agosto de 2025** · Fase IV activa · Consola final operativa.---

## Contenido complementario: `README_SQL_FINAL.md`

# Carpeta `sql/` – Scripts, Auditorías y Candados Narrativos

Este documento unifica todos los elementos simbólicos, técnicos y narrativos relacionados con las bases de datos y estructuras SQL del universo ZDU.

- Contiene scripts de auditoría narrativa.
- Define candados estructurales (`QMA360`) para asegurar la lógica narrativa.
- Documenta la auditoría de estructuras Supabase y snapshots.

## Organización

- `auditoria/structure-snapshots/`: contiene `SUPABASE-STRUCTURE-AUDIT.md`, se mantiene por separado como documento independiente de snapshot.
- Este `README.md` consolida todo lo demás en `/sql/`.

---

## Contenido integrado desde: `README_sql.md`

# Infraestructura SQL · ZDU y QMA360

📂 Ruta: `/private/infra/sql/README.md`  
🧠 Propósito: Registrar y versionar todos los esquemas simbólicos de base de datos utilizados por Supabase para el universo ZDU y las campañas QMA360

---

## 📦 Contenido esperado

Esta carpeta contiene scripts `.sql` que definen la estructura lógica de:

- Tablas narrativas (casos, villanos, campañas)
- Tablas comerciales (productos QMA, documentos, campañas 360)
- Hooks, triggers, relaciones simbióticas
- Migraciones y updates de campos o relaciones

---

## 🧠 Convención de nombres

- `supabase_zdu_estructura.sql` → Núcleo técnico del universo simbiótico
- `supabase_qma360_estructura.sql` → Modelo de campañas comerciales reales
- `supabase_updates_v2.sql` → Cambios incrementales
- `migracion_zdu_202508.sql` → Script con fecha simbólica

---

## 🧠 Recomendaciones

- Cada archivo debe tener comentarios explicativos (`--`)
- Todo script ejecutado en Supabase debe dejar bitácora en `/logs/ejecuciones/`
- Cada cambio relevante debe generar una versión nueva (`_v2`, `_v3`, etc.)
- Ningún archivo `.sql` debe ser ejecutado sin validación previa por Genie o CEREBRUM

---

**Responsable simbólico:** Unidad de Arquitectura Narrativa y Técnica
**Fecha de activación:** 2025-08-01
---

## Contenido integrado desde: `qma360_candado_readmes.md`

# 🔐 Checkpoint · Candado de Actualización de READMEs para Campañas QMA360

## Declaración

Toda carpeta simbólica que represente un nodo de campaña, vertical, o dataset dentro de la iniciativa QMA360 **debe contar con un archivo `README.md`** que explique:

- Qué contiene la carpeta.
- Cuál es su propósito dentro de la narrativa o campaña.
- Qué tipo de documentos se esperan (ej. datasheets, casos de estudio, etc.).
- Relación con la base de datos Supabase (`estructura_qma360`).
- Ruta local y Blob asociada.
- Fecha de creación o última actualización.

## Activación del candado

Este candado queda activado de forma permanente en el proyecto.  
Cada vez que se ejecute un `INSERT INTO` o se agregue contenido nuevo en la carpeta simbólica correspondiente, se debe:

1. Editar el `README.md` en la carpeta afectada.
2. Registrar el update como parte del siguiente `checkpoint`.
3. Garantizar trazabilidad y transparencia simbiótica.

---

**Fecha:** 2025-08-01  
**Checkpoint registrado en:** `/private/checkpoints/qma360_candado_readmes.md`
---

## Contenido integrado desde: `SUPABASE-STRUCTURE-AUDIT.md`

# Auditoría de Estructura Supabase · Agosto 2025

**Fecha de ejecución:** 2025-08-02  
**Total de tablas auditadas:** 89  
**Fuente:** Supabase Snippet Execution · Structure Explorer  
**Archivo original:** snapshot_supabase_structure_2025-08-02.csv

## Objetivo
Capturar un snapshot del estado actual de la base de datos para comparación futura, control de versiones y trazabilidad de nodos narrativos (RAM, casos, héroes, campañas, etc.).

## Análisis
- No se detectaron errores estructurales.
- Tablas como `casos`, `heroes_poderes`, `emociones_heroes` y `rule_stack` están activas y bien referenciadas.
- Se confirma que la tabla `cases` **no existe** (error corregido en versiones previas).

## Relación con módulos dependientes
Este snapshot será utilizado por los siguientes módulos del universo ZDU:

- **INTELIGEN-RISK** (motor principal de análisis estructural narrativo)
- **RULESTACK** (validación de consistencia lógica y simbiótica)
- **ZDU-MUTA·CORE** (activación adaptativa y recalibración de memoria)
- **Crawler AI** (ingesta y verificación inteligente de estructuras base)

---

**Nota:** Este archivo será almacenado en la siguiente ruta de infraestructura técnica:

```
/private/infra/sql/auditoría/structure_snapshots/snapshot_supabase_structure_2025-08-02.csv
```---

## Contenido complementario: `README_SUPRASTRUCTURE.md`

# Suprastructura de Inteligencia – ZDU

Este archivo conecta todos los puntos clave del universo simbiótico:

## Módulos integrados

- **AI Core**
- **QMA360 Assets**
- **Crawlers**
- **Supabase + Azure Blob**
- **Fast Response / RULESTACK**

## Visión

Esta estructura permite que ZDU funcione como un organismo narrativo autónomo, capaz de adaptarse, aprender e integrar contenido desde múltiples fuentes.---

## Contenido complementario: `README_ZDU_MANIFESTS.md`

# Manifiestos de Navegación – ZDU

Este archivo documenta el propósito de cada uno de los `.json` manifest utilizados para navegación y crawling estructurado.

## Archivos clave

- `AI_Manifest.json`
- `Crawler_Manifest.json`
- `QMA360_Manifest.json`

## Objetivo

Dar inteligencia de contexto, navegación y aprendizaje adaptativo a toda la carpeta `zdu-narrativa-app`.---

## Contenido complementario: `README_sql.md`

# Infraestructura SQL · ZDU y QMA360

📂 Ruta: `/private/infra/sql/README.md`  
🧠 Propósito: Registrar y versionar todos los esquemas simbólicos de base de datos utilizados por Supabase para el universo ZDU y las campañas QMA360

---

## 📦 Contenido esperado

Esta carpeta contiene scripts `.sql` que definen la estructura lógica de:

- Tablas narrativas (casos, villanos, campañas)
- Tablas comerciales (productos QMA, documentos, campañas 360)
- Hooks, triggers, relaciones simbióticas
- Migraciones y updates de campos o relaciones

---

## 🧠 Convención de nombres

- `supabase_zdu_estructura.sql` → Núcleo técnico del universo simbiótico
- `supabase_qma360_estructura.sql` → Modelo de campañas comerciales reales
- `supabase_updates_v2.sql` → Cambios incrementales
- `migracion_zdu_202508.sql` → Script con fecha simbólica

---

## 🧠 Recomendaciones

- Cada archivo debe tener comentarios explicativos (`--`)
- Todo script ejecutado en Supabase debe dejar bitácora en `/logs/ejecuciones/`
- Cada cambio relevante debe generar una versión nueva (`_v2`, `_v3`, etc.)
- Ningún archivo `.sql` debe ser ejecutado sin validación previa por Genie o CEREBRUM

---

**Responsable simbólico:** Unidad de Arquitectura Narrativa y Técnica
**Fecha de activación:** 2025-08-01---

## Contenido complementario: `SUPABASE-STRUCTURE-AUDIT.md`

# Auditoría de Estructura Supabase · Agosto 2025

**Fecha de ejecución:** 2025-08-02  
**Total de tablas auditadas:** 89  
**Fuente:** Supabase Snippet Execution · Structure Explorer  
**Archivo original:** snapshot_supabase_structure_2025-08-02.csv

## Objetivo
Capturar un snapshot del estado actual de la base de datos para comparación futura, control de versiones y trazabilidad de nodos narrativos (RAM, casos, héroes, campañas, etc.).

## Análisis
- No se detectaron errores estructurales.
- Tablas como `casos`, `heroes_poderes`, `emociones_heroes` y `rule_stack` están activas y bien referenciadas.
- Se confirma que la tabla `cases` **no existe** (error corregido en versiones previas).

## Relación con módulos dependientes
Este snapshot será utilizado por los siguientes módulos del universo ZDU:

- **INTELIGEN-RISK** (motor principal de análisis estructural narrativo)
- **RULESTACK** (validación de consistencia lógica y simbiótica)
- **ZDU-MUTA·CORE** (activación adaptativa y recalibración de memoria)
- **Crawler AI** (ingesta y verificación inteligente de estructuras base)

---

**Nota:** Este archivo será almacenado en la siguiente ruta de infraestructura técnica:

```
/private/infra/sql/auditoría/structure_snapshots/snapshot_supabase_structure_2025-08-02.csv
```---

## Contenido complementario: `ZDU_CHECKPOINTS_INDEX.md`

# ZDU_CHECKPOINTS_INDEX.md

Este archivo representa la **memoria estructural viva** de todos los checkpoints del sistema ZDU.

Cada entrada incluye el nombre del archivo, su ruta dentro del repositorio, una vista previa de su contenido, y su estado actual.

---

**Nombre del archivo:** `SUPABASE-STRUCTURE-AUDIT.md`  

**Ruta:** `checkpoints/SUPABASE-STRUCTURE-AUDIT.md`  

**Vista previa del contenido:** # SUPABASE STRUCTURE AUDIT · 2025-08-02  

**Estado sugerido:** ✅ Completado  

---

**Nombre del archivo:** `ZDU_AUDIT_INFRA_010825.md`  

**Ruta:** `checkpoints/ZDU_AUDIT_INFRA_010825.md`  

**Vista previa del contenido:** # ZDU_AUDIT_INFRA_010825.md  

**Estado sugerido:** ✅ Completado  

---

**Nombre del archivo:** `ZDU_CHECKPOINTS_MASTER_CONSOLIDATED.md`  

**Ruta:** `checkpoints/ZDU_CHECKPOINTS_MASTER_CONSOLIDATED.md`  

**Vista previa del contenido:** ---  

**Estado sugerido:** ✅ Completado  

---

**Nombre del archivo:** `ZDU_CHECKPOINT_CLEANUP_20250801.md`  

**Ruta:** `checkpoints/ZDU_CHECKPOINT_CLEANUP_20250801.md`  

**Vista previa del contenido:** # Checkpoint · Limpieza Estructural de Archivos No Deseados  

**Estado sugerido:** ✅ Completado  

---

**Nombre del archivo:** `ZDU_CHECKPOINT_INGESTA_QMA360_20250801.md`  

**Ruta:** `checkpoints/ZDU_CHECKPOINT_INGESTA_QMA360_20250801.md`  

**Vista previa del contenido:** # ✅ ZDU_CHECKPOINT_INGESTA_QMA360_20250801  

**Estado sugerido:** ✅ Completado  

---

**Nombre del archivo:** `ZDU_CHECKPOINT_VISUAL_CODE_0803.md`  

**Ruta:** `checkpoints/ZDU_CHECKPOINT_VISUAL_CODE_0803.md`  

**Vista previa del contenido:** # ✅ ZDU-CHECKPOINT · VISUAL CODE + LIMPIEZA RAÍZ COMPLETADA  

**Estado sugerido:** ✅ Completado  

---

**Nombre del archivo:** `ZDU_CONTAINER_VALIDATION_010825.md`  

**Ruta:** `checkpoints/ZDU_CONTAINER_VALIDATION_010825.md`  

**Vista previa del contenido:** # ZDU_CONTAINER_VALIDATION_010825.md  

**Estado sugerido:** ✅ Completado  

---

**Nombre del archivo:** `ZDU_CRAWLER_SCRIPTS_CONSOLIDATION_20250803.md`  

**Ruta:** `checkpoints/ZDU_CRAWLER_SCRIPTS_CONSOLIDATION_20250803.md`  

**Vista previa del contenido:** # 🧠 ZDU QUALITY SYSTEM · CHECKPOINT · CONSOLIDACIÓN DE SCRIPTS DE CRAWLER  

**Estado sugerido:** ✅ Completado  

---

**Nombre del archivo:** `ZDU_INFRA_MILESTONE_002.md`  

**Ruta:** `checkpoints/ZDU_INFRA_MILESTONE_002.md`  

**Vista previa del contenido:** # ZDU_INFRA_MILESTONE_002  

**Estado sugerido:** ✅ Completado  

---

**Nombre del archivo:** `ZDU_SUPABASE_AZURE_SYNC_V1.md`  

**Ruta:** `checkpoints/ZDU_SUPABASE_AZURE_SYNC_V1.md`  

**Vista previa del contenido:** # ✅ CHECKPOINT REGISTRADO · Sincronización Supabase ↔ Azure Blob · GitHub  

**Estado sugerido:** ✅ Completado  

---

**Nombre del archivo:** `ZDU_SUPABASE_FOLDER_OPTIMIZATION_V1.md`  

**Ruta:** `checkpoints/ZDU_SUPABASE_FOLDER_OPTIMIZATION_V1.md`  

**Vista previa del contenido:** git add checkpoints/ZDU_SUPABASE_FOLDER_OPTIMIZATION_V1.md  

**Estado sugerido:** ✅ Completado  

---

**Nombre del archivo:** `bitacora-sync-campanas.md`  

**Ruta:** `checkpoints/bitacora-sync-campanas.md`  

**Vista previa del contenido:** ## Bitácora de sincronización de blobs narrativos con Supabase  

**Estado sugerido:** ✅ Completado  

---

**Nombre del archivo:** `changelog.md`  

**Ruta:** `checkpoints/changelog.md`  

**Vista previa del contenido:** # CHANGELOG · ZDU Universe  

**Estado sugerido:** ✅ Completado  

---

**Nombre del archivo:** `iCrawler.md`  

**Ruta:** `checkpoints/iCrawler.md`  

**Vista previa del contenido:** # iCrawler · Módulo de Activación  

**Estado sugerido:** ✅ Completado  

---

**Nombre del archivo:** `qma360_candado_readmes.md`  

**Ruta:** `checkpoints/qma360_candado_readmes.md`  

**Vista previa del contenido:** # 🔐 Checkpoint · Candado de Actualización de READMEs para Campañas QMA360  

**Estado sugerido:** ✅ Completado  

---

**Nombre del archivo:** `readme.md`  

**Ruta:** `checkpoints/readme.md`  

**Vista previa del contenido:** # Checkpoints simbióticos – private/infra/checkpoints  

**Estado sugerido:** ✅ Completado  

---

**Nombre del archivo:** `zdu_quality_checkpoint_AUDIT_MD_JSON_20250803.md`  

**Ruta:** `checkpoints/zdu_quality_checkpoint_AUDIT_MD_JSON_20250803.md`  

**Vista previa del contenido:** # ✅ ZDU QUALITY SYSTEM · CHECKPOINT · AUDITORÍA ARCHIVOS (MD + JSON)  

**Estado sugerido:** ✅ Completado  

---

**Nombre del archivo:** `zdu_quality_checkpoint_PHASE_IV.md`  

**Ruta:** `checkpoints/zdu_quality_checkpoint_PHASE_IV.md`  

**Vista previa del contenido:** # ✅ ZDU‑QUALITY‑SYSTEM‑PHASE_IV_COMPLETED  

**Estado sugerido:** ✅ Completado


---

# ZDU_CHECKPOINT_INFRA_EXPERIMENTAL

**Fecha:** 2025-08-03  
**Ubicación oficial:** `/private/infra/experimental/`  

## ✅ Descripción

Se ha consolidado y auditado completamente la carpeta `experimental/` ubicada en la infraestructura privada del sistema ZDU.  
Esta carpeta contiene scripts `.cjs` en etapa de prueba utilizados para validaciones internas, sincronizaciones entre plataformas y ensayos de automatización narrativa.

## 🧩 Acciones ejecutadas

- ✅ Consolidación de múltiples versiones previas de `experimental/` en una sola ruta.
- ✅ Revisión individual de cada script `.cjs` contenido.
- ✅ Generación de un nuevo `README.md` que documenta todos los archivos con propósito técnico.
- ✅ Validación de que esta carpeta debe mantenerse bajo monitoreo continuo, como staging técnico.

## 📂 Archivos detectados

- Scripts `.cjs`:
  - Sincronización de blobs
  - Fragmentos de prueba
  - Lógica experimental no clasificada

## 🛑 Recomendación

Evitar cualquier ejecución en entornos productivos hasta su validación por el sistema de calidad.

---

Este checkpoint queda **registrado como completado** y debe añadirse al índice maestro de checkpoints (`ZDU_CHECKPOINTS_INDEX.md`).
---

**Nombre del archivo:** `ZDU_CHECKPOINT_MD_REZAGADOS_2025_08_03.md`  
**Ruta:** `checkpoints/ZDU_CHECKPOINT_MD_REZAGADOS_2025_08_03.md`  
**Vista previa del contenido:** # ZDU_CHECKPOINT_MD_REZAGADOS_2025_08_03.md  
**Estado sugerido:** ✅ Completado---

## Contenido complementario: `ZDU_CHECKPOINTS_INDEX_FINAL_V4.md`

# ZDU_CHECKPOINTS_INDEX.md

Este archivo representa la **memoria estructural viva** de todos los checkpoints del sistema ZDU.

Cada entrada incluye el nombre del archivo, su ruta dentro del repositorio, una vista previa de su contenido, y su estado actual.

---

**Nombre del archivo:** `SUPABASE-STRUCTURE-AUDIT.md`  

**Ruta:** `checkpoints/SUPABASE-STRUCTURE-AUDIT.md`  

**Vista previa del contenido:** # SUPABASE STRUCTURE AUDIT · 2025-08-02  

**Estado sugerido:** ✅ Completado  

---

**Nombre del archivo:** `ZDU_AUDIT_INFRA_010825.md`  

**Ruta:** `checkpoints/ZDU_AUDIT_INFRA_010825.md`  

**Vista previa del contenido:** # ZDU_AUDIT_INFRA_010825.md  

**Estado sugerido:** ✅ Completado  

---

**Nombre del archivo:** `ZDU_CHECKPOINTS_MASTER_CONSOLIDATED.md`  

**Ruta:** `checkpoints/ZDU_CHECKPOINTS_MASTER_CONSOLIDATED.md`  

**Vista previa del contenido:** ---  

**Estado sugerido:** ✅ Completado  

---

**Nombre del archivo:** `ZDU_CHECKPOINT_CLEANUP_20250801.md`  

**Ruta:** `checkpoints/ZDU_CHECKPOINT_CLEANUP_20250801.md`  

**Vista previa del contenido:** # Checkpoint · Limpieza Estructural de Archivos No Deseados  

**Estado sugerido:** ✅ Completado  

---

**Nombre del archivo:** `ZDU_CHECKPOINT_INGESTA_QMA360_20250801.md`  

**Ruta:** `checkpoints/ZDU_CHECKPOINT_INGESTA_QMA360_20250801.md`  

**Vista previa del contenido:** # ✅ ZDU_CHECKPOINT_INGESTA_QMA360_20250801  

**Estado sugerido:** ✅ Completado  

---

**Nombre del archivo:** `ZDU_CHECKPOINT_VISUAL_CODE_0803.md`  

**Ruta:** `checkpoints/ZDU_CHECKPOINT_VISUAL_CODE_0803.md`  

**Vista previa del contenido:** # ✅ ZDU-CHECKPOINT · VISUAL CODE + LIMPIEZA RAÍZ COMPLETADA  

**Estado sugerido:** ✅ Completado  

---

**Nombre del archivo:** `ZDU_CONTAINER_VALIDATION_010825.md`  

**Ruta:** `checkpoints/ZDU_CONTAINER_VALIDATION_010825.md`  

**Vista previa del contenido:** # ZDU_CONTAINER_VALIDATION_010825.md  

**Estado sugerido:** ✅ Completado  

---

**Nombre del archivo:** `ZDU_CRAWLER_SCRIPTS_CONSOLIDATION_20250803.md`  

**Ruta:** `checkpoints/ZDU_CRAWLER_SCRIPTS_CONSOLIDATION_20250803.md`  

**Vista previa del contenido:** # 🧠 ZDU QUALITY SYSTEM · CHECKPOINT · CONSOLIDACIÓN DE SCRIPTS DE CRAWLER  

**Estado sugerido:** ✅ Completado  

---

**Nombre del archivo:** `ZDU_INFRA_MILESTONE_002.md`  

**Ruta:** `checkpoints/ZDU_INFRA_MILESTONE_002.md`  

**Vista previa del contenido:** # ZDU_INFRA_MILESTONE_002  

**Estado sugerido:** ✅ Completado  

---

**Nombre del archivo:** `ZDU_SUPABASE_AZURE_SYNC_V1.md`  

**Ruta:** `checkpoints/ZDU_SUPABASE_AZURE_SYNC_V1.md`  

**Vista previa del contenido:** # ✅ CHECKPOINT REGISTRADO · Sincronización Supabase ↔ Azure Blob · GitHub  

**Estado sugerido:** ✅ Completado  

---

**Nombre del archivo:** `ZDU_SUPABASE_FOLDER_OPTIMIZATION_V1.md`  

**Ruta:** `checkpoints/ZDU_SUPABASE_FOLDER_OPTIMIZATION_V1.md`  

**Vista previa del contenido:** git add checkpoints/ZDU_SUPABASE_FOLDER_OPTIMIZATION_V1.md  

**Estado sugerido:** ✅ Completado  

---

**Nombre del archivo:** `bitacora-sync-campanas.md`  

**Ruta:** `checkpoints/bitacora-sync-campanas.md`  

**Vista previa del contenido:** ## Bitácora de sincronización de blobs narrativos con Supabase  

**Estado sugerido:** ✅ Completado  

---

**Nombre del archivo:** `changelog.md`  

**Ruta:** `checkpoints/changelog.md`  

**Vista previa del contenido:** # CHANGELOG · ZDU Universe  

**Estado sugerido:** ✅ Completado  

---

**Nombre del archivo:** `iCrawler.md`  

**Ruta:** `checkpoints/iCrawler.md`  

**Vista previa del contenido:** # iCrawler · Módulo de Activación  

**Estado sugerido:** ✅ Completado  

---

**Nombre del archivo:** `qma360_candado_readmes.md`  

**Ruta:** `checkpoints/qma360_candado_readmes.md`  

**Vista previa del contenido:** # 🔐 Checkpoint · Candado de Actualización de READMEs para Campañas QMA360  

**Estado sugerido:** ✅ Completado  

---

**Nombre del archivo:** `readme.md`  

**Ruta:** `checkpoints/readme.md`  

**Vista previa del contenido:** # Checkpoints simbióticos – private/infra/checkpoints  

**Estado sugerido:** ✅ Completado  

---

**Nombre del archivo:** `zdu_quality_checkpoint_AUDIT_MD_JSON_20250803.md`  

**Ruta:** `checkpoints/zdu_quality_checkpoint_AUDIT_MD_JSON_20250803.md`  

**Vista previa del contenido:** # ✅ ZDU QUALITY SYSTEM · CHECKPOINT · AUDITORÍA ARCHIVOS (MD + JSON)  

**Estado sugerido:** ✅ Completado  

---

**Nombre del archivo:** `zdu_quality_checkpoint_PHASE_IV.md`  

**Ruta:** `checkpoints/zdu_quality_checkpoint_PHASE_IV.md`  

**Vista previa del contenido:** # ✅ ZDU‑QUALITY‑SYSTEM‑PHASE_IV_COMPLETED  

**Estado sugerido:** ✅ Completado


---

# ZDU_CHECKPOINT_QUALITY_CONSOLIDADO

**Fecha:** 2025-08-03  
**Ubicación oficial:** `/quality/`

## ✅ Descripción

Se ha ejecutado la consolidación completa de todos los archivos Markdown relacionados con planes, puntos de control, AMEF y registros de calidad del sistema narrativo ZDU.  
Estos archivos fueron fusionados en un solo `README.md` con estructura organizada por secciones.

## 📌 Archivos integrados

- README-QUALITY-CONTROL-PLAN.md
- README-QUALITY-CHECKPOINT.md
- README-QUALITY-AMEF.md
- CONTROL_PLAN-ZDU.md
- AMEF-ZDU.md
- ZDU-SIGMA-CORE-CHECKPOINT.md
- ZDU_QUALITY_INDEX.md (2 versiones)

## 📁 Resultado

Se conserva únicamente el nuevo `README.md` consolidado.  
Los archivos anteriores pueden ser eliminados del repositorio y quedan documentados en este checkpoint.

---

Este checkpoint queda **registrado como completado** y debe integrarse en el índice maestro `ZDU_CHECKPOINTS_INDEX.md`.---

## Contenido complementario: `ZDU_CHECKPOINTS_INDEX_FINAL_V5.md`

# ZDU_CHECKPOINTS_INDEX.md

Este archivo representa la **memoria estructural viva** de todos los checkpoints del sistema ZDU.

Cada entrada incluye el nombre del archivo, su ruta dentro del repositorio, una vista previa de su contenido, y su estado actual.

---

**Nombre del archivo:** `SUPABASE-STRUCTURE-AUDIT.md`  

**Ruta:** `checkpoints/SUPABASE-STRUCTURE-AUDIT.md`  

**Vista previa del contenido:** # SUPABASE STRUCTURE AUDIT · 2025-08-02  

**Estado sugerido:** ✅ Completado  

---

**Nombre del archivo:** `ZDU_AUDIT_INFRA_010825.md`  

**Ruta:** `checkpoints/ZDU_AUDIT_INFRA_010825.md`  

**Vista previa del contenido:** # ZDU_AUDIT_INFRA_010825.md  

**Estado sugerido:** ✅ Completado  

---

**Nombre del archivo:** `ZDU_CHECKPOINTS_MASTER_CONSOLIDATED.md`  

**Ruta:** `checkpoints/ZDU_CHECKPOINTS_MASTER_CONSOLIDATED.md`  

**Vista previa del contenido:** ---  

**Estado sugerido:** ✅ Completado  

---

**Nombre del archivo:** `ZDU_CHECKPOINT_CLEANUP_20250801.md`  

**Ruta:** `checkpoints/ZDU_CHECKPOINT_CLEANUP_20250801.md`  

**Vista previa del contenido:** # Checkpoint · Limpieza Estructural de Archivos No Deseados  

**Estado sugerido:** ✅ Completado  

---

**Nombre del archivo:** `ZDU_CHECKPOINT_INGESTA_QMA360_20250801.md`  

**Ruta:** `checkpoints/ZDU_CHECKPOINT_INGESTA_QMA360_20250801.md`  

**Vista previa del contenido:** # ✅ ZDU_CHECKPOINT_INGESTA_QMA360_20250801  

**Estado sugerido:** ✅ Completado  

---

**Nombre del archivo:** `ZDU_CHECKPOINT_VISUAL_CODE_0803.md`  

**Ruta:** `checkpoints/ZDU_CHECKPOINT_VISUAL_CODE_0803.md`  

**Vista previa del contenido:** # ✅ ZDU-CHECKPOINT · VISUAL CODE + LIMPIEZA RAÍZ COMPLETADA  

**Estado sugerido:** ✅ Completado  

---

**Nombre del archivo:** `ZDU_CONTAINER_VALIDATION_010825.md`  

**Ruta:** `checkpoints/ZDU_CONTAINER_VALIDATION_010825.md`  

**Vista previa del contenido:** # ZDU_CONTAINER_VALIDATION_010825.md  

**Estado sugerido:** ✅ Completado  

---

**Nombre del archivo:** `ZDU_CRAWLER_SCRIPTS_CONSOLIDATION_20250803.md`  

**Ruta:** `checkpoints/ZDU_CRAWLER_SCRIPTS_CONSOLIDATION_20250803.md`  

**Vista previa del contenido:** # 🧠 ZDU QUALITY SYSTEM · CHECKPOINT · CONSOLIDACIÓN DE SCRIPTS DE CRAWLER  

**Estado sugerido:** ✅ Completado  

---

**Nombre del archivo:** `ZDU_INFRA_MILESTONE_002.md`  

**Ruta:** `checkpoints/ZDU_INFRA_MILESTONE_002.md`  

**Vista previa del contenido:** # ZDU_INFRA_MILESTONE_002  

**Estado sugerido:** ✅ Completado  

---

**Nombre del archivo:** `ZDU_SUPABASE_AZURE_SYNC_V1.md`  

**Ruta:** `checkpoints/ZDU_SUPABASE_AZURE_SYNC_V1.md`  

**Vista previa del contenido:** # ✅ CHECKPOINT REGISTRADO · Sincronización Supabase ↔ Azure Blob · GitHub  

**Estado sugerido:** ✅ Completado  

---

**Nombre del archivo:** `ZDU_SUPABASE_FOLDER_OPTIMIZATION_V1.md`  

**Ruta:** `checkpoints/ZDU_SUPABASE_FOLDER_OPTIMIZATION_V1.md`  

**Vista previa del contenido:** git add checkpoints/ZDU_SUPABASE_FOLDER_OPTIMIZATION_V1.md  

**Estado sugerido:** ✅ Completado  

---

**Nombre del archivo:** `bitacora-sync-campanas.md`  

**Ruta:** `checkpoints/bitacora-sync-campanas.md`  

**Vista previa del contenido:** ## Bitácora de sincronización de blobs narrativos con Supabase  

**Estado sugerido:** ✅ Completado  

---

**Nombre del archivo:** `changelog.md`  

**Ruta:** `checkpoints/changelog.md`  

**Vista previa del contenido:** # CHANGELOG · ZDU Universe  

**Estado sugerido:** ✅ Completado  

---

**Nombre del archivo:** `iCrawler.md`  

**Ruta:** `checkpoints/iCrawler.md`  

**Vista previa del contenido:** # iCrawler · Módulo de Activación  

**Estado sugerido:** ✅ Completado  

---

**Nombre del archivo:** `qma360_candado_readmes.md`  

**Ruta:** `checkpoints/qma360_candado_readmes.md`  

**Vista previa del contenido:** # 🔐 Checkpoint · Candado de Actualización de READMEs para Campañas QMA360  

**Estado sugerido:** ✅ Completado  

---

**Nombre del archivo:** `readme.md`  

**Ruta:** `checkpoints/readme.md`  

**Vista previa del contenido:** # Checkpoints simbióticos – private/infra/checkpoints  

**Estado sugerido:** ✅ Completado  

---

**Nombre del archivo:** `zdu_quality_checkpoint_AUDIT_MD_JSON_20250803.md`  

**Ruta:** `checkpoints/zdu_quality_checkpoint_AUDIT_MD_JSON_20250803.md`  

**Vista previa del contenido:** # ✅ ZDU QUALITY SYSTEM · CHECKPOINT · AUDITORÍA ARCHIVOS (MD + JSON)  

**Estado sugerido:** ✅ Completado  

---

**Nombre del archivo:** `zdu_quality_checkpoint_PHASE_IV.md`  

**Ruta:** `checkpoints/zdu_quality_checkpoint_PHASE_IV.md`  

**Vista previa del contenido:** # ✅ ZDU‑QUALITY‑SYSTEM‑PHASE_IV_COMPLETED  

**Estado sugerido:** ✅ Completado


---

# ZDU_CHECKPOINT_QUALITY_CONSOLIDADO

**Fecha:** 2025-08-03  
**Ubicación oficial:** `/quality/`

## ✅ Descripción

Se ha ejecutado la consolidación completa de todos los archivos Markdown relacionados con planes, puntos de control, AMEF y registros de calidad del sistema narrativo ZDU.  
Estos archivos fueron fusionados en un solo `README.md` con estructura organizada por secciones.

## 📌 Archivos integrados

- README-QUALITY-CONTROL-PLAN.md
- README-QUALITY-CHECKPOINT.md
- README-QUALITY-AMEF.md
- CONTROL_PLAN-ZDU.md
- AMEF-ZDU.md
- ZDU-SIGMA-CORE-CHECKPOINT.md
- ZDU_QUALITY_INDEX.md (2 versiones)

## 📁 Resultado

Se conserva únicamente el nuevo `README.md` consolidado.  
Los archivos anteriores pueden ser eliminados del repositorio y quedan documentados en este checkpoint.

---

Este checkpoint queda **registrado como completado** y debe integrarse en el índice maestro `ZDU_CHECKPOINTS_INDEX.md`.
---

**Nombre del archivo:** `ZDU_CHECKPOINT_MD_REZAGADOS_2025_08_03.md`  
**Ruta:** `checkpoints/ZDU_CHECKPOINT_MD_REZAGADOS_2025_08_03.md`  
**Vista previa del contenido:** # ZDU_CHECKPOINT_MD_REZAGADOS_2025_08_03.md  
**Estado sugerido:** ✅ Completado


---

# ZDU_CHECKPOINT_INFRA_CONSOLIDADO

**Fecha:** 2025-08-03  
**Ubicación oficial:** `/infra/`

## ✅ Descripción

Se ha consolidado la documentación clave relacionada con la infraestructura lógica y suprastructura del universo ZDU.  
El nuevo `README.md` sirve como punto de entrada centralizado para comprender el diseño técnico y la organización narrativa-operativa del sistema.

## 📁 Archivos integrados

- `ZDU_INFRA_INDEX.md`
- `README_SUPRASTRUCTURE.md`
- `readme.md` (infra raíz)

## 📌 Resultado

A partir de este punto, se conservará únicamente el `README.md` consolidado en la carpeta `/infra/`.  
Los archivos anteriores pueden ser eliminados. Este checkpoint registra formalmente la consolidación como completada.

---

Este documento debe integrarse al índice maestro `ZDU_CHECKPOINTS_INDEX.md`.


---

# ZDU_CHECKPOINT_SQL_CONSOLIDADO

**Fecha:** 2025-08-03  
**Ubicación oficial:** `/sql/`

## ✅ Descripción

Se ha consolidado la documentación simbólica, técnica y narrativa de la carpeta `/sql/` en un único `README.md` ubicado en su raíz.

Este documento incluye:

- Candados narrativos del ecosistema QMA360.
- Estructura lógica de carpetas de auditoría.
- Documentación histórica y estratégica de estructura Supabase.

## 📁 Archivos integrados

- `README_sql.md`
- `qma360_candado_readmes.md`

## 🗂️ Archivos preservados como independientes

- `SUPABASE-STRUCTURE-AUDIT.md`: permanece dentro de `/sql/auditoria/structure-snapshots/`.

## 📌 Resultado

Puede eliminarse cualquier otro `README*.md` dentro de `/sql/` excepto el nuevo `README.md` y el audit snapshot.  
Esta consolidación queda registrada como **completada** y debe integrarse al índice maestro.

---

Este checkpoint debe agregarse a `ZDU_CHECKPOINTS_INDEX.md`.


---

# ZDU_CHECKPOINT_CLERK_CONSOLIDADO

**Fecha:** 2025-08-03  
**Ubicación oficial:** `/clerk/`

## ✅ Descripción

Se ha consolidado la documentación completa del módulo de identidad Clerk, incluyendo:

- Integraciones simbólicas
- Núcleo técnico narrativo
- Flujos de autenticación asociados
- Archivos `README-CLERK-IDENTITY.md`, `clerk-identity-core.md` y `README.md`

## 📁 Archivos integrados

- `README-CLERK-IDENTITY.md`
- `clerk-identity-core.md`
- `README.md` adicional cargado

## 📌 Resultado

Se conserva únicamente `README_CLERK_FINAL.md` como referencia maestra.  
Todos los archivos anteriores pueden eliminarse.

---

Este checkpoint debe integrarse en `ZDU_CHECKPOINTS_INDEX.md`.


---

# ZDU_CHECKPOINT_INFRA_MAPPINGS_CONSOLIDADO

**Fecha:** 2025-08-03  
**Ubicación original:** `/infra/mappings/`  
**Nuevo destino sugerido:** `/checkpoints/`

## ✅ Descripción

Se ha consolidado toda la documentación narrativa y técnica ubicada originalmente en la carpeta `/infra/mappings/`.  
Dicho contenido incluía manifiestos, esquemas de dependencia y estrategias de carpetas del universo ZDU.

## 📁 Archivos integrados

- `README_ZDU_MANIFESTS.md`
- `readme.md`
- `ZDU_FOLDER_DEPENDENCY_STRATEGY_V1.md`
- `ZDU_FOLDER_MAPPING_SCHEMA_V1.md`

## 📌 Resultado

Todos los archivos han sido integrados en un solo `README.md` consolidado.  
Se autoriza la eliminación de la carpeta `/infra/mappings/`, ya que esta consolidación conserva todo el valor documental necesario.

---

Este checkpoint queda **registrado como completado** y debe integrarse al índice maestro `ZDU_CHECKPOINTS_INDEX.md`.---

## Contenido complementario: `ZDU_CHECKPOINT_CLERK_CONSOLIDADO.md`

# ZDU_CHECKPOINT_CLERK_CONSOLIDADO

**Fecha:** 2025-08-03  
**Ubicación oficial:** `/clerk/`

## ✅ Descripción

Se ha consolidado la documentación completa del módulo de identidad Clerk, incluyendo:

- Integraciones simbólicas
- Núcleo técnico narrativo
- Flujos de autenticación asociados
- Archivos `README-CLERK-IDENTITY.md`, `clerk-identity-core.md` y `README.md`

## 📁 Archivos integrados

- `README-CLERK-IDENTITY.md`
- `clerk-identity-core.md`
- `README.md` adicional cargado

## 📌 Resultado

Se conserva únicamente `README_CLERK_FINAL.md` como referencia maestra.  
Todos los archivos anteriores pueden eliminarse.

---

Este checkpoint debe integrarse en `ZDU_CHECKPOINTS_INDEX.md`.---

## Contenido complementario: `ZDU_CHECKPOINT_INFRA_CONSOLIDADO.md`

# ZDU_CHECKPOINT_INFRA_CONSOLIDADO

**Fecha:** 2025-08-03  
**Ubicación oficial:** `/infra/`

## ✅ Descripción

Se ha consolidado la documentación clave relacionada con la infraestructura lógica y suprastructura del universo ZDU.  
El nuevo `README.md` sirve como punto de entrada centralizado para comprender el diseño técnico y la organización narrativa-operativa del sistema.

## 📁 Archivos integrados

- `ZDU_INFRA_INDEX.md`
- `README_SUPRASTRUCTURE.md`
- `readme.md` (infra raíz)

## 📌 Resultado

A partir de este punto, se conservará únicamente el `README.md` consolidado en la carpeta `/infra/`.  
Los archivos anteriores pueden ser eliminados. Este checkpoint registra formalmente la consolidación como completada.

---

Este documento debe integrarse al índice maestro `ZDU_CHECKPOINTS_INDEX.md`.---

## Contenido complementario: `ZDU_CHECKPOINT_INFRA_MAPPINGS_CONSOLIDADO.md`

# ZDU_CHECKPOINT_INFRA_MAPPINGS_CONSOLIDADO

**Fecha:** 2025-08-03  
**Ubicación original:** `/infra/mappings/`  
**Nuevo destino sugerido:** `/checkpoints/`

## ✅ Descripción

Se ha consolidado toda la documentación narrativa y técnica ubicada originalmente en la carpeta `/infra/mappings/`.  
Dicho contenido incluía manifiestos, esquemas de dependencia y estrategias de carpetas del universo ZDU.

## 📁 Archivos integrados

- `README_ZDU_MANIFESTS.md`
- `readme.md`
- `ZDU_FOLDER_DEPENDENCY_STRATEGY_V1.md`
- `ZDU_FOLDER_MAPPING_SCHEMA_V1.md`

## 📌 Resultado

Todos los archivos han sido integrados en un solo `README.md` consolidado.  
Se autoriza la eliminación de la carpeta `/infra/mappings/`, ya que esta consolidación conserva todo el valor documental necesario.

---

Este checkpoint queda **registrado como completado** y debe integrarse al índice maestro `ZDU_CHECKPOINTS_INDEX.md`.---

## Contenido complementario: `ZDU_CHECKPOINT_QUALITY_CONSOLIDADO.md`

# ZDU_CHECKPOINT_QUALITY_CONSOLIDADO

**Fecha:** 2025-08-03  
**Ubicación oficial:** `/quality/`

## ✅ Descripción

Se ha ejecutado la consolidación completa de todos los archivos Markdown relacionados con planes, puntos de control, AMEF y registros de calidad del sistema narrativo ZDU.  
Estos archivos fueron fusionados en un solo `README.md` con estructura organizada por secciones.

## 📌 Archivos integrados

- README-QUALITY-CONTROL-PLAN.md
- README-QUALITY-CHECKPOINT.md
- README-QUALITY-AMEF.md
- CONTROL_PLAN-ZDU.md
- AMEF-ZDU.md
- ZDU-SIGMA-CORE-CHECKPOINT.md
- ZDU_QUALITY_INDEX.md (2 versiones)

## 📁 Resultado

Se conserva únicamente el nuevo `README.md` consolidado.  
Los archivos anteriores pueden ser eliminados del repositorio y quedan documentados en este checkpoint.

---

Este checkpoint queda **registrado como completado** y debe integrarse en el índice maestro `ZDU_CHECKPOINTS_INDEX.md`.---

## Contenido complementario: `ZDU_CHECKPOINT_SQL_CONSOLIDADO.md`

# ZDU_CHECKPOINT_SQL_CONSOLIDADO

**Fecha:** 2025-08-03  
**Ubicación oficial:** `/sql/`

## ✅ Descripción

Se ha consolidado la documentación simbólica, técnica y narrativa de la carpeta `/sql/` en un único `README.md` ubicado en su raíz.

Este documento incluye:

- Candados narrativos del ecosistema QMA360.
- Estructura lógica de carpetas de auditoría.
- Documentación histórica y estratégica de estructura Supabase.

## 📁 Archivos integrados

- `README_sql.md`
- `qma360_candado_readmes.md`

## 🗂️ Archivos preservados como independientes

- `SUPABASE-STRUCTURE-AUDIT.md`: permanece dentro de `/sql/auditoria/structure-snapshots/`.

## 📌 Resultado

Puede eliminarse cualquier otro `README*.md` dentro de `/sql/` excepto el nuevo `README.md` y el audit snapshot.  
Esta consolidación queda registrada como **completada** y debe integrarse al índice maestro.

---

Este checkpoint debe agregarse a `ZDU_CHECKPOINTS_INDEX.md`.---

## Contenido complementario: `ZDU_FOLDER_DEPENDENCY_STRATEGY_V1.md`

git add checkpoints/ZDU_FOLDER_DEPENDENCY_STRATEGY_V1.md
git commit -m "Checkpoint: Estrategia de dependencia Supabase ↔ Azure Blob (ZDU_FOLDER_DEPENDENCY_STRATEGY_V1)"
git push origin main

# Checkpoint: Estrategia de Dependencia entre Carpetas Supabase ↔ Azure Blob  
**Versión:** ZDU_FOLDER_DEPENDENCY_STRATEGY_V1  
**Fecha:** 2025-07-27  
**Ubicación:** /checkpoints/  

## Objetivo  
Establecer la lógica de dependencia entre carpetas funcionales en Supabase y su correspondencia directa con contenedores o rutas en Azure Blob, asegurando sincronización simbiótica entre Supabase, Azure y GitHub.

---

## Estructura de Dependencia

Cada entrada narrativa en Supabase (campaña, caso, villano, etc.) deberá tener:

- id
- slug o nombre_carpeta
- parent_id (si aplica, para representar jerarquía)
- folder_blob: ruta exacta o patrón transformable al Blob
- tabla_relacionada: para mantener modularidad

---

## Lógica de Sincronización

| Acción en Supabase | Reflejo esperado en Azure Blob                | Registro en GitHub       |
|---------------------|-----------------------------------------------|---------------------------|
| Crear carpeta       | Crear contenedor o carpeta lógica en Blob     | Commit con *_SYNC_V1.md   |
| Renombrar carpeta   | Renombrar blob asociado o crear nueva ruta    | Actualizar map.json       |
| Eliminar carpeta    | Marcar carpeta como archivada en Blob         | Crear *_DEPRECATION.md    |

---

## Reglas simbióticas

1. No se crean carpetas vacías: toda carpeta Supabase debe tener una razón narrativa o estructural (CDU, campaña, villano, etc.).
2. Cada tabla en Supabase debe contener su propio campo folder_blob.
3. Toda nueva dependencia debe registrarse en ZDU_FOLDER_MAPPING_SCHEMA.md antes de aplicarse.
4. La lógica se automatizará en fase posterior con funciones desde GitHub (ZDU_AUTO_SYNC_ENGINE_V1).

---

## Acción inmediata

1. Validar que las carpetas actuales en Supabase tengan su campo folder_blob.
2. Alinear todos los nombres de carpetas con Azure Blob.
3. Generar script para escucha de cambios (Webhook o CronJob).
4. Registrar evolución en esta bitácora simbólica.

---

## Referencias

- Repositorio GitHub: zdu-narrativa-app  
  https://github.com/pmosqueira-sketch/zdu-narrativa-app  
- Bitácora anterior: ZDU_FOLDER_MAPPING_SCHEMA_V1.md  
- Blob Explorer - Azure  
  https://portal.azure.com/

---

Marcado como CHECKPOINT ESTRATÉGICO.---

## Contenido complementario: `ZDU_FOLDER_MAPPING_SCHEMA_V1.md`

Checkpoint registrado: ZDU_FOLDER_MAPPING_SCHEMA_V1

Objetivo:
Establecer el mapeo simbólico y funcional entre las carpetas existentes en Supabase y los contenedores correspondientes en Azure Blob. Este mapeo servirá para futuras automatizaciones, sincronización de endpoints y scripts de ingestión narrativa.

Estructura Supabase ↔ Azure Blob:

| Supabase Folder        | Azure Blob Container       | Notas Operativas                                |
|------------------------|----------------------------|--------------------------------------------------|
| zdu_universe_assets    | zdu-universe-assets        | Assets narrativos (renders, PDF, visuales)       |
| zdu_simbologia         | zdu-simbologia             | Elementos simbólicos (íconos, avatares, claves)  |
| zdu_campanas           | zdu-campanas               | Campañas CDU y nodos relacionados                |
| villanos               | villanos                   | Expedientes narrativos y metadatos de amenazas   |
| cdu_assets             | cdu-assets                 | Elementos estáticos de campañas CDU              |
| logs                   | logs                       | Logs técnicos de funciones y rastreos            |

Notas:
- La sincronización es unidireccional por ahora (Azure → Supabase si aplica).
- La automatización futura evaluará Webhooks o funciones Azure para trigger cruzado.

Fecha: 2025-07-28  
Autor: Pablo Mosqueira---

## Contenido complementario: `ZDU_INFRA_INDEX.md`

# ZDU_INFRA_INDEX.md

**Índice Maestro de Documentación Técnica de Infraestructura**
Ubicación sugerida: `/private/infra/`

---

## 1. Infraestructura General
- [README_SUPRASTRUCTURE.md](README_SUPRASTRUCTURE.md)
- [readme.md](readme.md)

## 2. Experimental
- [README-AI-MASTER2.md](experimental/README-AI-MASTER2.md)

## 3. Identity / Clerk
- [README-CLERK-IDENTITY.md](identity/clerk/README-CLERK-IDENTITY.md)
- [clerk-identity-core.md](identity/clerk/clerk-identity-core.md)

## 4. Autenticación
- [clerk-supabase-jwt-bridge.md](auth/clerk-supabase-jwt-bridge.md)
- [clerk-identity-core.md](auth/clerk-identity-core.md)

### JWT
- [README.md](auth/jwt/README.md)
- [README_AUTH.md](auth/jwt/README_AUTH.md)
- [clerk_supabase_jwks.json](auth/jwt/clerk_supabase_jwks.json)

## 5. Checkpoints Técnicos
- [ZDU_INFRA_MILESTONE_002.md](checkpoints/ZDU_INFRA_MILESTONE_002.md)
- [ZDU_CHECKPOINT_CLEANUP_20250801.md](checkpoints/ZDU_CHECKPOINT_CLEANUP_20250801.md)
- [bitacora-sync-campanas.md](checkpoints/bitacora-sync-campanas.md)
- [ZDU_SUPABASE_AZURE_SYNC_V1.md](checkpoints/ZDU_SUPABASE_AZURE_SYNC_V1.md)
- [ZDU_CONTAINER_VALIDATION_010825.md](checkpoints/ZDU_CONTAINER_VALIDATION_010825.md)
- [ZDU_AUDIT_INFRA_010825.md](checkpoints/ZDU_AUDIT_INFRA_010825.md)
- [readme.md](checkpoints/readme.md)

---

**Última actualización:** Generado automáticamente por la IA ZDU (infra-crawler).---

## Contenido complementario: `clerk-identity-core.md`

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

Última actualización: 2025-08-02---

## Contenido complementario: `qma360_candado_readmes.md`

# 🔐 Checkpoint · Candado de Actualización de READMEs para Campañas QMA360

## Declaración

Toda carpeta simbólica que represente un nodo de campaña, vertical, o dataset dentro de la iniciativa QMA360 **debe contar con un archivo `README.md`** que explique:

- Qué contiene la carpeta.
- Cuál es su propósito dentro de la narrativa o campaña.
- Qué tipo de documentos se esperan (ej. datasheets, casos de estudio, etc.).
- Relación con la base de datos Supabase (`estructura_qma360`).
- Ruta local y Blob asociada.
- Fecha de creación o última actualización.

## Activación del candado

Este candado queda activado de forma permanente en el proyecto.  
Cada vez que se ejecute un `INSERT INTO` o se agregue contenido nuevo en la carpeta simbólica correspondiente, se debe:

1. Editar el `README.md` en la carpeta afectada.
2. Registrar el update como parte del siguiente `checkpoint`.
3. Garantizar trazabilidad y transparencia simbiótica.

---

**Fecha:** 2025-08-01  
**Checkpoint registrado en:** `/private/checkpoints/qma360_candado_readmes.md`

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
