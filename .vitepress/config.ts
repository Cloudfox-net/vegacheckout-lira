import { defineConfig } from 'vitepress'
import { transformerTwoslash } from '@shikijs/vitepress-twoslash'
import { groupIconMdPlugin } from 'vitepress-plugin-group-icons'

// const ogDescription = 'Vega Checkout - Lira | Design System'
// const ogImage = 'https://lira-ds.test/og-image.jpg'
// const ogTitle = 'Lira | Design System'
// const ogUrl = 'https://lira-ds.test'

export default defineConfig({
  title: 'Lira | Design System',
  description: 'Uma forma simples para documentar a forma como componentes devem ser criados no frontend!',
  themeConfig: {
    logo: '/logo.png',
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Equipe', link: '/team' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Cloudfox-net' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/company/vegacheckout' },
      { icon: 'instagram', link: 'https://www.instagram.com/vegacheckout' }
    ],
    footer: {
      message: 'Feito com 💛 pela equipe da Vega Checkout',
      copyright: 'Copyright © 2022-present Vega Tecnologia em Pagamentos',
    },
  },
  sitemap: {
    hostname: 'https://lira-ds.ribeiroevandro.com.br',
  },
  markdown: {
    codeTransformers: [transformerTwoslash()],
    config(md) {
      md.use(groupIconMdPlugin)
    },
  },
});