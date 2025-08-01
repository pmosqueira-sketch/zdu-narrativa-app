const fs = require("fs");
const path = require("path");

// Corrige raíz absoluta del proyecto, 5 niveles arriba
const rootDir = path.resolve(__dirname, "../../../../..");
const logDir = path.join(rootDir, "logs");
const bitacoraDir = path.join(rootDir, "bitacoras");
const logFile = path.join(logDir, "repo_json_audit.log");
const jsonOutput = path.join(logDir, "repo_json_audit_data.json");
const checkpointFile = path.join(bitacoraDir, "checkpoints.log");

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
      const mtime = fs.statSync(fullPath).mtime.toISOString();
      try {
        const content = fs.readFileSync(fullPath, "utf-8");
        JSON.parse(content);
        report.push({
          file: fullPath.replace(rootDir + "/", ""),
          status: "VALIDO",
          ultima_modificacion: mtime,
        });
        validos++;
      } catch (err) {
        report.push({
          file: fullPath.replace(rootDir + "/", ""),
          status: "ERROR DE PARSEO",
          ultima_modificacion: mtime,
        });
        errores++;
      }
    }
  }
}

// Asegura carpetas
if (!fs.existsSync(logDir)) fs.mkdirSync(logDir, { recursive: true });
if (!fs.existsSync(bitacoraDir)) fs.mkdirSync(bitacoraDir, { recursive: true });

// Ejecuta escaneo
scanDir(rootDir);

// Consola
console.log("\nREPORTE DE AUDITORÍA GLOBAL DE JSONs");
console.log("--------------------------------------");
report.forEach((entry) => {
  console.log(`${entry.status} → ${entry.file}`);
});
console.log("\nRESUMEN:");
console.log(`Total JSONs encontrados: ${total}`);
console.log(`Válidos: ${validos}`);
console.log(`Con errores: ${errores}`);

// Guarda archivo .log
const timestamp = new Date().toISOString();
const logOutput = [
  `REPORTE DE AUDITORÍA GLOBAL DE JSONs - ${timestamp}`,
  "--------------------------------------",
  ...report.map((e) => `${e.status} → ${e.file}`),
  "",
  "RESUMEN:",
  `Total JSONs encontrados: ${total}`,
  `Válidos: ${validos}`,
  `Con errores: ${errores}`,
].join("\n");
fs.writeFileSync(logFile, logOutput);

// Guarda archivo JSON estructurado
fs.writeFileSync(jsonOutput, JSON.stringify(report, null, 2));

// Guarda entrada en checkpoint.log
const checkpointEntry = [
  `[ZDU-CHK-AUDIT-JSON-${timestamp.slice(0, 10).replace(/-/g, "")}]`,
  `tipo: auditoria_json`,
  `descripcion: Auditoría global de archivos JSON en el proyecto.`,
  `total_json: ${total}`,
  `validos: ${validos}`,
  `errores: ${errores}`,
  `script: audit_repo_json_integrity.cjs`,
  `fecha: ${timestamp.slice(0, 10)}`,
  `estado: completado`,
  ``,
].join("\n");

fs.appendFileSync(checkpointFile, checkpointEntry);