// bitacora_ingesta.cjs

const fs = require('fs');
const path = require('path');

// Configuración
const origen = 'supabase_sync.cjs';
const descripcion = 'Ingesta de campañas desde Supabase sincronizadas localmente.';
const carpeta = path.join(__dirname, 'zdu-campanas');
const checkpointFile = path.join(__dirname, 'bitacoras', 'checkpoints.log');

// Verifica existencia de carpeta
if (!fs.existsSync(carpeta)) {
  console.error('Carpeta no encontrada:', carpeta);
  process.exit(1);
}

// Contar archivos .json
const archivos = fs.readdirSync(carpeta).filter(f => f.endsWith('.json'));
const total = archivos.length;

// Obtener fecha actual
const now = new Date();
const timestamp = now.toISOString().split('T')[0].replace(/-/g, '');
const fechaActual = now.toISOString().split('T')[0];

// Verificar si ya existe una entrada para hoy
if (fs.existsSync(checkpointFile)) {
  const contenido = fs.readFileSync(checkpointFile, 'utf8');
  if (contenido.includes(`[ZDU-CHK-INGESTA-${timestamp}]`)) {
    console.log('Ya existe una entrada de ingesta para esta fecha. No se ha duplicado.');
    process.exit(0);
  }
}

// Crear entrada
const entrada = `[ZDU-CHK-INGESTA-${timestamp}]
tipo: ingesta_narrativa
descripcion: ${descripcion}
archivos_nuevos: ${total}
origen: ${origen}
fecha: ${fechaActual}
estado: registrado
`;

// Guardar en checkpoints.log
fs.appendFileSync(checkpointFile, entrada);

console.log('Bitácora de ingesta registrada con éxito.');
