import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

export default function () {
  return defineConfig({
    plugins: [
      react(),
      tailwindcss(),
      cssInjectedByJsPlugin(),
    ],
    build: {
      cssCodeSplit: false,
      minify: 'esbuild',
    },
  })
}