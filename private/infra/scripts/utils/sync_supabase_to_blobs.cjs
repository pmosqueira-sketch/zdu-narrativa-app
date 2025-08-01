const fs = require("fs");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../../../.env") });

const { createClient } = require("@supabase/supabase-js");

// Validación de variables de entorno
if (!process.env.SUPABASE_URL || !process.env.SUPABASE_ANON_KEY) {
  console.error("Variables de entorno no definidas. Verifica el archivo .env en /private.");
  process.exit(1);
}

// Cliente Supabase
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

// Definición de rutas internas (infraestructura controlada)
const outputDir = path.join(__dirname, "../data/logs/");
const logPath = path.join(outputDir, "supabase_sync.log");
const omitidosPath = path.join(outputDir, "omitidos.log");

// Asegura existencia del directorio
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

let omitidos = [];
let generados = 0;

// Función para escribir log
function log(msg) {
  const timestamp = new Date().toISOString();
  fs.appendFileSync(logPath, `[${timestamp}] ${msg}\n`);
}

// Sincronización desde tabla `assets_blob_index`
async function syncFromSupabase() {
  const { data, error } = await supabase.from("assets_blob_index").select("*");

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

  // Registro de omitidos
  if (omitidos.length > 0) {
    fs.writeFileSync(omitidosPath, omitidos.join("\n"), "utf8");
  }

  const resumen = `Resumen:\n- Archivos generados: ${generados}\n- Archivos omitidos: ${omitidos.length}`;
  console.log(resumen);
  log(resumen);

  const finalMsg = "Sincronización completada: Supabase → Carpeta local controlada";
  console.log(finalMsg);
  log(finalMsg);
}

syncFromSupabase();