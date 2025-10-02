<template>
  <div class="feature-cards-container">
    <div class="feature-cards-grid">
      <ModernCard
        title="🚀 新星周目 区服"
        description="体验最新版本的新星周目整合包，涵盖科技、魔法、冒险等多种元素，为玩家提供丰富的游戏内容和挑战"
        icon="rocket"
        color="primary"
      />

      <ModernCard
        title="⚙️ GTNH 区服"
        description="专注于GTNH整合包，深度体验工业科技的魅力，挑战复杂的科技树和生产流程"
        icon="gear"
        color="secondary"
      />

      <ModernCard
        title="🌟 服务器特色"
        description="跟进整合包最新版本、玩家和谐友好、进度流程简单、管理层常在线及时解决问题"
        icon="star"
        color="accent"
      />

      <ModernCard
        title="🎮 服务器地址"
        description="mc.abreeze.icu | gtnh.abreeze.icu"
        icon="gamepad"
        color="primary"
      />

      <ModernCard
        title="👥 QQ群"
        description="567367746"
        icon="users"
        color="success"
      />

      <ModernCard
        title="📚 官网"
        description="rime.abreeze.icu"
        icon="book"
        color="accent"
        link="https://rime.abreeze.icu/"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ModernCard from "./ModernCard.vue";
</script>

<style scoped>
.feature-cards-container {
  padding: 2rem 1.5rem;
  margin: 0 auto;
  max-width: 1200px;
}

.feature-cards-grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

@media (max-width: 768px) {
  .feature-cards-container {
    padding: 1.5rem 1rem;
  }

  .feature-cards-grid {
    gap: 1.5rem;
    grid-template-columns: 1fr;
  }
}
</style>
