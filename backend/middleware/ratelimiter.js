import { rateLimit } from 'express-rate-limit'

export const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 10, // Limite chaque IP à 10 requêtes par fenêtre
	standardHeaders: 'draft-7', 
	legacyHeaders: false, 
    // validate: { xForwardedForHeader: false }, // Optionnel : si l'erreur persiste
})