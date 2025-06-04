import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],
  server: {
    allowedHosts: ['lira-ds.test', 'lira-ds.ribeiroevandro.com.br'],
  },
})