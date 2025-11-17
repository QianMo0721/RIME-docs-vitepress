<template>
  <div class="feature-cards-container">
    <div class="feature-cards-grid">
      <ModernCard
        title="🚀 GregTech Odyssey 区服"
        description="以 GregTech 为核心的魔改科技整合包，辅以魔法与冒险内容"
        icon="rocket"
        color="primary"
      />

      <ModernCard
        title="⚙️ FTB StoneBlock 4 区服"
        description="出生在完全由石头封闭的空间，通过挖掘、筛选和合成逐步获取资源并扩展基地"
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
        description="mc.abreeze.icu"
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
