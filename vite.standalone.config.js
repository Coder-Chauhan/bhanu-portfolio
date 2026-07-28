// Builds a single self-contained index.html that runs by double-clicking (file://).
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { readFileSync, writeFileSync, rmSync, existsSync, copyFileSync } from 'node:fs'
import { resolve } from 'node:path'

const OUT = 'standalone'

function inlineEverything() {
  return {
    name: 'inline-everything',
    closeBundle() {
      const dir = resolve(OUT)
      let html = readFileSync(resolve(dir, 'index.html'), 'utf8')
      html = html.replace(
        /<script type="module"[^>]*src="([^"]+)"[^>]*><\/script>/,
        (_m, src) => `<script>\n${readFileSync(resolve(dir, src.replace(/^\.?\//, '')), 'utf8')}\n</script>`
      )
      html = html.replace(
        /<link rel="stylesheet"[^>]*href="([^"]+)"[^>]*>/,
        (_m, href) => `<style>\n${readFileSync(resolve(dir, href.replace(/^\.?\//, '')), 'utf8')}\n</style>`
      )
      writeFileSync(resolve(dir, 'index.html'), html)
      if (existsSync(resolve(dir, 'assets'))) rmSync(resolve(dir, 'assets'), { recursive: true, force: true })
      copyFileSync(resolve('public/resume.pdf'), resolve(dir, 'resume.pdf'))
    },
  }
}

export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss(), inlineEverything()],
  build: {
    outDir: OUT,
    emptyOutDir: true,
    modulePreload: { polyfill: false },
    rollupOptions: {
      output: { format: 'iife', inlineDynamicImports: true, entryFileNames: 'assets/app.js' },
    },
  },
})
