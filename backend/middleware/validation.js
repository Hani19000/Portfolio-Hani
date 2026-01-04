import validator from 'validator';

export const validateContact = (req, res, next) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Champs manquants' });
  }

  if (!validator.isEmail(email)) {
    return res.status(400).json({ error: 'Email invalide' });
  }

  if (message.length < 10 || message.length > 1000) {
    return res.status(400).json({ error: 'Message: 10-1000 caractères' });
  }

  // Sanitize
  req.body.name = validator.escape(name.trim());
  req.body.email = validator.normalizeEmail(email);
  req.body.message = validator.escape(message.trim());

  next();
};

export const errorHandler = (err, req, res, next) => {
  console.error('❌', err);
  res.status(500).json({ error: 'Erreur serveur' });
};