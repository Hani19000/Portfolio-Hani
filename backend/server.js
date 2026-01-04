import express from 'express';
import { connectDB } from './config/database.js';
import { securityMiddleware } from './config/security.js';
import contactRoutes from './routes/contact.js';
import { errorHandler } from './middleware/validation.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Configuration Render
app.set('trust proxy', 1);

// Middleware de sécurité (CORS, Helmet, JSON Parser)
securityMiddleware(app);

// Routes
app.get('/', (req, res) => res.json({ status: 'OK', version: '1.0' }));
app.use('/contact', contactRoutes);
app.use(errorHandler);

// Fonction de démarrage
const startServer = async () => {
  try {
    await connectDB(); // On attend la DB
    app.listen(PORT, () => console.log(`🚀 Server on :${PORT}`));
  } catch (err) {
    console.error('❌ Failed to start server:', err);
  }
};

startServer();