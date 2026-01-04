import { Request, Response, NextFunction } from 'express';
import validator from 'validator';

/**
 * Middleware de validation pour le formulaire de contact
 */
export const validateContact = (req: Request, res: Response, next: NextFunction) => {
  const { name, email, message } = req.body;

  // 1. Vérification de présence
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Tous les champs sont obligatoires.' });
  }

  // 2. Validation du format Email
  if (!validator.isEmail(email)) {
    return res.status(400).json({ error: 'Veuillez fournir une adresse email valide.' });
  }

  // 3. Validation de la longueur du message
  if (!validator.isLength(message, { min: 10, max: 1000 })) {
    return res.status(400).json({ error: 'Le message doit contenir entre 10 et 1000 caractères.' });
  }

  // 4. Sanétisation (Nettoyage)
  // On réassigne les valeurs nettoyées pour la suite de la requête
  req.body.name = validator.escape(name.trim());
  req.body.email = validator.normalizeEmail(email) || email;
  req.body.message = validator.escape(message.trim());

  next();
};

/**
 * Middleware global de gestion d'erreurs
 */
export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error('❌ Error Details:', err.stack);

  // Si c'est une erreur CORS ou spécifique, on peut l'isoler ici
  if (err.message === 'Not allowed by CORS') {
    return res.status(403).json({ error: 'Accès refusé par la politique CORS' });
  }

  res.status(500).json({ error: 'Une erreur interne est survenue sur le serveur.' });
};