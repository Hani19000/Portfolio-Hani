import rateLimit from "express-rate-limit";

/* Restriction des requêtes pour prévenir le spam (5 msg / 15 min) */
export const contactLimiter = rateLimit({
     windowMs: 15 * 60 * 1000,
    max: 5,
    standardHeaders: true,
    legacyHeaders: false,
    message: { error: "Trop de messages. Réessayez dans 15 minutes." },
});
