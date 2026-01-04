import { Router } from 'express';
import Contact from '../models/Contact.js'; 
import { sendEmail } from '../config/email.js';
import { validateContact } from '../middleware/validation.js';
import { contactLimiter } from '../middleware/ratelimiter.js';

const router = Router();

/**
 * Traitement du formulaire de contact
 */
router.post('/', contactLimiter, validateContact, async (req, res, next) => {
  try {
    const { name, email, message, subject } = req.body;

    // Sauvegarde DB et Envoi Email en parallèle
    await Promise.all([
      Contact.create({ name, email, message, subject }),
      sendEmail({ name, email, message, subject })
    ]);

    res.status(201).json({ success: true, message: 'Message envoyé !' });
  } catch (err) {
    next(err);
  }
});

export default router;