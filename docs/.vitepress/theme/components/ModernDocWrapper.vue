<template>
  <div class="modern-doc-wrapper">
    <!-- 背景装饰层 -->
    <div class="wrapper-background">
      <div class="gradient-orb gradient-orb-1"></div>
      <div class="gradient-orb gradient-orb-2"></div>
      <div class="gradient-orb gradient-orb-3"></div>
    </div>

    <!-- 文档内容容器 -->
    <div class="doc-content-container">
      <!-- 装饰边框 -->
      <div class="border-decoration">
        <div class="border-line border-top"></div>
        <div class="border-line border-right"></div>
        <div class="border-line border-bottom"></div>
        <div class="border-line border-left"></div>
      </div>

      <!-- 内容区域 -->
      <div class="content-inner">
        <!-- 头部装饰 -->
        <div class="content-header">
          <div class="header-shine"></div>
          <div class="header-dots">
            <span class="dot dot-red"></span>
            <span class="dot dot-yellow"></span>
            <span class="dot dot-green"></span>
          </div>
        </div>

        <!-- 文档内容插槽 -->
        <div class="doc-content">
          <slot />
        </div>

        <!-- 底部装饰 -->
        <div class="content-footer">
          <div class="footer-gradient"></div>
        </div>
      </div>

      <!-- 悬浮装饰元素 -->
      <div class="floating-elements">
        <div class="floating-element element-1"></div>
        <div class="floating-element element-2"></div>
        <div class="floating-element element-3"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";

// 添加鼠标跟踪效果
let mouseX = 0;
let mouseY = 0;

