// utils/logger.js (pour remplacer console.log)
import winston from 'winston';

export const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [new winston.transports.Console()]
});

// Utilise logger.info() au lieu de console.log()