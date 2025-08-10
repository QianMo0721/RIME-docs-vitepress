import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'RIME · 雾凇服务器文档',
  description: 'RIME · 雾凇 Minecraft 服务器官方文档站点',
  
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],

  themeConfig: {
    logo: '/logo.png',
    
    nav: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/getting-started' },
      { text: '入服教程', link: '/tutorial' },
      { text: '常见问题', link: '/faq' },
      { text: '服务器规则', link: '/rules' }
    ],

    sidebar: [
      {
        text: '开始使用',
        items: [
          { text: '快速开始', link: '/getting-started' },
          { text: '入服教程', link: '/tutorial' }
        ]
      },
      {
        text: '帮助中心',
        items: [
          { text: '常见问题', link: '/faq' },
          { text: '服务器规则', link: '/rules' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/QianMoo0121/RIME-docs-vitepress' }
    ],

    footer: {
      message: '基于 MIT 许可证开源',
      copyright: 'Copyright © 2025 RIME · 雾凇'
    },

    search: {
      provider: 'local'
    }
  },

  base: '/',
  cleanUrls: true,
  
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    }
  }
})