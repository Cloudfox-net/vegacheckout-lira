
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import  {AntdTheme} from 'vite-plugin-vitepress-demo/theme'
import TwoslashFloatingVue from '@shikijs/vitepress-twoslash/client'
import '@shikijs/vitepress-twoslash/style.css'
import './styles/icons.css'
import './styles/vars.css'
import 'virtual:group-icons.css'

import XlButton from './components/button/Button.vue'
import Contributors from './components/Contributors.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(TwoslashFloatingVue)
    app.component('Demo', AntdTheme)
    app.component('XlButton', XlButton)
    app.component('Contributors', Contributors)
  },
} satisfies Theme