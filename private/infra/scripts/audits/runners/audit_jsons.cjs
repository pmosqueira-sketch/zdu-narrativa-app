// audit_jsons.cjs
// Runner para escanear y validar integridad básica de archivos JSON

const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../../../../.env') });

const jsonDir = path.resolve(__dirname, '../data');

// Verifica existencia del directorio
if (!fs.existsSync(jsonDir)) {
  console.error('[ERROR] Carpeta /data no encontrada:', jsonDir);
  process.exit(1);
}

console.log('[INFO] Escaneando archivos JSON en:', jsonDir);

// Iterar sobre todos los archivos en /data
fs.readdir(jsonDir, (err, files) => {
  if (err) {
    console.error('[ERROR] No se pudo leer el directorio:', err);
    process.exit(1);
  }

  const jsonFiles = files.filter(file => file.endsWith('.json'));

  if (jsonFiles.length === 0) {
    console.warn('[WARNING] No se encontraron archivos JSON.');
    return;
  }

  jsonFiles.forEach(file => {
    const fullPath = path.join(jsonDir, file);
    try {
      const raw = fs.readFileSync(fullPath, 'utf8');
      const parsed = JSON.parse(raw);
      console.log(`[OK] ${file} → ${Array.isArray(parsed) ? `${parsed.length} entradas` : 'Cargado correctamente'}`);
    } catch (e) {
      console.error(`[FAIL] ${file} → Error al parsear JSON:`, e.message);
    }
  });
});