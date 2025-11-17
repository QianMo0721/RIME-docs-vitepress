<template>
  <section
    class="home-info-section max-w-5xl mx-auto mt-8 px-4 md:px-6 lg:px-8 space-y-4"
  >
    <h2
      class="text-2xl font-semibold tracking-tight text-rime-text-primary dark:text-rime-text-inverse"
    >
      欢迎来到 RIME · 雾凇
    </h2>

    <div
      class="glass-panel text-sm leading-relaxed text-rime-text-secondary dark:text-rime-neutral-100"
    >
      RIME · 雾凇是一个专注于科技整合包的 Minecraft 服务器，我们提供两个特色区服供玩家选择，无论你是喜欢探索魔法科技的新手，还是追求极致工业挑战的老玩家，这里都有适合你的游戏体验。
    </div>

    <div
      class="glass-panel space-y-3"
    >
      <h3 class="text-lg font-semibold text-rime-text-primary dark:text-rime-neutral-50">
        🚀 快速连接
      </h3>

      <div class="info-grid grid gap-3 md:grid-cols-3">
        <InfoCard variant="primary" label="🌐 服务器地址">
          <code
            class="inline-block mt-1 rounded-md bg-rime-primary-50/80 dark:bg-slate-800/80 px-2.5 py-1 text-xs font-semibold text-rime-text-primary dark:text-rime-neutral-0"
          >
            mc.abreeze.icu
          </code>
        </InfoCard>

        <InfoCard variant="danger" label="💬 QQ 交流群">
          <span
            class="mt-1 inline-block text-base font-semibold text-rime-text-primary dark:text-rime-neutral-0"
          >
            567367746
          </span>
        </InfoCard>

        <InfoCard variant="warning" label="🏠 官方网站">
          <a
            href="https://rime.abreeze.icu/"
            class="mt-1 inline-block text-sm font-semibold text-rime-text-primary dark:text-rime-neutral-0 border-b-2 border-rime-warning-400/60 hover:border-rime-warning-500 transition-colors glass-link"
          >
            rime.abreeze.icu
          </a>
        </InfoCard>
      </div>
    </div>

    <div
      class="glass-panel mt-2 text-center space-y-2"
    >
      <p
        class="text-base font-semibold text-rime-success-600 dark:text-rime-success-400"
      >
        准备好开始你的科技之旅了吗？
      </p>
      <p class="text-sm text-rime-text-secondary dark:text-rime-neutral-200">
        点击上方的「入服教程」开始吧！ ✨
      </p>
    </div>
  </section>
</template>

<style scoped>
.home-info-section {
  width: 100%;
}

.glass-panel {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  padding: 1.3rem;
  margin: 0.4rem 0;
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
}

.glass-card {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 0.7rem;
  padding: 1rem;
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  transition: all 0.3s ease;
}

.glass-card:hover {
  background: rgba(255, 255, 255, 0.4);
  box-shadow: 0 10px 25px rgba(15, 23, 42, 0.08);
}

.info-grid {
  display: grid;
  gap: 0.6rem;
  margin-top: 0.3rem;
}

@media (min-width: 768px) {
  .info-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

.glass-link,
.glass-link:visited,
.glass-link:hover,
.glass-link:active {
  text-decoration: none !important;
}
</style>
