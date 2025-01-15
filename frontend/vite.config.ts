import { defineConfig } from 'vite'
import MillionLint from "@million/lint";
import react from '@vitejs/plugin-react'
import * as sass from 'sass-embedded'

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ['babel-plugin-react-compiler'],
      },
    }),
    MillionLint.vite(),
  ],
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
