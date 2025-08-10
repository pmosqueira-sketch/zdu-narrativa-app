# JWT · Integración Clerk + Supabase

Este directorio contiene recursos fundamentales para la autenticación JWT entre Clerk y Supabase dentro del entorno ZDU. A continuación, se detallan los elementos clave incluidos en esta carpeta y se consolidan las instrucciones de ambos documentos previos.

---

## 🔐 Autenticación JWT

La autenticación entre Clerk y Supabase se gestiona mediante JSON Web Tokens (JWT), validados por las claves públicas contenidas en el archivo `clerk_supabase_jwks.json`. Este mecanismo permite establecer una conexión segura entre ambas plataformas en escenarios de infraestructura híbrida.

### Archivos Clave

- **clerk_supabase_jwks.json**: Contiene las claves públicas necesarias para verificar los tokens generados por Clerk.
- **image.png**: Imagen de referencia visual para los flujos de autenticación.
- **README.md** y **README_AUTH.md** (ya consolidados en este documento): Documentaban por separado el mecanismo de autenticación, validación y configuración entre Clerk y Supabase.

---

## 🔧 Configuración Requerida

### 1. Clerk JWT Template

Desde la consola de Clerk, se debe definir un template de JWT que contenga los siguientes atributos:

```json
{
  "sub": "{{user.id}}",
  "email": "{{user.email}}",
  "role": "{{user.publicMetadata.role}}",
  "aud": "authenticated",
  "iss": "https://<tu-subdominio>.clerk.accounts.dev"
}
```

> Asegúrate de que el `aud` coincida con el esquema de Supabase (`authenticated`), y que `iss` corresponda con el dominio de Clerk configurado.

### 2. Supabase JWT Config

En Supabase, se debe configurar la verificación del JWT mediante los siguientes pasos:

- Habilitar autenticación externa con JWT.
- Establecer la URL del JWKS: debe apuntar al archivo `clerk_supabase_jwks.json` o su equivalente si se sirve desde un endpoint seguro.
- Configurar el `audience` y `issuer` esperados para empatar con el template de Clerk.

---

## 🧪 Validación

Para validar que el token generado es válido:

1. Decodificarlo en [jwt.io](https://jwt.io)
2. Verificar que las claims (`aud`, `iss`, `sub`) coinciden con lo configurado.
3. Revisar que el `kid` del header esté presente en el archivo `clerk_supabase_jwks.json`.

---

## ✅ Resultado Esperado

Una vez configurado correctamente:

- Clerk emitirá tokens firmados con sus claves privadas.
- Supabase podrá validar los tokens automáticamente mediante el JWKS proporcionado.
- Se establecerá una autenticación federada segura y portable dentro del ecosistema ZDU.

---

*Documento generado automáticamente consolidando los README existentes.*
