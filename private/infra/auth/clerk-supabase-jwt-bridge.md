
# 🔐 Clerk ↔ Supabase JWT Integration · ZDU Universe

Este documento consolida la configuración de validación simbiótica entre el proveedor de identidad Clerk y la plataforma Supabase, a través de JSON Web Tokens (JWT) y claves públicas compartidas.

---

## 🧩 1. Entorno activo

- Supabase Project ID: `lilxvmvykdssotolctbl`
- JWT Signing Key (Key ID): `2b668881-7aef-44db-aa50-76c672448ef6`
- Discovery URL (JWKS):  
  [https://lilxvmvykdssotolctbl.supabase.co/auth/v1/.well-known/jwks.json](https://lilxvmvykdssotolctbl.supabase.co/auth/v1/.well-known/jwks.json)

---

## 🔐 2. Configuración en Clerk (modo verificación)

Para permitir que Supabase verifique tokens emitidos por Clerk, asegúrate de:

- Emitir JWT con `kid` coincidente.
- Incluir el campo `sub` con el `user_id` de Clerk.
- Incluir `email`, `role` y cualquier metadata narrativa.

### Ejemplo de token esperado:
```json
{
  "sub": "user_30YZyy7zXwF73AzxmtEFIrI9gr1",
  "email": "pmosqueira@qma.mx",
  "role": "authenticated",
  "iat": 1753806724,
  "exp": 1753906724
}
```

---

## 🛠 3. Configurar Supabase para validar tokens de Clerk

En Supabase → **Project Settings → Auth → JWT Settings**:

- Establecer la JWKS URL como:
```
https://lilxvmvykdssotolctbl.supabase.co/auth/v1/.well-known/jwks.json
```

- O cargar la clave pública si se gestiona manualmente.

---

## 🧬 4. Aplicación narrativa

Este enlace simbiótico permite que:
- Supabase autentique acciones disparadas por Clerk.
- CEREBRUM valide manifiestos firmados por usuarios autorizados.
- ZDU-RECALC y NODO-CAMP respondan solo ante identidades verificadas.

---

## 📂 Ruta sugerida

Guardar como:
```
/private/infra/auth/clerk-supabase-jwt-bridge.md
```

---

✍️ Última actualización: 2025-08-02
