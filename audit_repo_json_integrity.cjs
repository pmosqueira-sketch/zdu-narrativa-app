const fs = require("fs");
const path = require("path");

const rootDir = path.resolve(__dirname);
const logDir = path.join(rootDir, "logs");
const logFile = path.join(logDir, "repo_json_audit.log");

const report = [];
let total = 0;
let validos = 0;
let errores = 0;

function scanDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      scanDir(fullPath);
    } else if (entry.isFile() && entry.name.endsWith(".json")) {
      total++;
      try {
        const content = fs.readFileSync(fullPath, "utf-8");
        JSON.parse(content);
        report.push({ file: fullPath.replace(rootDir + "/", ""), status: "VALIDO" });
        validos++;
      } catch (err) {
        report.push({ file: fullPath.replace(rootDir + "/", ""), status: "ERROR DE FORMATO JSON" });
        errores++;
      }
    }
  }
}

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true });
}

scanDir(rootDir);

console.log("\nREPORTE DE AUDITORÍA GLOBAL DE JSONs");
console.log("--------------------------------------");
report.forEach(entry => {
  console.log(`${entry.status} → ${entry.file}`);
});

console.log("\nRESUMEN:");
console.log(`Total JSONs encontrados: ${total}`);
console.log(`Válidos: ${validos}`);
console.log(`Con errores: ${errores}`);

const timestamp = new Date().toISOString();
const logOutput = [
  `REPORTE DE AUDITORÍA GLOBAL DE JSONs - ${timestamp}`,
  "--------------------------------------",
  ...report.map(e => `${e.status} → ${e.file}`),
  "",
  "RESUMEN:",
  `Total JSONs encontrados: ${total}`,
  `Válidos: ${validos}`,
  `Con errores: ${errores}`,
].join("\n");

fs.writeFileSync(logFile, logOutput);
