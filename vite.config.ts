import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { groupIconVitePlugin } from 'vitepress-plugin-group-icons'
import VitePluginVitepressDemo from 'vite-plugin-vitepress-demo'

export default defineConfig({
  plugins: [
    tailwindcss(), 
    groupIconVitePlugin(), 
    VitePluginVitepressDemo()
  ],
  server: {
    allowedHosts: ['lira-ds.test', 'lira.vegacheckout.com.br'],
  },

  optimizeDeps: {
      include: [
        '@shikijs/vitepress-twoslash/client',
      ],
    },
})