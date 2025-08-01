## Scripts de Validación y Auditoría · `scripts/audits/`

Este módulo contiene scripts utilitarios para validar archivos narrativos estructurados (JSON), así como comprobar la conectividad simbiótica con Supabase. Forma parte del subsistema de ingesta y control de consistencia del universo ZDU. Los scripts se encuentran organizados bajo la estructura:

- `data/`: Archivos estructurados de entrada (`.json`)
- `modules/`: Funciones reusables para validación y parsing
- `runners/`: Scripts ejecutables para test y diagnóstico

---

### 🔎 test_supabase_connect.cjs

Script de diagnóstico ubicado en `private/infra/scripts/audits/runners/` que valida:

- Lectura del archivo `.env` desde la raíz del proyecto.
- Inicialización correcta del cliente Supabase.
- Prueba básica de sesión (`getSession()`).

Este test permite confirmar que las variables de entorno necesarias están definidas y que la instancia Supabase está accesible desde el entorno local.

**Ejecutar con:**
```bash
node test_supabase_connect.cjs