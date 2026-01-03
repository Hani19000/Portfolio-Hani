import express from 'express';
import cors from 'cors';
import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

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
            to: process.env.EMAIL_USER,
            from: process.env.EMAIL_USER,
            replyTo: email,
            subject: `Portfolio - Message de ${name}`,
            html: `<h3>Nouveau message</h3><p><strong>De:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`
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