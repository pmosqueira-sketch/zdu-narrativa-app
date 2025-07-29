import { ClerkExpressWithAuth } from '@clerk/clerk-sdk-node';

const clerkMiddleware = ClerkExpressWithAuth();

function requireAuth(req, res, next) {
  if (!req.auth || !req.auth.userId) {
    return res.status(401).send('Acceso denegado: no autenticado');
  }
  next();
}

export { clerkMiddleware, requireAuth };
