import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const projectRoot = path.dirname(fileURLToPath(import.meta.url))
const pagesBase = '/onedu/'

// Projeto Vite na raiz: index.html + public/ aqui; código em ./src
export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? pagesBase : '/',
  root: projectRoot,
  publicDir: path.resolve(projectRoot, 'public'),
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(projectRoot, 'src'),
    },
  },
  build: {
    outDir: path.resolve(projectRoot, 'dist'),
    emptyOutDir: true,
  },
  server: {
    port: 5173,
    strictPort: false,
  },
})
