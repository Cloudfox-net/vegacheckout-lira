import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Lira",
  description: "Uma forma simples para documentar a forma como componentes devem ser criados no frontend!",
  head: [['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    aside: false,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Components', link: '/components' }
    ],
    sidebar: [
      {
        text: 'Components',
        items: [
          {
            text: 'Feedback',
            items: [
              {
                text: 'Alert',
                link: '/components/alert'
              }
            ]
          },
          {
            text: 'Navegação',
            items: [
              {
                text: 'Link',
                link: '/components/link'
              }
            ]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Cloudfox-net' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/company/vegacheckout' }
    ],
    logo: '/logo.png',
  },
})
