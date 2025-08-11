<template>
  <div class="background-animation">
    <!-- 浮动粒子效果 -->
    <div class="particles">
      <div
        v-for="i in particleCount"
        :key="i"
        class="particle"
        :style="{
          '--delay': `${Math.random() * 10}s`,
          '--duration': `${15 + Math.random() * 20}s`,
          '--size': `${2 + Math.random() * 4}px`,
          '--opacity': Math.random() * 0.7 + 0.3,
        }"
      ></div>
    </div>

    <!-- 渐变网格背景 -->
    <div class="gradient-grid">
      <div
        class="grid-line"
        v-for="i in 20"
        :key="`v-${i}`"
        :style="{ left: `${i * 5}%` }"
      ></div>
      <div
        class="grid-line horizontal"
        v-for="i in 20"
        :key="`h-${i}`"
        :style="{ top: `${i * 5}%` }"
      ></div>
    </div>

    <!-- 动态渐变背景 -->
    <div class="gradient-orbs">
      <div class="orb orb-1"></div>
      <div class="orb orb-2"></div>
      <div class="orb orb-3"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const particleCount = ref(50);

onMounted(() => {
  // 根据屏幕大小调整粒子数量
  const updateParticleCount = () => {
    if (window.innerWidth < 768) {
      particleCount.value = 20;
    } else if (window.innerWidth < 1024) {
      particleCount.value = 35;
    } else {
      particleCount.value = 50;
    }
  };

  updateParticleCount();
  window.addEventListener("resize", updateParticleCount);

  return () => {
    window.removeEventListener("resize", updateParticleCount);
  };
});
</script>

<style scoped>
.background-animation {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: -1;
  overflow: hidden;
}

/* 浮动粒子效果 */
.particles {
  position: absolute;
  width: 100%;
  height: 100%;
}

.particle {
  position: absolute;
  width: var(--size);
  height: var(--size);
  background: linear-gradient(135deg, #667eea, #f093fb);
  border-radius: 50%;
  opacity: var(--opacity);
  animation: float var(--duration) infinite linear;
  animation-delay: var(--delay);
  will-change: transform, opacity;
}

@keyframes float {
  0% {
    transform: translateY(100vh) translateX(0) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: var(--opacity);
  }
  90% {
    opacity: var(--opacity);
  }
  100% {
    transform: translateY(-100px) translateX(200px) rotate(360deg);
    opacity: 0;
  }
}

/* 每个粒子的起始位置随机化 */
.particle:nth-child(2n) {
  left: 10%;
  animation-direction: reverse;
}

.particle:nth-child(3n) {
  left: 20%;
  background: linear-gradient(135deg, #f093fb, #f6d365);
}

.particle:nth-child(4n) {
  left: 30%;
  animation-duration: calc(var(--duration) * 0.8);
}

.particle:nth-child(5n) {
  left: 40%;
  background: linear-gradient(135deg, #4facfe, #00f2fe);
}

.particle:nth-child(6n) {
  left: 50%;
  animation-direction: reverse;
}

.particle:nth-child(7n) {
  left: 60%;
  background: linear-gradient(135deg, #43e97b, #38f9d7);
}

.particle:nth-child(8n) {
  left: 70%;
  animation-duration: calc(var(--duration) * 1.2);
}

.particle:nth-child(9n) {
  left: 80%;
  background: linear-gradient(135deg, #fa709a, #fee140);
}

.particle:nth-child(10n) {
  left: 90%;
  animation-direction: reverse;
}

/* 渐变网格背景 */
.gradient-grid {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.03;
}

.grid-line {
  position: absolute;
  background: linear-gradient(to bottom, transparent, #667eea, transparent);
  width: 1px;
  height: 100%;
  animation: gridPulse 8s ease-in-out infinite;
  will-change: opacity;
}

.grid-line.horizontal {
  background: linear-gradient(to right, transparent, #667eea, transparent);
  width: 100%;
  height: 1px;
  top: auto;
  left: 0 !important;
}

@keyframes gridPulse {
  0%,
  100% {
    opacity: 0.03;
  }
  50% {
    opacity: 0.08;
  }
}

/* 动态渐变背景 */
.gradient-orbs {
  position: absolute;
  width: 100%;
  height: 100%;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.3;
  animation: orbFloat 20s ease-in-out infinite;
  will-change: transform;
}

.orb-1 {
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

.orb-2 {
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, #f093fb, #f5576c);
  top: 60%;
  right: 10%;
  animation-delay: -7s;
}

.orb-3 {
  width: 500px;
  height: 500px;
  background: linear-gradient(135deg, #4facfe, #00f2fe);
  bottom: 10%;
  left: 50%;
  animation-delay: -14s;
}

@keyframes orbFloat {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(50px, -80px) scale(1.1);
  }
  66% {
    transform: translate(-30px, 60px) scale(0.9);
  }
}

/* 响应式优化 */
@media (max-width: 768px) {
  .particles,
  .gradient-grid {
    display: none;
  }

  .orb {
    filter: blur(40px);
  }

  .orb-1 {
    width: 250px;
    height: 250px;
  }

  .orb-2 {
    width: 200px;
    height: 200px;
  }

  .orb-3 {
    width: 300px;
    height: 300px;
  }

  .grid-line {
    opacity: 0.02;
  }
}

/* 减少动画对性能的影响 */
@media (prefers-reduced-motion: reduce) {
  .particle,
  .orb,
  .grid-line {
    animation: none;
  }
}
</style>
