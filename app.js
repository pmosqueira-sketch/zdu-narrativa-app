// app.js - Lógica simbiótica inicial para ZDU Narrativa App
console.log("ZDU Narrativa App iniciada");

// Carga variables de entorno desde archivo .env (solo si estás en entorno de Node.js)
require('dotenv').config();

// Conexión a Supabase
const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// Conexión a Azure Blob Storage (ruta base para assets narrativos)
const BLOB_STORAGE_URL = process.env.BLOB_STORAGE_URL;

// Función de prueba: obtener campañas activas
async function obtenerCampañas() {
  const { data, error } = await supabase
    .from('campañas')
    .select('*');

  if (error) {
    console.error('Error al obtener campañas:', error.message);
  } else {
    console.log('Campañas activas:', data);
  }
}

// Ejecutar función de prueba
obtenerCampañas();