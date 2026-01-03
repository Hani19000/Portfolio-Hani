import express from 'express';
import cors from 'cors';
import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// ========== CORS ==========
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  next();
});

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// ========== SENDGRID API ==========
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

console.log("✅ SendGrid API configurée");

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

// ========== ROUTES ==========
app.get('/', (req, res) => {
  res.json({ 
    message: 'API Portfolio fonctionne !',
    timestamp: new Date().toISOString()
  });
});

app.post('/contact', async (req, res) => {
  console.log('📧 Contact reçu:', req.body);
  
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

    // 2. Email via SendGrid API
    const msg = {
      to: process.env.EMAIL_USER, // Votre email
      from: process.env.EMAIL_USER, // Doit être vérifié dans SendGrid
      replyTo: email, // L'email du visiteur
      subject: `Portfolio - Message de ${name}`,
      html: `
        <h3>Nouveau message depuis le portfolio</h3>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    await sgMail.send(msg);
    console.log("✅ Email envoyé via SendGrid API");

    res.status(200).json({ 
      success: true,
      message: "Message envoyé avec succès"
    });

  } catch (error) {
    console.error("❌ Erreur:", error);
    
    // Erreur SendGrid détaillée
    if (error.response) {
      console.error("❌ SendGrid erreur:", error.response.body);
    }
    
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