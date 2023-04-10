import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/earth-sun-system/',
  plugins: [react()],
  server: {
    open: true,
  },
});
