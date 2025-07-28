require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

console.log("Probando conexión a Supabase...");
console.log("URL:", process.env.SUPABASE_URL);
console.log("KEY:", process.env.SUPABASE_KEY);

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

async function testConnection() {
  try {
    const { data, error } = await supabase.from('test').select('*').limit(1);

    if (error) {
      console.error("Error al hacer query:", error.message);
    } else {
      console.log("Conexión exitosa. Datos:", data);
    }
  } catch (err) {
    console.error("Error al conectar con Supabase:\n", err.message || err);
  }
}

testConnection();