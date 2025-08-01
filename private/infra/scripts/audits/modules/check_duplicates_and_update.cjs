const fs = require("fs");
const path = require("path");

// Carpeta raíz del script (desde donde se ejecuta)
const baseDir = __dirname;

// Directorio donde estarán los archivos a auditar (ej. ZIPs de campañas)
const campaignDir = path.resolve(baseDir, "../../../../../zdu-campanas");

// Carpeta para almacenar índice y registros
const bitacoraDir = path.join(baseDir, "bitacoras");
const indexFile = path.join(bitacoraDir, "processed_campaigns.json");

// Asegura existencia de carpeta bitacoras
if (!fs.existsSync(bitacoraDir)) {
  fs.mkdirSync(bitacoraDir, { recursive: true });
}

// Crea índice si no existe
if (!fs.existsSync(indexFile)) {
  fs.writeFileSync(indexFile, JSON.stringify([]));
}

let processed = [];
try {
  processed = JSON.parse(fs.readFileSync(indexFile));
} catch (err) {
  console.error("[ERROR] processed_campaigns.json corrupto. Regenerando...");
  processed = [];
  fs.writeFileSync(indexFile, JSON.stringify([]));
}

// Escanea archivos dentro de zdu-campanas/
if (!fs.existsSync(campaignDir)) {
  console.error(`[ERROR] Carpeta no encontrada: ${campaignDir}`);
  process.exit(1);
}

const files = fs.readdirSync(campaignDir);
const newFiles = files.filter(f => !processed.includes(f));

if (newFiles.length === 0) {
  console.log("Sin nuevos archivos que procesar.");
} else {
  console.log("[INFO] Nuevos archivos detectados:");
  newFiles.forEach(file => console.log(" →", file));

  // Aquí se puede insertar lógica adicional (sincronización, ingestión, etc.)
  const updated = [...processed, ...newFiles];
  fs.writeFileSync(indexFile, JSON.stringify(updated, null, 2));
  console.log(`[ACTUALIZADO] Índice guardado en: ${indexFile}`);
}