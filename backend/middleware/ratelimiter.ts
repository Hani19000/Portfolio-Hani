import rateLimit from 'express-rate-limit';

/**
 * Limite le nombre de requêtes pour éviter le spam sur le formulaire de contact.
 * 5 messages maximum par fenêtre de 15 minutes par IP.
 */
export const contactLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, 
    standardHeaders: true, // Retourne les infos de limite dans les headers `RateLimit-*`
    legacyHeaders: false, // Désactive les headers `X-RateLimit-*`
    message: {
        error: 'Trop de messages envoyés, réessayez dans 15 minutes.'
    }
});