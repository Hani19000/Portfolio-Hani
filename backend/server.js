import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// ========== CORS OUVERT (pour déboguer) ==========
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  
  // Gérer les requêtes OPTIONS (preflight)
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  next();
});

app.use(cors());
app.use(express.json());

// Log des requêtes
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path} - Origin: ${req.headers.origin}`);
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
app.get('/', (req, res) => {
  res.json({ 
    message: 'API Portfolio fonctionne !',
    timestamp: new Date().toISOString(),
    cors: 'enabled for all origins'
  });
});

app.post('/contact', async (req, res) => {
  console.log('📧 Contact reçu depuis:', req.headers.origin);
  console.log('📦 Données:', req.body);
  
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ 
      error: "Tous les champs sont requis" 
    });
  }

  try {
    // 1. Sauvegarde DB
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    console.log("✅ Sauvegardé en DB");

    // 2. Email
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
        <hr>
        <p><small>Envoyé depuis: ${req.headers.origin || 'inconnu'}</small></p>
      `,
    };

    await contactEmail.sendMail(mail);
    console.log("✅ Email envoyé");

    res.status(200).json({ 
      success: true,
      message: "Message envoyé avec succès"
    });

  } catch (error) {
    console.error("❌ Erreur:", error);
    res.status(500).json({ 
      error: "Erreur lors de l'envoi",
      details: error.message 
    });
  }
});

app.listen(port, () => {
  console.log(`🚀 Serveur sur port ${port}`);
  console.log(`📍 https://portfolio-hani-derrouiche.onrender.com`);
});