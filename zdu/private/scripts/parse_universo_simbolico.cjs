const fs = require("fs");
const path = require("path");

// Paths de entrada y salida
const inputPath = path.resolve(__dirname, "../tmp/bitacora-simbolica-orig.json");
const outputDir = path.resolve(__dirname, "../bitacoras/legacy_import");
const resumenPath = path.join(outputDir, "universo-zdu-reformateado.json");

// Verifica que exista el directorio destino
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Carga y parsea el JSON fuente
const raw = fs.readFileSync(inputPath, "utf8");
const data = JSON.parse(raw);

// Validación: espera encontrar campos 'modulos' y opcionalmente 'entradas'
if (!Array.isArray(data.modulos)) {
  console.error("Formato inesperado. Se esperaba un arreglo en 'modulos'.");
  process.exit(1);
}

// 1. Exportar resumen reformateado de 'modulos'
const resumen = data.modulos.map((entrada, index) => ({
  id: index + 1,
  modulo: entrada.nombre || "sin_nombre",
  version: entrada.version || "desconocida",
  tipo: entrada.tipo || "indefinido",
  activo: entrada.estado === "activo"
}));

fs.writeFileSync(resumenPath, JSON.stringify(resumen, null, 2), "utf-8");
console.log("Archivo reformateado guardado en:", resumenPath);

// 2. (opcional) Exportar entradas individuales si vienen en el JSON
if (Array.isArray(data.entradas)) {
  data.entradas.forEach((entrada, i) => {
    const slug = entrada.slug || `entrada_${i + 1}`;
    const outputFile = path.join(outputDir, `${slug}.json`);
    fs.writeFileSync(outputFile, JSON.stringify(entrada, null, 2));
    console.log("Entrada guardada:", outputFile);
  });
  console.log("Total de entradas procesadas:", data.entradas.length);
} else {
  console.log("No se encontraron entradas individuales para exportar.");
}
