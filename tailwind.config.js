/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./docs/.vitepress/**/*.vue",
    "./docs/.vitepress/**/*.js",
    "./docs/.vitepress/**/*.ts",
    "./docs/**/*.md",
  ],
  darkMode: "class",
  theme: {
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": "var(--rime-text-secondary, #475569)",
            "--tw-prose-headings": "var(--rime-text-primary, #0f172a)",
            "--tw-prose-lead": "var(--rime-text-tertiary, #64748b)",
            "--tw-prose-bold": "var(--rime-text-primary, #0f172a)",
            "--tw-prose-counters": "var(--rime-primary-700, #0e7490)",
            "--tw-prose-hr": "var(--rime-border-subtle, #e2e8f0)",
            "--tw-prose-captions": "var(--rime-text-tertiary, #64748b)",

            "--tw-prose-links": "var(--rime-primary-700, #0e7490)",

            "--tw-prose-bullets": "var(--rime-primary-500, #36d1dc)",

            "--tw-prose-quotes": "var(--rime-text-primary, #0f172a)",
            "--tw-prose-quote-borders": "var(--rime-primary-400, #22d3ee)",

            "--tw-prose-code": "var(--rime-primary-700, #0e7490)",
            "--tw-prose-pre-code": "var(--rime-neutral-200, #e2e8f0)",
            "--tw-prose-pre-bg": "var(--rime-neutral-800, #1e293b)",

            "--tw-prose-th-borders": "var(--rime-border-default, #cbd5e1)",
            "--tw-prose-td-borders": "var(--rime-border-subtle, #e2e8f0)",

            "--tw-prose-invert-body": "var(--rime-neutral-300, #cbd5e1)",
            "--tw-prose-invert-headings": "var(--rime-neutral-0, #ffffff)",
            "--tw-prose-invert-lead": "var(--rime-neutral-400, #94a3b8)",
            "--tw-prose-invert-bold": "var(--rime-neutral-0, #ffffff)",
            "--tw-prose-invert-counters": "var(--rime-primary-400, #22d3ee)",
            "--tw-prose-invert-hr": "var(--rime-neutral-700, #334155)",
            "--tw-prose-invert-captions": "var(--rime-neutral-400, #94a3b8)",

            "--tw-prose-invert-links": "var(--rime-primary-400, #22d3ee)",

            "--tw-prose-invert-bullets": "var(--rime-primary-500, #36d1dc)",

            "--tw-prose-invert-quotes": "var(--rime-neutral-100, #f1f5f9)",
            "--tw-prose-invert-quote-borders":
              "var(--rime-primary-600, #0891b2)",

            "--tw-prose-invert-code": "var(--rime-primary-300, #67e8f9)",
            "--tw-prose-invert-pre-code": "var(--rime-neutral-300, #cbd5e1)",
            "--tw-prose-invert-pre-bg": "rgb(15 23 42 / 60%)",
            "--tw-prose-invert-th-borders": "var(--rime-neutral-600, #475569)",
            "--tw-prose-invert-td-borders": "var(--rime-neutral-700, #334155)",

            "code::before": { content: '""' },
            "code::after": { content: '""' },
            code: {
              fontWeight: "500",
              borderRadius: theme("borderRadius.md"),
              padding: "0.2em 0.4em",
              backgroundColor: "var(--rime-surface-selected, #f0f9ff)",
            },
            blockquote: {
              paddingLeft: "0.9em",
              borderLeftWidth: "0.3em",
              borderRadius: theme("borderRadius.lg"),
              backgroundColor: "var(--rime-surface-selected, #f0f9ff)",
            },
            pre: {
              borderRadius: theme("borderRadius.xl"),
              boxShadow:
                "var(--rime-shadow-lg, 0 10px 15px -3px rgba(0,0,0,0.1))",
              border: `1px solid var(--rime-border-subtle, #e2e8f0)`,
              backdropFilter: "blur(8px)",
              padding: "1.25rem",
            },
            "h1, h2, h3, h4": {
              scrollMarginTop: "6rem",
            },
            thead: {
              borderBottomColor: "var(--rime-border-strong, #94a3b8)",
            },
            "tbody tr:nth-child(odd)": {
              backgroundColor: "var(--rime-surface-card-hover, #f8fafc)",
            },
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
              backgroundColor: "rgba(148, 163, 184, 0.05)",
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
