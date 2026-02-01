import rateLimit from "express-rate-limit";
import logger from "../utils/logger.js";

/* Restriction des requêtes pour prévenir le spam (2 msg / 1 h) */
export const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 2,
  // Cette fonction garantit que l'on cible l'IP réelle du user
  keyGenerator: (req) => {
    return (req.ip ||
      req.headers["x-forwarded-for"] ||
      req.socket.remoteAddress ||
      "unknown") as string;
  },
  handler: (req, res, _next, options) => {
    logger.warn(`Tentative de spam détectée depuis l'IP : ${req.ip}`);
    res.status(options.statusCode).json(options.message);
  },
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Trop de messages. Réessayez dans 1 heure." },
});

// keyegnerator = identifie QUI est l'utilisateur
// handler = définit QUOI faire quand il dépasse la limite
