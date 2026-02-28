import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.mp4'], // Ensure Vite processes .mp4 files in the src/assets directory
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          antd: ['antd', '@ant-design/icons'],
          icons: ['react-icons', 'lucide-react'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
});