const handleMouseMove = (e: MouseEvent) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  // 更新渐变球位置
  const orbs = document.querySelectorAll(".gradient-orb");
  orbs.forEach((orb, index) => {
    const element = orb as HTMLElement;
    const speed = (index + 1) * 0.02;
    const offsetX = (mouseX - window.innerWidth / 2) * speed;
    const offsetY = (mouseY - window.innerHeight / 2) * speed;

    element.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${
      1 + speed
    })`;
  });
};

onMounted(() => {
  window.addEventListener("mousemove", handleMouseMove);
});

onUnmounted(() => {
  window.removeEventListener("mousemove", handleMouseMove);
});
</script>

<style scoped>
/* ========================= 主容器样式 ========================= */
.modern-doc-wrapper {
  position: relative;
  min-height: 100vh;
  padding: 2rem 0;
  overflow: hidden;
}

/* ========================= 背景装饰层 ========================= */
.wrapper-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
}

.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.6;
  animation: float 20s ease-in-out infinite;
}

.gradient-orb-1 {
  width: 400px;
  height: 400px;
  background: radial-gradient(
    circle,
    rgba(102, 126, 234, 0.4) 0%,
    rgba(240, 147, 251, 0.2) 50%,
    transparent 70%
  );
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.gradient-orb-2 {
  width: 300px;
  height: 300px;
  background: radial-gradient(
    circle,
    rgba(246, 211, 101, 0.3) 0%,
    rgba(79, 172, 254, 0.2) 50%,
    transparent 70%
  );
  top: 60%;
  right: 15%;
  animation-delay: -7s;
}

.gradient-orb-3 {
  width: 500px;
  height: 500px;
  background: radial-gradient(
    circle,
    rgba(240, 147, 251, 0.3) 0%,
    rgba(102, 126, 234, 0.2) 50%,
    transparent 70%
  );
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  animation-delay: -14s;
}

@keyframes float {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  25% {
    transform: translate(20px, -30px) scale(1.1);
  }
  50% {
    transform: translate(-15px, 20px) scale(0.9);
  }
  75% {
    transform: translate(25px, 10px) scale(1.05);
  }
}

/* ========================= 文档内容容器 ========================= */
.doc-content-container {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* 装饰边框 */
.border-decoration {
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  pointer-events: none;
  z-index: 1;
}

.border-line {
  position: absolute;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(102, 126, 234, 0.6) 50%,
    transparent 100%
  );
  opacity: 0;
  animation: borderGlow 3s ease-in-out infinite;
}

.border-top {
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  animation-delay: 0s;
}

.border-right {
  top: 0;
  right: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(
    180deg,
    transparent 0%,
    rgba(102, 126, 234, 0.6) 50%,
    transparent 100%
  );
  animation-delay: 0.75s;
}

.border-bottom {
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  animation-delay: 1.5s;
}

.border-left {
  top: 0;
  left: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(
    180deg,
    transparent 0%,
    rgba(102, 126, 234, 0.6) 50%,
    transparent 100%
  );
  animation-delay: 2.25s;
}

@keyframes borderGlow {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

/* ========================= 内容区域 ========================= */
.content-inner {
  position: relative;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  z-index: 2;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.content-inner:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(102, 126, 234, 0.3);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25),
    0 0 0 1px rgba(102, 126, 234, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

/* 深色模式适配 */
.dark .content-inner {
  background: rgba(30, 41, 59, 0.6);
  border-color: rgba(255, 255, 255, 0.05);
}

.dark .content-inner:hover {
  background: rgba(30, 41, 59, 0.8);
  border-color: rgba(102, 126, 234, 0.4);
}

/* ========================= 头部装饰 ========================= */
.content-header {
  position: relative;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  background: linear-gradient(
    135deg,
    rgba(102, 126, 234, 0.1) 0%,
    rgba(240, 147, 251, 0.05) 50%,
    rgba(246, 211, 101, 0.1) 100%
  );
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.header-shine {
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
  animation: shine 3s ease-in-out infinite;
}

@keyframes shine {
  0% {
    left: -100%;
  }
  50%,
  100% {
    left: 100%;
  }
}

.header-dots {
  display: flex;
  gap: 0.5rem;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  opacity: 0.8;
  animation: pulse 2s ease-in-out infinite;
}

.dot-red {
  background: #ef4444;
  animation-delay: 0s;
}

.dot-yellow {
  background: #f59e0b;
  animation-delay: 0.2s;
}

.dot-green {
  background: #10b981;
  animation-delay: 0.4s;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 0.8;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
}

/* ========================= 文档内容 ========================= */
.doc-content {
  position: relative;
  padding: 3rem 2rem;
  min-height: 400px;
}

/* VPDoc样式覆盖 */
.doc-content :deep(.VPDoc) {
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
  margin: 0 !important;
  padding: 0 !important;
  border-radius: 0 !important;
}

.doc-content :deep(.vp-doc) {
  padding: 0 !important;
}

/* 优化文档内容的可读性 */
.doc-content :deep(h1),
.doc-content :deep(h2),
.doc-content :deep(h3),
.doc-content :deep(h4),
.doc-content :deep(h5),
.doc-content :deep(h6) {
  color: #6190e8;
  font-weight: 700;
  margin-bottom: 1.5rem;
  position: relative;
  display: flex;
  align-items: center;
}

/* 确保锚点链接正确显示 */
.doc-content :deep(.header-anchor) {
  color: #6190e8;
  opacity: 0;
  transition: all 0.3s ease;
  margin-left: 0.75rem;
  text-decoration: none;
  font-weight: normal;
  font-size: 0.8em;
  flex-shrink: 0;
}

.doc-content :deep(h1):hover .header-anchor,
.doc-content :deep(h2):hover .header-anchor,
.doc-content :deep(h3):hover .header-anchor,
.doc-content :deep(h4):hover .header-anchor,
.doc-content :deep(h5):hover .header-anchor,
.doc-content :deep(h6):hover .header-anchor {
  opacity: 1;
}

/* 移除标题底下的装饰线 */
.doc-content :deep(h1)::after,
.doc-content :deep(h2)::after,
.doc-content :deep(h3)::after {
  display: none !important;
}

.doc-content :deep(p) {
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: var(--vp-c-text-1);
  font-size: 1.05rem;
}

/* ========================= 底部装饰 ========================= */
.content-footer {
  position: relative;
  height: 40px;
  background: linear-gradient(
    135deg,
    rgba(102, 126, 234, 0.05) 0%,
    rgba(240, 147, 251, 0.02) 50%,
    rgba(246, 211, 101, 0.05) 100%
  );
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.footer-gradient {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    var(--rime-primary) 25%,
    var(--rime-secondary) 50%,
    var(--rime-accent) 75%,
    transparent 100%
  );
  opacity: 0.8;
}

/* ========================= 悬浮装饰元素 ========================= */
.floating-elements {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  overflow: hidden;
}

.floating-element {
  position: absolute;
  border-radius: 50%;
  background: rgba(102, 126, 234, 0.1);
  animation: floatElement 15s ease-in-out infinite;
}

.element-1 {
  width: 6px;
  height: 6px;
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.element-2 {
  width: 8px;
  height: 8px;
  top: 60%;
  right: 20%;
  background: rgba(240, 147, 251, 0.1);
  animation-delay: -5s;
}

.element-3 {
  width: 4px;
  height: 4px;
  bottom: 30%;
  left: 80%;
  background: rgba(246, 211, 101, 0.1);
  animation-delay: -10s;
}

@keyframes floatElement {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.6;
  }
  33% {
    transform: translate(20px, -30px) scale(1.5);
    opacity: 1;
  }
  66% {
    transform: translate(-15px, 25px) scale(0.8);
    opacity: 0.4;
  }
}

/* ========================= 响应式设计 ========================= */
@media (max-width: 768px) {
  .modern-doc-wrapper {
    padding: 1rem 0;
  }

  .doc-content-container {
    padding: 0 1rem;
  }

  .content-inner {
    border-radius: 1.5rem;
  }

  .content-header,
  .doc-content {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .doc-content {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  .gradient-orb {
    filter: blur(40px);
    opacity: 0.4;
  }

  .gradient-orb-1 {
    width: 250px;
    height: 250px;
  }

  .gradient-orb-2 {
    width: 200px;
    height: 200px;
  }

  .gradient-orb-3 {
    width: 300px;
    height: 300px;
  }
}

@media (max-width: 480px) {
  .doc-content-container {
    padding: 0 0.5rem;
  }

  .content-inner {
    border-radius: 1rem;
  }

  .content-header {
    height: 50px;
    padding: 0 1rem;
  }

  .doc-content {
    padding: 1.5rem 1rem;
  }

  .dot {
    width: 10px;
    height: 10px;
  }
}

/* ========================= 动画性能优化 ========================= */
@media (prefers-reduced-motion: reduce) {
  .gradient-orb,
  .floating-element,
  .border-line,
  .header-shine,
  .dot {
    animation: none;
  }

  .content-inner {
    transition: none;
  }
}

/* ========================= 打印样式 ========================= */
@media print {
  .wrapper-background,
  .border-decoration,
  .content-header,
  .content-footer,
  .floating-elements {
    display: none !important;
  }

  .content-inner {
    background: white !important;
    border: 1px solid #ddd !important;
    box-shadow: none !important;
  }
}
</style>
