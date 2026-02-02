import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Maps '@' to 'src' directory
    },
  },
  server: {
    host: true, //for ngrok to connect to  local server
    port: 5173,
    allowedHosts: [
      'protractedly-idioblastic-toni.ngrok-free.dev' // ngrok host link
    ]
  },
  base: "/",
})
