import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { groupIconVitePlugin } from 'vitepress-plugin-group-icons'

export default defineConfig({
  plugins: [tailwindcss(), groupIconVitePlugin()],
  server: {
    allowedHosts: ['lira-ds.test', 'lira.vegacheckout.com.br'],
  },
  optimizeDeps: {
      include: [
        '@shikijs/vitepress-twoslash/client',
      ],
    },
})