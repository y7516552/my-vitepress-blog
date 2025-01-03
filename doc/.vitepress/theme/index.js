// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import GiscusComment from './compoents/GiscusComment.vue'
import expandLayout from './layout/expandLayout.vue'
import defaultLayout from './layout/defaultLayout.vue'
import './style.css'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      // 'doc-after': () => h(GiscusComment)
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
    // app.component('defaultLayout',defaultLayout)
  },
}
