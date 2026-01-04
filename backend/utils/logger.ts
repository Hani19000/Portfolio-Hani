import winston from 'winston';

/**
 * Configuration du Logger Winston pour TypeScript
 * Permet de centraliser les logs et de les structurer (format JSON)
 */
export const logger = winston.createLogger({
  level: 'info', // Niveau minimum de log (info, warn, error)
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    // Affiche les logs dans la console
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      )
    })
  ]
});

// Note : En production sur Render, Winston enverra ces logs 
// directement dans le dashboard "Logs" du service.