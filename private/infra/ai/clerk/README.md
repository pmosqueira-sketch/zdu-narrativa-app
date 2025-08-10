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
