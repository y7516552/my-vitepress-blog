import { defineConfig } from 'vitepress'
import path from 'node:path';
import { getSidebar } from './hooks/useGetSidebar';
// https://vitepress.dev/reference/site-config
export default defineConfig({
  logo:{
    light:'./logo.svg',
    dark:'./logo.svg',
    alt:"Steven's blog"
  } ,
  title: "Steven's blog",
  description: "Steven's life blog",
  base:'/my-vitepress-blog/',
  rewrites: {
    'pages/(.*)': '(.*)'
  },
  head: [
    ['link', { rel: 'icon', href: './mika.ico' }],
    [ 'viewport',{content:'width=device-width',initialScale:'1.0'}],
  ],
  lang: 'zh',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Code', link: '/article/code' },
      { text: 'Life', link: '/article/life' },
      // { text: 'Fishing', link: '/article/fishing' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: {
      '/':[
        {
          text: 'Home',
          items: [
            { text: 'Code', link: '/article/code' },
            { text: 'Life', link: '/article/life' }
          ]
        }
      ],
      //
      '/article/code/':[
        {
          text: 'Code',
          items: [
            {
              text: 'Javascript',
              items:await getSidebar('/article/code/javascript')
            },
            {
              text: 'Css',
              items:await getSidebar('/article/code/css')
            },
            {
              text: 'Vue',
              items:await getSidebar('/article/code/vue')
            },
          ]
        }
      ],
      //
      '/article/life/':[
        {
          text: 'Life',
          items: [
            { text: 'Index', link: '/life/' },
          ]
        }
      ],
      //
      '/article/fishing/':[
        {
          text: 'Fishing',
          items: [
            { text: 'Index', link: '/fishing/' },
          ]
        }
      ],
    },

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
  },
  appearance: 'dark',
  lastUpdated: true,
  vite: {
    resolve: {
        alias: { // 設定別名
            '@': path.resolve(__dirname, '../'), // docs 當根目錄
            '@vitepress': path.resolve(__dirname), // .vitepress 目錄
            '@components': path.resolve(__dirname, '../', 'components'),
            '@data': path.resolve(__dirname, '../', 'data'),
            '@hooks': path.resolve(__dirname, '../', 'hooks'),
            '@pages': path.resolve(__dirname, '../', 'pages')
        }
    },
  }
})
