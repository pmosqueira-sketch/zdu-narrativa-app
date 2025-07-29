require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

async function syncFromSupabase() {
  const { data, error } = await supabase
    .from('assets_blob_index')
    .select('*');

  if (error) {
    console.error('Error al obtener datos desde Supabase:', error.message);
    return;
  }

  const outputDir = path.join(__dirname, 'zdu-campanas');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }

  for (const row of data) {
    const filename = row.nombre_archivo || `${row.id}.json`;
    const filepath = path.join(outputDir, filename);

    if (fs.existsSync(filepath)) {
      console.log(`Ya existe, omitido: ${filename}`);
      continue;
    }

    try {
      fs.writeFileSync(filepath, JSON.stringify(row, null, 2));
      console.log(`Generado: ${filename}`);
    } catch (err) {
      console.error(`Error al generar ${filename}:`, err.message);
    }
  }

  console.log('Sincronización inversa Supabase → Blob finalizada.');
}

syncFromSupabase();
