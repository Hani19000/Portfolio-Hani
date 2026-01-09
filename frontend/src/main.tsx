import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://747b042321d19a0b8583aff54d66cbf2@o4510681965199360.ingest.de.sentry.io/4510681966444624",
  integrations: [Sentry.browserTracingIntegration()],
  tracesSampleRate: 1.0, // Capture 100% des transactions en dev
  environment: import.meta.env.MODE, // Ajoute "development" ou "production" automatiquement
});
Sentry.captureMessage("Test de connexion Sentry réussi !");

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

if (import.meta.env.PROD) {
  console.log = () => {};
  console.debug = () => {};
  // On ne redirige vers Sentry que les vraies erreurs
  console.error = (err) => Sentry.captureException(err);
}