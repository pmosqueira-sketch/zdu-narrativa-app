const fs = require('fs');
const readline = require('readline');
const path = require('path');

// Ruta correcta al archivo JSON con índice de tablas
const indexPath = path.resolve(__dirname, '../audits/modules/supabase_table_index.json');

if (!fs.existsSync(indexPath)) {
  console.error('ERROR: No se encontró el archivo supabase_table_index.json');
  process.exit(1);
}

const raw = JSON.parse(fs.readFileSync(indexPath, 'utf-8'));
const tables = raw.tables || [];

function scanProjectForTables(tableName, baseDir = path.resolve(__dirname, '../../../..')) {
  const matches = [];

  function recursiveSearch(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        if (entry.name === 'node_modules' || entry.name.startsWith('.git')) continue;
        recursiveSearch(fullPath);
      } else if (entry.isFile() && (entry.name.endsWith('.js') || entry.name.endsWith('.cjs') || entry.name.endsWith('.json'))) {
        const content = fs.readFileSync(fullPath, 'utf8');
        if (content.includes(tableName)) {
          matches.push(fullPath);
        }
      }
    }
  }

  recursiveSearch(baseDir);
  return matches;
}

async function showMenu() {
  console.log('\nListado de tablas Supabase\n');

  tables.forEach((table, i) => {
    console.log(`[${i + 1}] ${table}`);
  });

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('\nSelecciona una tabla por número para inspeccionar su uso local: ', (answer) => {
    const index = parseInt(answer) - 1;
    if (index < 0 || index >= tables.length) {
      console.log('Selección inválida.');
      rl.close();
      return;
    }

    const selectedTable = tables[index];
    console.log(`\nBuscando referencias locales a: "${selectedTable}"...\n`);

    const results = scanProjectForTables(selectedTable);

    if (results.length === 0) {
      console.log('No se encontraron coincidencias en el proyecto.');
    } else {
      console.log(`${results.length} coincidencia(s):`);
      results.forEach(file => console.log(`- ${file}`));
    }

    rl.close();
  });
}

showMenu();