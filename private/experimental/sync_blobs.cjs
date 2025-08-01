require('dotenv').config();
const fs = require('fs');
const { createClient } = require('@supabase/supabase-js');
const { v4: uuidv4 } = require('uuid');

// Crear cliente Supabase desde .env
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// Leer blobs desde el archivo JSON
const blobs = JSON.parse(fs.readFileSync('./blobs_zdu-campanas.json', 'utf-8'));

// Función principal
(async () => {
  for (const blob of blobs) {
    const nombreArchivo = blob.name;
    const tamano = blob.properties.contentLength || 0;
    const fechaSubida = blob.properties.lastModified;
    const contenedor = blob.container;
    const ruta = `/${contenedor}/${nombreArchivo}`;
    const extension = nombreArchivo.split('.').pop();
    const correlacionSupabase = uuidv4();
    const fuente = 'campaña-sync-001';

    // Verificar si ya existe por ruta
    const { data: existente, error: errorBusqueda } = await supabase
      .from('assets_blob_index')
      .select('id')
      .eq('ruta', ruta)
      .maybeSingle();

    if (errorBusqueda) {
      console.error(`Error al buscar duplicado: ${ruta}`, errorBusqueda.message);
      continue;
    }

    if (existente) {
      console.log(`Ya existe, omitido: ${ruta}`);
      continue;
    }

    // Insertar nuevo registro
    const { error } = await supabase
      .from('assets_blob_index')
      .insert({
        nombre_blob: blob.name,
        nombre_archivo: nombreArchivo,
        ruta: ruta,
        contenedor: contenedor,
        extension: extension,
        tamano: tamano,
        fecha_subida: fechaSubida,
        actualizado: new Date().toISOString(),
        fuente: fuente,
        correlacion_supabase: correlacionSupabase
      });

    if (error) {
      console.error(`Error al insertar: ${ruta}`, error.message);
    } else {
      console.log(`Insertado: ${ruta}`);
    }
  }

  console.log('Sincronización completada.');
})();
