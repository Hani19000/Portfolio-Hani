import { Request, Response, NextFunction } from 'express';
import v from 'validator';
import logger  from '../utils/logger.js';
import EmailParams from '../config/email.js';


/* Validation et nettoyage des données de contact */
export const validateContact = (req: Request, res: Response, next: NextFunction): void => {
  const { name, email, message, subject } = req.body as EmailParams;

  /* Validation immédiate : Si un champ manque ou est invalide, on stop */
  if (!name || !email || !message) {
    res.status(400).json({ error: 'Champs requis manquants' });
    return;
  }
  
  if (!v.isEmail(email)) {
    res.status(400).json({ error: 'Format email invalide' });
    return;
  }
  
  if (!v.isLength(message, { min: 10, max: 1000 })) {
    res.status(400).json({ error: 'Le message doit contenir entre 10 et 1000 caractères' });
    return;
  }

  /* Sanitisation par réaffectation déstructurée */  /* nettoyer et sécuriser les données entrantes */
  Object.assign(req.body, {
    name: v.escape(name.trim()),
    email: v.normalizeEmail(email) || email,
    subject: subject ? v.escape(subject.trim()) : 'Nouveau message depuis le portfolio',
    message: v.escape(message.trim())
  });

  next();
};

interface AppError extends Error {
  status?: number;
  code?: string;
}

/* Gestionnaire d'erreurs global */
export const errorHandler = (err: AppError, _req: Request, res: Response, _next: NextFunction): void => {
  const isCors = err.message === 'Non autorisé par CORS';
  
  logger.error(err.stack || err.message);

  res.status(isCors ? 403 : 500).json({ 
    error: isCors ? 'Accès CORS refusé' : 'Erreur interne du serveur' 
  });
};