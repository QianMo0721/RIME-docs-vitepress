import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "RIME · 雾凇 服务器文档",
  description: "ATM10 & GTNH 双区服科技服务器入群到入服一站式教程",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    
    nav: [
      { text: '🏠 首页', link: '/' },
      { text: '📖 快速开始', link: '/getting-started' },
      { text: '📝 入服教程', link: '/tutorial' },
      { text: '❓ 常见问题', link: '/faq' },
      { 
        text: '🔗 相关链接',
        items: [
          { text: '官方网站', link: 'https://rime.abreeze.icu/' },
          { text: 'QQ群: 567367746', link: 'https://qm.qq.com/cgi-bin/qm/qr?k=1fve-ysV21jBeToeVDqbttofDRMeThsB&jump_from=webapi&authKey=pf7BK2S5loqNnhfWSOyzcSiFrpOkWej1Fvp4f1ZEYHukWYhSJ4J0gxJeGiejHpbe' }
        ]
      }
    ],

    sidebar: [
      {
        text: '📚 服务器指南',
        items: [
          { text: '🚀 快速开始', link: '/getting-started' },
          { text: '📝 入服教程', link: '/tutorial' },
          { text: '❓ 常见问题', link: '/faq' }
        ]
      },
      {
        text: '📋 服务器信息',
        items: [
          { text: '📜 服务器规则', link: '/rules' },
          { text: '📊 服务器状态', link: '/status' },
          { text: '🎉 活动公告', link: '/events' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/QianMoo0121/RIME-docs-vitepress' },
      { 
        icon: {
          svg: '<svg viewBox="0 0 1024 1024"><path d="M824.8 613.2c-16-51.4-34.4-94.6-62.7-165.3C766.5 262.2 689.3 112 511.5 112 331.7 112 256.2 265.2 261 447.9c-28.4 70.8-46.7 113.7-62.7 165.3-34 109.5-23 154.8-14.6 155.8 18 2.2 70.1-82.4 70.1-82.4 0 49 25.2 112.9 79.8 159-26.4 8.1-85.7 29.9-71.6 53.8 11.4 19.3 196.2 12.3 249.5 6.3 53.3 6 238.1 13 249.5-6.3 14.1-23.8-45.3-45.7-71.6-53.8 54.6-46.2 79.8-110.1 79.8-159 0 0 52.1 84.6 70.1 82.4 8.5-1.1 19.5-46.4-14.5-155.8z"></path></svg>'
        },
        link: 'https://qm.qq.com/cgi-bin/qm/qr?k=1fve-ysV21jBeToeVDqbttofDRMeThsB&jump_from=webapi&authKey=pf7BK2S5loqNnhfWSOyzcSiFrpOkWej1Fvp4f1ZEYHukWYhSJ4J0gxJeGiejHpbe'
      }
    ],

    footer: {
      message: '基于 VitePress 构建',
      copyright: 'Copyright © 2025 RIME · 雾凇. 保留所有权利。'
    },

    search: {
      provider: 'local'
    },

    editLink: {
      pattern: 'https://github.com/QianMoo0121/RIME-docs-vitepress/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    }
  }
})
