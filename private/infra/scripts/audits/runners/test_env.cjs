const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../../../.env') });

console.log('[DEBUG] SUPABASE_URL:', process.env.SUPABASE_URL);
console.log('[DEBUG] SUPABASE_ANON_KEY:', process.env.SUPABASE_ANON_KEY);
console.log('[DEBUG] Todas las variables cargadas:', process.env);