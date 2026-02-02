import { Router } from "express";
import { sendEmail } from "../config/email.js";
import { validateContact } from "../middleware/validation.js";
import { contactLimiter } from "../middleware/ratelimiter.js";

const router = Router();

/* Traitement du formulaire de contact */
// routes/contact.js
router.post("/", contactLimiter, validateContact, async (req, res, next) => {
  try {
    // On délègue la logique au service
    await sendEmail(req.body);

    res.status(201).json({
      success: true,
      message: "Message envoyé avec succès !",
    });
  } catch (err) {
    // Si sendEmail jette une erreur, elle est capturée ici
    next(err);
  }
});

export default router;
