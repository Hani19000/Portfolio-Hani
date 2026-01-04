import express, { Application, Request, Response } from 'express';
import { connectDB } from './config/database';
import { securityMiddleware } from './config/security';
import contactRoutes from './routes/contact';
import { errorHandler } from './middleware/validation';
import { logger } from './utils/logger';

const app: Application = express();
const PORT = process.env.PORT || 5000;

/**
 * CONFIGURATION RENDER
 * 'trust proxy' est essentiel sur Render/Vercel pour que le Rate Limiter
 * puisse récupérer la vraie IP du client et non celle du proxy.
 */
app.set('trust proxy', 1);

/**
 * MIDDLEWARES DE SÉCURITÉ
 * Initialise CORS, Helmet, Compression et le JSON Parser
 */
securityMiddleware(app);

/**
 * ROUTES
 */
// Root route pour le Health Check de Render
app.get('/', (req: Request, res: Response) => {
  res.json({ 
    status: 'OK', 
    version: '1.0.0',
    message: 'Portfolio Backend API is running' 
  });
});

// Montage des routes de contact
app.use('/contact', contactRoutes);

/**
 * GESTION DES ERREURS
 * Toujours placer errorHandler en dernier après les routes
 */
app.use(errorHandler);

/**
 * DÉMARRAGE DU SERVEUR
 */
const startServer = async (): Promise<void> => {
  try {
    // Connexion à MongoDB avant de lancer le serveur
    await connectDB();
    
    app.listen(PORT, () => {
      logger.info(`🚀 Serveur démarré sur le port : ${PORT}`);
    });
  } catch (err) {
    logger.error('❌ Échec du démarrage du serveur:', err instanceof Error ? err.message : err);
    process.exit(1);
  }
};

startServer();