import express, { Application } from 'express';
import { connectDB } from './config/database';
import { securityMiddleware } from './config/security';
import contactRoutes from './routes/contact';
import { errorHandler } from './middleware/validation';
import { logger } from './utils/logger';

const app: Application = express();
const PORT = process.env.PORT || 5000;

// Configuration Proxy (Render/Vercel)
app.set('trust proxy', 1);

// Initialisation des middlewares de sécurité et parsing
securityMiddleware(app);

// Définition des points d'entrée
app.get('/', (_, res) => res.json({ status: 'OK', version: '1.0.0' }));
app.use('/contact', contactRoutes);

// Gestion centralisée des erreurs (doit être après les routes)
app.use(errorHandler);

/**
 * Initialisation de la base de données et lancement du serveur
 */
const startServer = async (): Promise<void> => {
  try {
    await connectDB();
    app.listen(PORT, () => logger.info(`🚀 Serveur actif sur le port : ${PORT}`));
  } catch (err) {
    logger.error('❌ Échec critique au démarrage:', err instanceof Error ? err.message : err);
    process.exit(1);
  }
};

startServer();