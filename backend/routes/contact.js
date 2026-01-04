import express from 'express';
import Contact from '../models/Contact.js'; 
import  sendEmail from '../config/email.js';
import  validateContact  from '../middleware/validation.js';
import  contactLimiter  from '../middleware/ratelimiter.js';

const router = express.Router();

router.post('/', contactLimiter, validateContact, async (req, res, next) => {
  try {
    const { name, email, message } = req.body;

    await Promise.all([
      Contact.create({ name, email, message }),
      sendEmail({ name, email, message })
    ]);

    res.json({ success: true });
    console.log(`✅ Mail from ${email}`);
  } catch (err) {
    next(err);
  }
});

export default router;