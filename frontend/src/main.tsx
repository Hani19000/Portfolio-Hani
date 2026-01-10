import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://99046f49da55b7eaf56f5e991c6b9fe2@o4510681965199360.ingest.de.sentry.io/4510681995411536",
  integrations: [Sentry.browserTracingIntegration()],
  tracesSampleRate: 1.0, // Capture 100% des transactions en dev
  environment: import.meta.env.MODE, // Ajoute "development" ou "production" automatiquement
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

if (import.meta.env.PROD) {
  console.log = () => {};
  console.debug = () => {};
  // On ne redirige vers Sentry que les vraies erreurs
  console.error = (...args: unknown[]) => {
    args.forEach((arg) => {
      if (arg instanceof Error) {
        Sentry.captureException(arg);
      } else {
        Sentry.captureMessage(String(arg));
      }
    });
  };
}
