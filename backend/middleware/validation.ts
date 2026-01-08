import { Request, Response, NextFunction } from 'express';
import v from 'validator';
import { logger } from '../utils/logger.js';

/* Validation et nettoyage des données de contact */
export const validateContact = (req: Request, res: Response, next: NextFunction): void => {
  const { name, email, message, subject } = req.body;

  /* Validation immédiate : Si un champ manque ou est invalide, on stop */
  if (!name || !email || !message) {
    return void res.status(400).json({ error: 'Champs requis manquants' });
  }
  
  if (!v.isEmail(email)) {
    return void res.status(400).json({ error: 'Format email invalide' });
  }
  
  if (!v.isLength(message, { min: 10, max: 1000 })) {
    return void res.status(400).json({ error: 'Le message doit contenir entre 10 et 1000 caractères' });
  }

  /* Sanétisation par réaffectation déstructurée */
  Object.assign(req.body, {
    name: v.escape(name.trim()),
    email: v.normalizeEmail(email) || email,
    subject: subject ? v.escape(subject.trim()) : 'Nouveau message depuis le portfolio',
    message: v.escape(message.trim())
  });

  next();
};

/* Gestionnaire d'erreurs global */
export const errorHandler = (err: any, _req: Request, res: Response, _next: NextFunction): void => {
  const isCors = err.message === 'Non autorisé par CORS';
  
  logger.error(err.stack || err.message);

  res.status(isCors ? 403 : 500).json({ 
    error: isCors ? 'Accès CORS refusé' : 'Erreur interne du serveur' 
  });
};