require('dotenv').config({ path: './zdu/private/.env' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

(async () => {
  console.log('Conectando y listando tablas visibles...');
  const { data, error } = await supabase.rpc('list_tables_zdu');

  if (error) {
    console.error('Error al consultar tablas:', error.message);
    return;
  }

  console.log('Tablas disponibles:');
  data.forEach((row) => console.log('•', row.table_name));
})();
