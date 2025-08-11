/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./docs/.vitepress/**/*.vue",
    "./docs/.vitepress/**/*.js",
    "./docs/.vitepress/**/*.ts",
    "./docs/**/*.md",
  ],
  darkMode: "class", // 启用暗黑模式
  theme: {
    extend: {
      // 扩展排版插件的样式
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            // 基础颜色
            "--tw-prose-body": "var(--rime-text-secondary, #475569)",
            "--tw-prose-headings": "var(--rime-text-primary, #0f172a)",
            "--tw-prose-lead": "var(--rime-text-tertiary, #64748b)",
            "--tw-prose-bold": "var(--rime-text-primary, #0f172a)",
            "--tw-prose-counters": "var(--rime-primary-700, #0e7490)",
            "--tw-prose-hr": "var(--rime-border-subtle, #e2e8f0)",
            "--tw-prose-captions": "var(--rime-text-tertiary, #64748b)",

            // 链接颜色 - 对齐品牌色
            "--tw-prose-links": "var(--rime-primary-700, #0e7490)",

            // 项目符号颜色 - 对齐品牌色
            "--tw-prose-bullets": "var(--rime-primary-500, #36d1dc)",

            // 引用块样式 - 对齐品牌色
            "--tw-prose-quotes": "var(--rime-text-primary, #0f172a)",
            "--tw-prose-quote-borders": "var(--rime-primary-400, #22d3ee)",

            // 代码块颜色
            "--tw-prose-code": "var(--rime-primary-700, #0e7490)",
            "--tw-prose-pre-code": "var(--rime-neutral-200, #e2e8f0)",
            "--tw-prose-pre-bg": "var(--rime-neutral-800, #1e293b)",

            // 表格边框
            "--tw-prose-th-borders": "var(--rime-border-default, #cbd5e1)",
            "--tw-prose-td-borders": "var(--rime-border-subtle, #e2e8f0)",

            // --- 暗黑模式颜色 ---
            "--tw-prose-invert-body": "var(--rime-neutral-300, #cbd5e1)",
            "--tw-prose-invert-headings": "var(--rime-neutral-0, #ffffff)",
            "--tw-prose-invert-lead": "var(--rime-neutral-400, #94a3b8)",
            "--tw-prose-invert-bold": "var(--rime-neutral-0, #ffffff)",
            "--tw-prose-invert-counters": "var(--rime-primary-400, #22d3ee)",
            "--tw-prose-invert-hr": "var(--rime-neutral-700, #334155)",
            "--tw-prose-invert-captions": "var(--rime-neutral-400, #94a3b8)",

            // 暗黑模式链接 - 对齐品牌色
            "--tw-prose-invert-links": "var(--rime-primary-400, #22d3ee)",

            // 暗黑模式项目符号 - 对齐品牌色
            "--tw-prose-invert-bullets": "var(--rime-primary-500, #36d1dc)",

            // 暗黑模式引用块 - 对齐品牌色
            "--tw-prose-invert-quotes": "var(--rime-neutral-100, #f1f5f9)",
            "--tw-prose-invert-quote-borders": "var(--rime-primary-600, #0891b2)",

            // 暗黑模式代码块
            "--tw-prose-invert-code": "var(--rime-primary-300, #67e8f9)",
            "--tw-prose-invert-pre-code": "var(--rime-neutral-300, #cbd5e1)",
            "--tw-prose-invert-pre-bg": "rgb(15 23 42 / 60%)", // 带透明度的深蓝色背景

            // 暗黑模式表格边框
            "--tw-prose-invert-th-borders": "var(--rime-neutral-600, #475569)",
            "--tw-prose-invert-td-borders": "var(--rime-neutral-700, #334155)",

            // --- 全局细节微调 ---
            "code::before": { content: '""' },
            "code::after": { content: '""' },
            code: {
              fontWeight: "500",
              borderRadius: theme("borderRadius.md"),
              padding: "0.2em 0.4em",
              backgroundColor: "var(--rime-surface-selected, #f0f9ff)",
            },
            "blockquote": {
              paddingLeft: "0.9em",
              borderLeftWidth: "0.3em",
              borderRadius: theme("borderRadius.lg"),
              backgroundColor: "var(--rime-surface-selected, #f0f9ff)",
            },
            pre: {
              borderRadius: theme("borderRadius.xl"),
              boxShadow: "var(--rime-shadow-lg, 0 10px 15px -3px rgba(0,0,0,0.1))",
              border: `1px solid var(--rime-border-subtle, #e2e8f0)`,
              backdropFilter: "blur(8px)", // 应用高斯模糊
              padding: "1.25rem",
            },
            "h1, h2, h3, h4": {
              scrollMarginTop: "6rem", // 确保锚点链接定位正确
            },
            "thead": {
              borderBottomColor: "var(--rime-border-strong, #94a3b8)",
            },
            "tbody tr:nth-child(odd)": {
              backgroundColor: "var(--rime-surface-card-hover, #f8fafc)", // 斑马条纹
            },

            // --- 暗黑模式细节微调 ---
            ".dark code": {
              backgroundColor: "rgba(148, 163, 184, 0.15)",
            },
            ".dark blockquote": {
              backgroundColor: "rgba(148, 163, 184, 0.1)",
            },
            ".dark pre": {
              border: `1px solid var(--rime-neutral-700, #334155)`,
            },
            ".dark tbody tr:nth-child(odd)": {
              backgroundColor: "rgba(148, 163, 184, 0.05)", // 暗黑模式斑马条纹
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
