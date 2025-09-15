import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// config bagi vite atau kustumasasi 
// vite adalah build tools yg kita gunakan

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),],
})
