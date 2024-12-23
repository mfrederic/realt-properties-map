import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as sass from 'sass-embedded'

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
    preprocessorOptions: {
      scss: {
        implementation: sass,
        sassOptions: {
          style: 'expanded',
          sourceMap: true,
        }
      }
    },
    postcss: './postcss.config.js'
  }
})
