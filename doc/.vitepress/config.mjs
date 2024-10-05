import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Steven's blog",
  description: "Steven's life blog",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    lastUpdated: {
      text: 'last update',
      formatOptions: {
        forceLocale: true,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      }
    },
  }
})
