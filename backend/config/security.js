// backend/config/security.js
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';
import express from 'express';

export const securityMiddleware = (app) => {
  app.use(helmet());
  app.use(compression());
  
  // Liste des origines autorisées
  const allowedOrigins = [
    'https://portfolio-hani-nine.vercel.app',
    /\.vercel\.app$/ // Autorise n'importe quel sous-domaine .vercel.app
  ];

  app.use(cors({
    origin: allowedOrigins,
    methods: ['GET', 'POST'],
    credentials: true
  }));

  app.use(express.json({ limit: '10kb' }));
};