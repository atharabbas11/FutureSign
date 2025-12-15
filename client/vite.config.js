import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  server: {
    host: '0.0.0.0',  // This makes the server accessible via any IP on the local network
    port: 3000,        // You can change the port if needed
  },
})