import mongoose from 'mongoose';
import { logger } from '../utils/logger.js';

/* Connexion à MongoDB avec gestion d'erreur critique */
export const connectDB = async (): Promise<void> => {
  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) throw new Error('MONGODB_URI manquant');
    
    await mongoose.connect(uri);
    logger.info('connexion a la BD');
  } catch (err) {
    logger.error(`Erreur DB: ${err instanceof Error ? err.message : err}`);
    process.exit(1);
  }
};