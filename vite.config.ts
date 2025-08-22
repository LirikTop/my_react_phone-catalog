import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/my_react_phone-catalog/',
  build: {
    outDir: 'docs', // <- білд у docs замість dist
  },
});
