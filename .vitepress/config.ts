import { defineConfig } from 'vitepress'
import { transformerTwoslash } from '@shikijs/vitepress-twoslash'
import { groupIconMdPlugin } from 'vitepress-plugin-group-icons'

// const ogDescription = 'Vega Checkout - Lira | Design System'
// const ogImage = 'https://lira-ds.test/og-image.jpg'
// const ogTitle = 'Lira | Design System'
// const ogUrl = 'https://lira-ds.test'

export default defineConfig({
  title: 'Lira Design System',
  description: 'Uma forma simples para documentar a forma como componentes devem ser criados no frontend!',
  themeConfig: {
    logo: '/logo.png',
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: 'Pesquisar',
                buttonAriaLabel: 'Pesquisar',
              },
              modal: {
                noResultsText: 'Nenhum resultado encontrado',
                resetButtonTitle: 'Limpar pesquisa',
                footer: {
                  selectText: 'Selecionar',
                  navigateText: 'Navegar',
                },
              },
            },
          },
        },
        
      }
    },
    nav: [
      { text: 'Equipe', link: '/team' },
      { 
        text: 'Componentes', 
        link: '/components/status', 
        activeMatch: '/components/' 
      },
    ],
    sidebar: [
      { 
        text: 'Componentes',
        items: [
          { text: 'Status dos componentes', link: '/components/status' },
          { 
            text: 'Form',
            base: '/components/form-',
            items: [
              { text: 'Checkbox', link: 'checkbox' },
              { text: 'Color', link: 'color' },
              { text: 'Currency', link: 'currency' },
            ] 
          }
        ] 
      },
      { 
        text: 'Fundações',
        items: [
          { text: 'Cores', link: '/foundations/colors' }
        ] 
      },
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
    hostname: 'https://lira.vegacheckout.com.br',
  },
  head: [
    [
      'link',
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ],
    ['meta', { name: 'theme-color', content: '#FFB727' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Lira Design System' }],
    ['meta', { property: 'og:title', content: 'Vega Checkout - Lira Design System' }],
    ['meta', { property: 'og:description', content: 'Uma forma simples para documentar a forma como componentes devem ser criados no frontend!' }],
    ['meta', { property: 'og:url', content: 'https://lira.vegacheckout.com.br' }],
    [
      'meta',
      {
        property: 'og:image',
        content: 'https://lira.vegacheckout.com.br/og-image.png'
      }
    ],
    ['meta', { property: 'og:image:width', content: '1280' }],
    ['meta', { property: 'og:image:height', content: '625' }],
    ['meta', { property: 'og:image:type', content: 'image/png' }],
  ],
  markdown: {
    codeTransformers: [transformerTwoslash()],
    config(md) {
      md.use(groupIconMdPlugin)
    },
  },
});