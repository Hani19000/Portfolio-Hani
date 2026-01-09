import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Génère les fichiers de correspondance pour Sentry
    sourcemap: true, 
  }
})