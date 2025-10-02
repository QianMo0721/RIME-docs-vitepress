<template>
  <div class="custom-hero">
    <div class="hero-container">
      <div class="hero-background-panel">
        <div class="background-decoration">
          <div class="decoration-orb orb-1"></div>
          <div class="decoration-orb orb-2"></div>
          <div class="decoration-orb orb-3"></div>
        </div>

        <div class="hero-content">
          <div class="hero-text">
            <h1 class="hero-name">
              {{ heroData.name }}
            </h1>

            <p class="hero-subtitle">
              {{ heroData.text }}
            </p>

            <p class="hero-tagline">
              {{ heroData.tagline }}
            </p>

            <div class="hero-actions">
              <template v-for="action in heroData.actions" :key="action.text">
                <a
                  :href="action.link"
                  class="hero-button"
                  :class="`button-${action.theme}`"
                >
                  {{ action.text }}
                </a>
              </template>
            </div>
          </div>

          <div class="hero-logo">
            <img
              :src="heroData.image.src"
              :alt="heroData.image.alt"
              class="logo-image"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface HeroAction {
  text: string;
  link: string;
  theme: "brand" | "alt";
}

interface HeroImage {
  src: string;
  alt: string;
}

interface HeroData {
  name: string;
  text: string;
  tagline: string;
  image: HeroImage;
  actions: HeroAction[];
}

interface Props {
  heroData?: HeroData;
}

const props = withDefaults(defineProps<Props>(), {
  heroData: () => ({
    name: "RIME · 雾凇",
    text: "新星周目 & GTNH 双区服科技服务器",
    tagline: "致力于寻找玩法与稳定的Minecraft服务器",
    image: {
      src: "https://img.cdn1.vip/i/68986baa3322c_1754819498.webp",
      alt: "RIME Logo",
    },
    actions: [
      { theme: "brand", text: "📖 快速开始", link: "/getting-started" },
      { theme: "alt", text: "📝 入服教程", link: "/tutorial" },
      { theme: "alt", text: "❓ 常见问题", link: "/faq" },
      { theme: "alt", text: "🎮 常用指令", link: "/commands" },
    ],
  }),
});
</script>

<style scoped>
.custom-hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  overflow: hidden;
  transform: translateY(-32px);
}

.hero-container {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.hero-background-panel {
  position: relative;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 3rem;
  padding: 4rem;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1),
    0 0 0 1px rgba(255, 255, 255, 0.1) inset, 0 0 100px rgba(102, 126, 234, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
}

.dark .hero-background-panel {
  background: rgba(15, 23, 42, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.05) inset,
    0 0 100px rgba(102, 126, 234, 0.2);
}

.dark .decoration-orb {
  opacity: 0.25;
}

.background-decoration {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  overflow: hidden;
}

.decoration-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.4;
  animation: orbFloat 15s ease-in-out infinite;
  z-index: 1;
  will-change: transform;
}

.orb-1 {
  width: 200px;
  height: 200px;
  background: linear-gradient(
    135deg,
    var(--rime-primary),
    var(--rime-secondary)
  );
  top: -100px;
  right: -100px;
  animation-delay: 0s;
}

.orb-2 {
  width: 150px;
  height: 150px;
  background: linear-gradient(
    135deg,
    var(--rime-secondary),
    var(--rime-accent)
  );
  bottom: -75px;
  left: -75px;
  animation-delay: -5s;
}

.orb-3 {
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, var(--rime-accent), var(--rime-primary));
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-delay: -10s;
}

@keyframes orbFloat {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(20px, -30px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

/* ========================= 主要内容布局 ========================= */
@keyframes hero-fade-in {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-content {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 4rem;
  /* Apply animation with a slight delay for better effect */
  animation: hero-fade-in 0.8s 0.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  will-change: transform, opacity;
}

/* ========================= Logo 区域 ========================= */
.hero-logo {
  position: absolute;
  top: 50%;
  right: 2rem;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
}

.logo-image {
  width: 280px;
  height: 280px;
  object-fit: contain;
  border-radius: 2rem;
  transition: all 0.3s ease;
  animation: logoFloat 6s ease-in-out infinite;
  will-change: transform;
}

.logo-image:hover {
  transform: scale(1.05);
  filter: brightness(1.1) contrast(1.05);
}

@keyframes logoFloat {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(2deg);
  }
}

/* ========================= 文字区域 ========================= */
.hero-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: calc(100% - 360px);
  text-align: left;
  padding-right: 2rem;
  position: relative;
  z-index: 5;
}

/* 主标题 */
.hero-name {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.1;
  margin: 0;
  background: linear-gradient(
    90deg,
    #36d1dc 0%,
    #5b86e5 12.5%,
    #36d1dc 25%,
    #5b86e5 37.5%,
    #36d1dc 50%,
    #5b86e5 62.5%,
    #36d1dc 75%,
    #5b86e5 87.5%,
    #36d1dc 100%
  );
  background-size: 400% 100%;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  text-shadow: none;
  animation: gradientFlow 25s linear infinite;
  will-change: background-position, transform, filter;
  transition: transform 0.3s ease, filter 0.3s ease;
}

@keyframes gradientFlow {
  0% {
    background-position: 0% center;
  }
  100% {
    background-position: -300% center;
  }
}

@keyframes textGlow {
  0% {
    filter: drop-shadow(0 0 20px rgba(102, 126, 234, 0.5));
  }
  100% {
    filter: drop-shadow(0 0 30px rgba(240, 147, 251, 0.7));
  }
}

/* 深色模式下的主标题 */
.dark .hero-name {
  background: linear-gradient(
    90deg,
    #67e8f9 0%,
    #93c5fd 12.5%,
    #67e8f9 25%,
    #93c5fd 37.5%,
    #67e8f9 50%,
    #93c5fd 62.5%,
    #67e8f9 75%,
    #93c5fd 87.5%,
    #67e8f9 100%
  );
  background-size: 400% 100%;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  position: relative;
  z-index: 10;
  /* 确保在深色模式下文字不被背景遮挡 */
  filter: drop-shadow(0 0 1px rgba(255, 255, 255, 0.1));
}

/* 主标题悬停效果 */
.hero-name:hover {
  animation: gradientFlowFast 15s linear infinite;
  transform: scale(1.02) translateY(-1px);
  filter: drop-shadow(0 8px 16px rgba(54, 209, 220, 0.3));
}

.dark .hero-name:hover {
  filter: drop-shadow(0 8px 16px rgba(103, 232, 249, 0.4));
}

@keyframes gradientFlowFast {
  0% {
    background-position: 0% center;
  }
  100% {
    background-position: -400% center;
  }
}

/* 副标题 */
.hero-subtitle {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--rime-gray-700);
  margin: 0;
  line-height: 1.4;
}

