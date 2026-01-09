import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';
import express, { Application } from 'express';

const origins = ['https://portfolio-hani-nine.vercel.app', "https://portfolio-hani-csznouery-hanis-projects-d75033fd.vercel.app", 'http://localhost:5173', /\.vercel\.app$/];

/* Middlewares de sécurité et optimisation réseau */
export const securityMiddleware = (app: Application): void => {
  app.use(helmet());
  app.use(compression());
  
  app.use(cors({
    origin: (origin, cb) => 
      !origin || origins.some(o => o instanceof RegExp ? o.test(origin) : o === origin)
        ? cb(null, true) 
        : cb(new Error('Non autorisé par CORS')),
    methods: ['GET', 'POST'],
    credentials: true // utile pour plus tard pour une eventuelle page admin et connexion
  }));

  app.use(express.json({ limit: '10kb' }));
};