import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server Running on port ${port}`));

app.use(cors());
app.use(express.json());

// Connexion à MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("Connecté à MongoDB"))
  .catch(err => console.error("Erreur MongoDB:", err));

// Schéma
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  date: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);

// Configuration Nodemailer
const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ROUTE CORRIGÉE : ajout de "async" pour pouvoir utiliser "await"
app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // 1. Sauvegarde en base de données
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // 2. Préparation de l'email
    const mail = {
      from: name,
      to: process.env.EMAIL_USER,
      subject: `Nouveau message de ${name}`,
      html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Message: ${message}</p>`,
    };

    // 3. Envoi de l'email
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        return res.status(500).json({ error: "Email non envoyé", details: error });
      }
      res.json({ code: 200, status: "Message sauvegardé et envoyé" });
    });

  } catch (error) {
    // Gestion des erreurs de la base de données
    res.status(500).json({ error: "Erreur serveur", details: error });
  }
});

app.listen(port, () => console.log(`Serveur lancé sur le port ${port}`));