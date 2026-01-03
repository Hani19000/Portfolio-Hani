import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// ========== CONFIGURATION CORS CRITIQUE ==========
// Doit être AVANT toutes les routes
app.use(cors({
  origin: [
    'https://portfolio-hani-nine.vercel.app',
    'http://localhost:5173',
    'http://localhost:5174'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

// Middleware pour parser JSON
app.use(express.json());

// Log des requêtes
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// ========== MONGODB ==========
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ MongoDB connecté"))
  .catch(err => console.error("❌ MongoDB erreur:", err));

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);

// ========== NODEMAILER ==========
const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.error("❌ Email config erreur:", error);
  } else {
    console.log("✅ Email prêt");
  }
});

// ========== ROUTES ==========

// Route de test
app.get('/', (req, res) => {
  res.json({ 
    message: 'API Portfolio fonctionne !',
    timestamp: new Date().toISOString(),
    cors: 'enabled'
  });
});

// Route OPTIONS pour le preflight CORS
app.options('/contact', cors());

// Route POST contact
app.post('/contact', async (req, res) => {
  console.log('📧 Contact reçu:', req.body);
  
  const { name, email, message } = req.body;

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({ 
      error: "Tous les champs sont requis" 
    });
  }

  try {
    // 1. Sauvegarde en base de données
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    console.log("✅ Message sauvegardé en DB");

    // 2. Envoi de l'email
    const mail = {
      from: process.env.EMAIL_USER,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: `Portfolio - Message de ${name}`,
      html: `
        <h3>Nouveau message depuis le portfolio</h3>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    await contactEmail.sendMail(mail);
    console.log("✅ Email envoyé");

    res.status(200).json({ 
      code: 200, 
      status: "Message envoyé avec succès",
      success: true
    });

  } catch (error) {
    console.error("❌ Erreur:", error);
    res.status(500).json({ 
      error: "Erreur lors de l'envoi du message",
      details: error.message 
    });
  }
});

// Gestion des routes non trouvées
app.use((req, res) => {
  res.status(404).json({ error: 'Route non trouvée' });
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`🚀 Serveur démarré sur port ${port}`);
  console.log(`📍 URL: https://portfolio-hani-derrouiche.onrender.com`);
});