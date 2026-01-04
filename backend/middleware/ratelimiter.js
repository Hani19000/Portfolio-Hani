import { rateLimit } from 'express-rate-limit';

// Export nommé (nécessite des accolades à l'import)
export const contactLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5,
    message: 'Trop de messages envoyés, réessayez plus tard.'
});