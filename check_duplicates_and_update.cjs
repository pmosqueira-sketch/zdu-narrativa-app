const fs = require("fs");
const path = require("path");

const folderPath = "./zdu-campanas/";
const indexFile = "./checkpoints/processed_campaigns.json";

// Crear archivo de índice si no existe
if (!fs.existsSync(indexFile)) {
  fs.writeFileSync(indexFile, JSON.stringify([]));
}

const processed = JSON.parse(fs.readFileSync(indexFile));
const files = fs.readdirSync(folderPath);
const newFiles = files.filter(f => !processed.includes(f));

if (newFiles.length === 0) {
  console.log("✅ Sin nuevos archivos que procesar.");
} else {
  console.log("🆕 Nuevos archivos detectados:");
  newFiles.forEach(file => console.log(" →", file));

  // Aquí podrías insertar la lógica de sincronización u otra acción

  const updated = [...processed, ...newFiles];
  fs.writeFileSync(indexFile, JSON.stringify(updated, null, 2));
  console.log("📥 Índice actualizado en processed_campaigns.json");
}
