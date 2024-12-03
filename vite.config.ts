import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react(),
    svgr({
      include: "**/*.svg?react",
      exclude: "",
    })],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
