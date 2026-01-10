import express, { Application } from 'express';
import sgMail from '@sendgrid/mail';
import * as Sentry from "@sentry/node";

import securityMiddleware from './config/security.js';
import contactRoutes from './routes/contact.js';
import { errorHandler } from './middleware/validation.js';
import logger  from './utils/logger.js';
import './instrument.js';



const app: Application = express();
const PORT = process.env.PORT || 5000;


/* Configuration Proxy (Render/Vercel) */ 
app.set('trust proxy', 1);  // pour le ratelimiter fonctionne

/* Initialisation des middlewares de sécurité et parsing */
securityMiddleware(app);


/* Définition des points d'entrée */
app.get('/', (_, res) => res.json({ status: 'OK', version: '1.0.0' }));
app.use('/contact', contactRoutes);
app.get('/api/ping', async (req, res) => {
  try {
    // 1. Vérification basique (Serveur)
    const healthStatus = {
      server: 'UP',
      timestamp: new Date().toISOString(),
      services: {
        sendgrid: 'UNKNOWN'
      }
    };

    // 2. Vérification rapide de SendGrid. On vérifie si la clé API est configurée
    if (process.env.SENDGRID_API_KEY) {
      healthStatus.services.sendgrid = 'CONFIGURED';
    } else {
      healthStatus.services.sendgrid = 'MISSING_API_KEY';
      logger.error("Health Check: Clé SendGrid manquante");
    }

    res.status(200).json(healthStatus);
  } catch (error) {
    logger.error("Erreur lors du Health Check", error instanceof Error ? error.stack || error.message : String(error));
    res.status(500).json({ status: 'DOWN', error: 'Internal Server Error' });
  }
});

/* Gestionnaire d'erreurs Sentry */
Sentry.setupExpressErrorHandler(app);

/* Gestion centralisée des erreurs */
app.use(errorHandler);

/* Initialisation de la base de données et lancement du serveur */
const startServer = async (): Promise<void> => {
  try {
    app.listen(PORT, () => logger.info(` Serveur actif sur le port : ${PORT}`));
  } catch (err) {
    logger.error('Échec lros du démarrage:', err instanceof Error ? err.stack || err.message : String(err));
    process.exit(1);
  }
};
startServer();