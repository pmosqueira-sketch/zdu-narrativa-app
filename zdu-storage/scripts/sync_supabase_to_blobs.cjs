require("dotenv").config();
const { createClient } = require("@supabase/supabase-js");
const fs = require("fs");
const path = require("path");

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

const outputDir = path.join(__dirname, "zdu-campanas");
const logPath = path.join(__dirname, "logs", "supabase_sync.log");
const omitidosPath = path.join(__dirname, "logs", "omitidos.log");

// Crear carpetas si no existen
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

if (!fs.existsSync(path.dirname(logPath))) {
  fs.mkdirSync(path.dirname(logPath), { recursive: true });
}

let omitidos = [];
let generados = 0;

function log(msg) {
  const timestamp = new Date().toISOString();
  fs.appendFileSync(logPath, `[${timestamp}] ${msg}\n`);
}

async function syncFromSupabase() {
  const { data, error } = await supabase
    .from("assets_blob_index")
    .select("*");

  if (error) {
    console.error("Error al obtener datos desde Supabase:", error.message);
    log(`ERROR: ${error.message}`);
    return;
  }

  for (const row of data) {
    const filename = row.nombre_archivo || `${row.id}.json`;
    const filepath = path.join(outputDir, filename);

    if (fs.existsSync(filepath)) {
      const msg = `OMITIDO: ${filename} ya existe`;
      console.log(msg);
      log(msg);
      omitidos.push(filename);
      continue;
    }

    try {
      fs.writeFileSync(filepath, JSON.stringify(row, null, 2));
      const msg = `GENERADO: ${filename}`;
      console.log(msg);
      log(msg);
      generados++;
    } catch (err) {
      const msg = `ERROR al escribir ${filename}: ${err.message}`;
      console.error(msg);
      log(msg);
    }
  }

  // Guardar lista de omitidos en archivo aparte
  if (omitidos.length > 0) {
    fs.writeFileSync(omitidosPath, omitidos.join("\n"), "utf8");
  }

  const resumen = `Resumen:\n- Archivos generados: ${generados}\n- Archivos omitidos: ${omitidos.length}`;
  console.log(resumen);
  log(resumen);

  const msg = "Sincronización completada: Supabase → Blobs";
  console.log(msg);
  log(msg);
}

syncFromSupabase();
