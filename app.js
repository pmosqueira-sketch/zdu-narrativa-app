// app.js — ZDU Narrativa App con Clerk + Supabase

import express from 'express';
import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';
import { clerkMiddleware, requireAuth } from './middleware/middleware.clerk.js';

const app = express();
app.use(express.json());

// Aquí va el middleware de archivos estáticos (correcto)
app.use(express.static('public'));

const port = process.env.PORT || 3000;

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

// Ruta raíz (puede opcionalmente redirigir a index.html)
app.get('/', (req, res) => {
  res.send('Servidor y lógica simbiótica activos');
});

// Ruta pública para obtener campañas
app.get('/api/campanas', async (req, res) => {
  const { data, error } = await supabase.from('campañas').select('*');
  if (error) return res.status(500).send(error.message);
  res.json(data);
});

// Ruta protegida con Clerk (requiere sesión activa)
app.get('/api/seguro', requireAuth, (req, res) => {
  res.send(`Autenticado: ${req.auth.userId}`);
});

// Ruta para validar sesión actual
app.get('/api/whoami', clerkMiddleware, async (req, res) => {
  if (!req.auth || !req.auth.userId) {
    return res.status(401).send('No autenticado');
  }

  const { userId, sessionId } = req.auth;
  res.json({ userId, sessionId });
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor en http://localhost:${port}`);
});
