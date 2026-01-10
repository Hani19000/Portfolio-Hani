import rateLimit from "express-rate-limit";
import logger from "../utils/logger.js";

/* Restriction des requêtes pour prévenir le spam (5 msg / 15 min) */
export const contactLimiter = rateLimit({
     windowMs: 60 * 60 * 1000,
    max: 2,
    handler: (req, res, _next, options) => {
        logger.warn(`Tentative de spam détectée depuis l'IP : ${req.ip}`); 
        res.status(options.statusCode).json(options.message);
    }, 
    standardHeaders: true,
    legacyHeaders: false,
    message: { error: "Trop de messages. Réessayez dans 15 minutes." },
});
