import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        cart: resolve(__dirname, 'cart.html'),
        wishList: resolve(__dirname, 'wishList.html'),
        paymentSuccess: resolve(__dirname, 'paymentSuccess.html'),
        order: resolve(__dirname, 'order.html')
      }
    }
  }
});