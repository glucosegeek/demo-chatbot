import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://glucosegeek.github.io/chatbot-demo/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
