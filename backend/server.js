import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Configuration CORS améliorée
app.use(cors({
  origin: ['http://localhost:5173', 'https://votre-domaine-vercel.app'], // Ajoutez votre URL Vercel
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json());

// Connexion à MongoDB avec gestion d'erreur
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ Connecté à MongoDB"))
  .catch(err => {
    console.error("❌ Erreur MongoDB:", err);
    process.exit(1);
  });

// Schéma
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);

// Configuration Nodemailer avec vérification
const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Vérifier la configuration email au démarrage
contactEmail.verify((error) => {
  if (error) {
    console.error("❌ Erreur configuration email:", error);
  } else {
    console.log("✅ Serveur email prêt");
  }
});

// Route de test
app.get('/', (req, res) => {
  res.json({ message: 'API fonctionne !' });
});

// Route contact améliorée
app.post("/contact", async (req, res) => {
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

    // 2. Préparation de l'email
    const mail = {
      from: process.env.EMAIL_USER, // Utilisez votre email comme expéditeur
      replyTo: email, // L'email du visiteur pour la réponse
      to: process.env.EMAIL_USER,
      subject: `Nouveau message de ${name}`,
      html: `
        <h3>Nouveau message depuis le portfolio</h3>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // 3. Envoi de l'email
    await contactEmail.sendMail(mail);
    console.log("✅ Email envoyé");

    res.json({ 
      code: 200, 
      status: "Message sauvegardé et envoyé avec succès" 
    });

  } catch (error) {
    console.error("❌ Erreur:", error);
    res.status(500).json({ 
      error: "Erreur lors de l'envoi du message",
      details: error.message 
    });
  }
});

app.listen(port, () => {
  console.log(`🚀 Serveur lancé sur le port ${port}`);
});