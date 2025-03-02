import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

export default defineConfig({
  base: '/', // Should match deployment path
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        ar: resolve(__dirname, 'public/ar/index.html'),
        hi: resolve(__dirname, 'public/hi/index.html')
      }
    }
  }
})
