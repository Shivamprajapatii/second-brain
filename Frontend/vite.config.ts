import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build : {
    outDir : "dist",
  },
  server : {
    port: 5173,
  },
  base: '/', // Ensure relative paths for assets
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  
})
