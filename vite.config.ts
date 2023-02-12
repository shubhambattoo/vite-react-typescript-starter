import react from '@vitejs/plugin-react';
import * as path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      {
        find: '@components',
        replacement: path.resolve(__dirname, 'src/components/'),
      },
      {
        find: '@pages',
        replacement: path.resolve(__dirname, 'src/pages/'),
      },
      {
        find: '@assets',
        replacement: path.resolve(__dirname, 'src/assets/'),
      },
      {
        find: '@images',
        replacement: path.resolve(__dirname, 'src/assets/img/'),
      },
      {
        find: '@libs',
        replacement: path.resolve(__dirname, 'src/libs/'),
      },
      {
        find: '@hooks',
        replacement: path.resolve(__dirname, 'src/hooks/'),
      },
      {
        find: '@utils',
        replacement: path.resolve(__dirname, 'src/utils/'),
      },
      {
        find: '@config',
        replacement: path.resolve(__dirname, 'src/config/'),
      },
      {
        find: '@api',
        replacement: path.resolve(__dirname, 'src/api/'),
      },
    ],
  },
});