.dark .hero-subtitle {
  color: var(--rime-gray-200);
}

/* 描述文字 */
.hero-tagline {
  font-size: 1.1rem;
  font-weight: 400;
  color: var(--rime-gray-600);
  margin: 0;
  line-height: 1.6;
  opacity: 0.9;
}

.dark .hero-tagline {
  color: var(--rime-gray-300);
}

/* ========================= 按钮组 ========================= */
.hero-actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: nowrap;
  margin-top: 1rem;
  justify-content: flex-start;
  align-items: center;
}

.hero-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.25rem;
  border-radius: 0.875rem;
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  border: 1px solid transparent;
  white-space: nowrap;
  flex-shrink: 0;
}

/* 品牌按钮 */
.button-brand {
  background: linear-gradient(
    135deg,
    var(--rime-primary),
    var(--rime-secondary)
  );
  color: white;
  box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
  position: relative;
  overflow: hidden;
  border: none;
}

.button-brand::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transition: left 0.5s;
}

.button-brand:hover::before {
  left: 100%;
}

.button-brand:hover {
  transform: translateY(-2px);
  box-shadow: 0 15px 35px rgba(102, 126, 234, 0.4);
}

/* 次要按钮 */
.button-alt {
  background: rgba(255, 255, 255, 0.15);
  color: var(--rime-gray-700);
  border: 1.5px solid rgba(102, 126, 234, 0.4);
  backdrop-filter: blur(20px);
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.1);
}

.dark .button-alt {
  color: var(--rime-gray-200);
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(102, 126, 234, 0.5);
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.2);
}

.button-alt:hover {
  background: rgba(255, 255, 255, 0.25);
  border-color: rgba(102, 126, 234, 0.6);
  transform: translateY(-1px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.2);
}

.dark .button-alt:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(102, 126, 234, 0.7);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
}

/* ========================= 响应式设计 ========================= */

/* 平板设备 */
@media (max-width: 1024px) {
  .custom-hero {
    transform: translateY(-28px);
  }

  .hero-background-panel {
    padding: 3rem;
  }

  .hero-content {
    gap: 3rem;
  }

  .hero-text {
    max-width: calc(100% - 260px);
  }

  .hero-logo {
    right: 1.5rem;
  }

  .logo-image {
    width: 220px;
    height: 220px;
  }

  .hero-name {
    font-size: 3rem;
  }

  .hero-actions {
    gap: 0.625rem;
  }

  .hero-button {
    padding: 0.7rem 1.125rem;
    font-size: 0.875rem;
  }
}

/* 手机设备 */
@media (max-width: 768px) {
  .custom-hero {
    padding: 1.5rem 1rem;
    transform: translateY(-24px);
  }

  .hero-background-panel {
    padding: 2rem;
    border-radius: 2rem;
  }

  .hero-content {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }

  .hero-text {
    text-align: center;
    max-width: 100%;
    padding-right: 0;
  }

  .hero-logo {
    position: static;
    transform: none;
    order: -1;
  }

  .logo-image {
    width: 160px;
    height: 160px;
  }

  .hero-name {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.25rem;
  }

  .hero-tagline {
    font-size: 1rem;
  }

  .hero-actions {
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .hero-button {
    padding: 0.625rem 1rem;
    font-size: 0.85rem;
  }
}

/* 小屏手机 */
@media (max-width: 480px) {
  .hero-background-panel {
    padding: 1.5rem;
  }

  .hero-name {
    font-size: 2rem;
  }

  .hero-actions {
    flex-direction: column;
    gap: 0.75rem;
  }

  .hero-button {
    width: 100%;
  }
}

/* 减少动画（用户偏好） */
@media (prefers-reduced-motion: reduce) {
  .logo-image,
  .decoration-orb,
  .hero-content,
  .hero-button {
    animation: none;
    transition: none;
  }
}

/* 高对比度模式 */
@media (prefers-contrast: high) {
  .hero-background-panel {
    border-width: 2px;
    border-style: solid;
  }

  .hero-button {
    border-width: 2px;
    border-style: solid;
  }
}
</style>
