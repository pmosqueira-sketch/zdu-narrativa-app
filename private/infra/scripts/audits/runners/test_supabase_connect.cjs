// ================================================
// test_supabase_connect.cjs
// Runner para validar conexión básica a Supabase
// desde un entorno en scripts/audits/runners
// ================================================

// 1. Cargar variables de entorno desde el .env en raíz
const path = require('path');
const dotenvPath = path.resolve(__dirname, '../../../../../.env');
require('dotenv').config({ path: dotenvPath });

// 2. Validar que las variables críticas estén definidas
if (!process.env.SUPABASE_URL || !process.env.SUPABASE_ANON_KEY) {
  console.error('[ERROR] Variables de entorno faltantes. Verifica .env en:', dotenvPath);
  process.exit(1);
}

// 3. Debug opcional
console.log('[DEBUG] .env cargado desde:', dotenvPath);
console.log('[DEBUG] SUPABASE_URL:', process.env.SUPABASE_URL);

// 4. Inicializar cliente Supabase
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

// 5. Validación rápida de conexión
supabase.auth.getSession()
  .then(response => {
    console.log('[SUCCESS] Conexión exitosa con Supabase.');
    console.log('[INFO] Sesión:', response.data);
  })
  .catch(err => {
    console.error('[ERROR] Falló la conexión a Supabase:', err.message);
  });
