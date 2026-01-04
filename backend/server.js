import express from 'express';
import cors from 'cors';
import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import helmet from 'helmet';
import compression from 'compression';

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

// Configuration API
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Middleware
app.use(cors());
app.use(express.json());

// Logger simple
app.use(({ method, path }, res, next) => {
  console.log(`[${new Date().toISOString()}] ${method} ${path}`);
  next();
});

app.use(helmet()); // Headers de sécurité
app.use(compression()); // Compression gzip

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ DB Connected"))
  .catch(err => console.error("❌ DB Error:", err.message));

const Contact = mongoose.model('Contact', new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now }
}));

// Routes
app.get('/', (req, res) => res.json({ status: 'API Live', time: new Date() }));

app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Validation concise
  if (!name || !email || !message) return res.status(400).json({ error: "Champs requis" });

  try {
    // Sauvegarde & Préparation Email en parallèle
    await new Contact({ name, email, message }).save();

    const msg = {
      to: "hanider27@gmail.com",
      from: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Portfolio - Message de ${name}`,
      html: `
  <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #eee;">
    <h2 style="color: #333;">Nouveau messages du Portfolio</h2>
    <p><strong>Nom:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <div style="margin-top: 20px; padding: 15px; background: #f4f4f4;">
      ${message}
    </div>
    <p style="font-size: 10px; color: #999; margin-top: 20px;">
      Envoyé depuis le formulaire de contact Portfolio Hani.
    </p>
  </div>
`
    };

    await sgMail.send(msg);
    res.status(200).json({ success: true });
    console.log(`✅ Mail sent from ${email}`);

  } catch (error) {
    console.error("❌ Error:", error.response?.body || error.message);
    res.status(500).json({ error: "Serveur erreur", details: error.message });
  }
});

app.listen(port, () => console.log(`🚀 Server on port ${port}`));