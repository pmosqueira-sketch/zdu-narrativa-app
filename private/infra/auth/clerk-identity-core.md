
# 🔐 ZDU · Clerk Identity Core

Este documento establece la estructura operativa, narrativa y técnica para la integración de Clerk como sistema de autenticación central dentro del universo ZDU.

---

## 👤 Usuario principal registrado

```json
{
  "email": "pmosqueira@qma.mx",
  "user_id": "user_30YZyy7zXwF73AzxmtEFIrI9gr1",
  "status": "activo",
  "autenticación": "admin-verificada",
  "rol": "owner",
  "desde": "2025-07-29"
}
```

---

## 🔗 Integración con Supabase

- Clerk actúa como **proveedor SSO** para acceso a interfaces protegidas (dashboards, edición de manifiestos, nodos RAM).
- Se puede usar JWT de Clerk para autenticación de Supabase si se configura correctamente con claims personalizados.

```json
{
  "sub": "user_30YZyy7zXwF73AzxmtEFIrI9gr1",
  "email": "pmosqueira@qma.mx",
  "role": "authenticated",
  "exp": 9999999999
}
```

- Este token puede ser utilizado por funciones Azure o REST para autorizar accesos simbólicos.

---

## 🧠 Integración narrativa

Clerk representa la **Identidad Central Validada** dentro del sistema narrativo de ZDU. A nivel simbólico:

- Autenticaciones verificadas → acceso a edición de manifiestos, configuración AI, creación de nodos.
- Cuentas no verificadas → acceso solo a visualización narrativa.

Puede asignarse como guardian simbólico de acceso:
- a RAM,
- a módulos de CEREBRUM,
- a dashboards de casos CDU.

---

## 🧬 Conexión con manifiestos AI

Campo sugerido en `ZDU_AI_MANIFEST`:

```json
{
  "auth_provider": "Clerk",
  "authorized_user_id": "user_30YZyy7zXwF73AzxmtEFIrI9gr1",
  "email": "pmosqueira@qma.mx"
}
```

---

## 📂 Ruta simbólica sugerida de este archivo

```
/private/infra/auth/clerk-identity-core.md
```

---

## ⛓ Enlaces cruzados

- `README-TECHv.7.md`: para lógica REST, backend y Supabase.
- `README-AI-ROADMAP.md`: como punto de entrada a módulos AI simbióticos.
- `ai_modules` (tabla): para relacionar manifestos con usuarios verificados.

---

✍️ Última actualización: 2025-08-02
