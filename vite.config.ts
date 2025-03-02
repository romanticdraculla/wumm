import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  base: '/wumm/', // Add this line - it should match your repository name
  build: {
    outDir: 'dist',
    minify: 'terser',
    sourcemap: true,
    assetsInlineLimit: 0, // Don't inline assets for game dev
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});