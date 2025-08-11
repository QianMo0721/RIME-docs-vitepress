import { defineConfig } from "vitepress";

export default defineConfig({
  title: "RIME · 雾凇服务器文档",
  description:
    "RIME · 雾凇 Minecraft 服务器官方文档站点 - 体验最新版本的ATM10和GTNH整合包",

  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "meta",
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    ],
    ["meta", { name: "theme-color", content: "#667eea" }],
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap",
        rel: "stylesheet",
      },
    ],
  ],

  themeConfig: {
    logo: {
      light: "/logo.png",
      dark: "/logo.png",
    },

    nav: [
      { text: "🏠 首页", link: "/" },
      { text: "🚀 快速开始", link: "/getting-started" },
      { text: "📖 入服教程", link: "/tutorial" },
      { text: "❓ 常见问题", link: "/faq" },
      { text: "🎮 游戏指令", link: "/commands" },
      { text: "📋 服务器规则", link: "/rules" },
    ],

    sidebar: [
      {
        text: "🌟 开始使用",
        collapsed: false,
        items: [
          { text: "🚀 快速开始", link: "/getting-started" },
          { text: "📖 入服教程", link: "/tutorial" },
        ],
      },
      {
        text: "🎮 游戏帮助",
        collapsed: false,
        items: [
          { text: "🎯 常用指令", link: "/commands" },
          { text: "❓ 常见问题", link: "/faq" },
          { text: "📋 服务器规则", link: "/rules" },
        ],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/QianMoo0121/RIME-docs-vitepress",
      },
    ],

    footer: {
      message: "基于 MIT 许可证开源",
      copyright:
        "Copyright © 2025 RIME · 雾凇 | 致力于寻找玩法与稳定的Minecraft服务器",
    },

    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },

    editLink: {
      pattern:
        "https://github.com/QianMoo0121/RIME-docs-vitepress/edit/main/docs/:path",
      text: "在 GitHub 上编辑此页",
    },

    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },

    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    darkModeSwitchLabel: "外观",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
    sidebarMenuLabel: "菜单",
    returnToTopLabel: "回到顶部",
  },

  base: "/",
  cleanUrls: true,
  lastUpdated: true,

  markdown: {
    theme: {
      light: "github-light",
      dark: "github-dark",
    },
    lineNumbers: true,
  },

  // 启用 sitemap
  sitemap: {
    hostname: "https://docs.abreeze.icu",
  },
});
