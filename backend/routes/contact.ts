import { Router, Request, Response, NextFunction } from 'express';
import Contact from '../models/Contact'; 
import { sendEmail } from '../config/email';
import { validateContact } from '../middleware/validation';
import { contactLimiter } from '../middleware/ratelimiter';

const router: Router = Router();

/**
 * @route   POST /contact
 * @desc    Enregistre le message en DB et envoie un email via SendGrid
 * @access  Public
 */
router.post(
  '/', 
  contactLimiter, 
  validateContact, 
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { name, email, message, subject } = req.body;

      // Exécution parallèle pour plus de rapidité
      // TypeScript valide ici les arguments passés à sendEmail et Contact.create
      await Promise.all([
        Contact.create({ name, email, message, subject }),
        sendEmail({ name, email, message })
      ]);

      console.log(`✅ Message reçu de : ${email}`);
      
      res.status(201).json({ 
        success: true, 
        message: 'Votre message a été envoyé avec succès !' 
      });
      
    } catch (err) {
      // Transmet l'erreur au middleware global errorHandler
      next(err);
    }
  }
);

export default router;