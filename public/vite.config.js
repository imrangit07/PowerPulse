// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',   // 👈 Main page
        cart: 'cart.html',    // 👈 Second page (like /cart.html)
        // Add other pages here too
      }
    }
  }
})
