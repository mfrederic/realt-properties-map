import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3010,
  },
  preview: {
    port: 3010,
  },
  define: {
    global: 'window',
  },
  css: {
    postcss: './postcss.config.cjs'
  }
})
