// audit_jsons.cjs

const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const report = [];

function scanDirRecursive(currentDir) {
  const files = fs.readdirSync(currentDir);

  for (const file of files) {
    const fullPath = path.join(currentDir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      scanDirRecursive(fullPath);
    } else if (file.endsWith('.json')) {
      try {
        const content = fs.readFileSync(fullPath, 'utf-8');
        JSON.parse(content);
        report.push({ file: path.relative(rootDir, fullPath), status: 'VALIDO' });
      } catch (err) {
        report.push({ file: path.relative(rootDir, fullPath), status: 'ERROR DE FORMATO JSON' });
      }
    }
  }
}

scanDirRecursive(rootDir);

// Mostrar reporte en consola
console.log('\nREPORTE DE AUDITORIA JSON');
console.log('--------------------------');
report.forEach(entry => {
  console.log(`${entry.status} → ${entry.file}`);
});

// Guardar resultado en logs/auditoria_jsons.log
const logOutput = report.map(e => `${e.status} → ${e.file}`).join('\n');
const logDir = path.join(rootDir, 'logs');
const logPath = path.join(logDir, 'auditoria_jsons.log');

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

fs.writeFileSync(logPath, logOutput);
