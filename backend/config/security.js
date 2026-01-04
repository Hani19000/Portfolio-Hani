import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';
import express from 'express';

export const securityMiddleware = (app) => {
  app.use(helmet());
  app.use(compression());
  app.use(cors({ origin: process.env.FRONTEND_URL || '*' }));
  app.use(express.json({ limit: '10kb' }));
};