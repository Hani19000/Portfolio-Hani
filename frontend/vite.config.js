import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: 'dist/stats.html', // Garde ça pour analyser ta taille de bundle
      gzipSize: true,
      brotliSize: true
    })
  ],
  build: {
    assetsDir: 'static', // Nom standard pour les fichiers immuables
    sourcemap: true, // Crucial pour tes rapports Sentry
    rollupOptions: {
      output: {
        // 🎯 Stratégie 1: Séparer les vendors pour le cache CDN
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'icons': ['react-icons'],
          'swiper': ['swiper'],
          'monitoring': ['@sentry/react']
        },

        // 🎯 Stratégie 2: Organisation propre des fichiers
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        
        // UNIQUE FONCTION pour les assets (évite le conflit précédent)
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];

          if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp/i.test(ext)) {
            return `images/[name]-[hash][extname]`;
          }
          if (/woff|woff2|eot|ttf|otf/i.test(ext)) {
            return `fonts/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        }
      }
    },
    chunkSizeWarningLimit: 600, 
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Nettoie ta console en prod
        drop_debugger: true
      }
    }
  }
})