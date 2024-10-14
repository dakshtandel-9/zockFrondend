import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',           // Bind to all network interfaces to make it accessible externally
    port: 3000,  // Use the environment's port if available, otherwise fallback to 3000
    strictPort: true,          // Prevent Vite from switching ports if the specified one is busy
  },
  preview: {
    host: '0.0.0.0',           // Also bind for preview mode
    port: 3000,
  }
});
