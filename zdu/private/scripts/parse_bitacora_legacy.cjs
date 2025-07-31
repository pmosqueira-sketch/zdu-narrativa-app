const fs = require("fs");
const path = require("path");

const origen = path.resolve(__dirname, "../tmp/bitacora-simbolica-orig.json");
const destino = path.resolve(__dirname, "../bitacoras/legacy_import/universo-zdu-reformateado.json");

try {
  const data = fs.readFileSync(origen, "utf-8");
  const json = JSON.parse(data);

  if (!Array.isArray(json.entradas)) {
    console.error("Formato inesperado. Se esperaba un arreglo en 'entradas'.");
    process.exit(1);
  }

  const reformateado = json.entradas.map((entrada, index) => ({
    id: index + 1,
    modulo: entrada.nombre || "sin_nombre",
    version: entrada.version || "desconocida",
    tipo: entrada.tipo || "indefinido",
    activo: entrada.estado === "activo"
  }));

  fs.writeFileSync(destino, JSON.stringify(reformateado, null, 2), "utf-8");
  console.log("Archivo reformateado guardado en:", destino);

} catch (err) {
  console.error("Error procesando el archivo:", err.message);
  process.exit(1);
}
