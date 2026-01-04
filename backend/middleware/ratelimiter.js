import rateLimit from 'express-rate-limit';

export const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1h
  max: 3,
  message: { error: 'Trop de requêtes. Réessayez dans 1h.' }
});