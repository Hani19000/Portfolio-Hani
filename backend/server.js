import express from 'express';
import { connectDB } from './config/database.js';
import { securityMiddleware } from './config/security.js';
import contactRoutes from './routes/contact.js';
import { errorHandler } from './middleware/validation.js';

const app = express();
const PORT = process.env.PORT || 5000;
app.set('trust proxy', 1);
// Setup
await connectDB();
securityMiddleware(app);

// Routes
app.get('/', (req, res) => res.json({ status: 'OK', version: '1.0' }));
app.use('/contact', contactRoutes);
app.use(errorHandler);

// Start
app.listen(PORT, () => console.log(`🚀 Server on :${PORT}`));