import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';
import express, { Application } from 'express';

export const securityMiddleware = (app: Application): void => {
  app.use(helmet());
  app.use(compression());
  
  const allowedOrigins = [
    'https://portfolio-hani-nine.vercel.app',
    'http://localhost:5173'
  ];

  app.use(cors({
    origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
      if (!origin || allowedOrigins.includes(origin) || /\.vercel\.app$/.test(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['GET', 'POST'],
    credentials: true
  }));

  app.use(express.json({ limit: '10kb' }));
};