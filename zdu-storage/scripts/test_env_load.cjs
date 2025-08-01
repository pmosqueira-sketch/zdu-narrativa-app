require('dotenv').config({ path: './zdu/private/.env' });

console.log("SUPABASE_URL:", process.env.SUPABASE_URL);
console.log("SUPABASE_KEY:", process.env.SUPABASE_KEY); // o ANON_KEY
console.log("AZURE_STORAGE_ACCOUNT:", process.env.AZURE_STORAGE_ACCOUNT);
