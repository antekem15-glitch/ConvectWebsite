import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Natives Inlining des CSS ohne veraltete Abhängigkeiten
function inlineCss() {
  return {
    name: 'inline-css-html',
    enforce: 'post',
    transformIndexHtml(html, { bundle }) {
      if (!bundle) return html
      let inlineStyle = ''
      for (const [fileName, file] of Object.entries(bundle)) {
        if (fileName.endsWith('.css') && file.type === 'asset') {
          inlineStyle += `<style>${file.source}</style>`
          delete bundle[fileName]
        }
      }
      return html
        .replace(/<link[^>]+rel=["']stylesheet["'][^>]*>/g, '')
        .replace('</head>', `${inlineStyle}</head>`)
    },
  }
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    inlineCss(),
  ],
})