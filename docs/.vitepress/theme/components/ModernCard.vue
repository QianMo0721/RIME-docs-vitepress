<template>
  <div
    class="modern-card"
    :class="{ 'card-hover': isHovered }"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <div class="card-glow"></div>

    <div class="card-content">
      <div class="card-icon" v-if="icon">
        <component :is="iconComponent" />
      </div>

      <h3 class="card-title" v-if="title">{{ title }}</h3>

      <p class="card-description" v-if="description">{{ description }}</p>

      <div class="card-slot">
        <slot />
      </div>

      <a v-if="link" :href="link" class="card-link">
        <span>了解更多</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 12H19M19 12L12 5M19 12L12 19"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </a>
    </div>

    <div class="card-decoration">
      <div class="decoration-circle decoration-1"></div>
      <div class="decoration-circle decoration-2"></div>
      <div class="decoration-circle decoration-3"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

interface Props {
  title?: string;
  description?: string;
  icon?: string;
  link?: string;
  color?: "primary" | "secondary" | "accent" | "success";
}

const props = withDefaults(defineProps<Props>(), {
  color: "primary",
});

const isHovered = ref(false);

const iconComponents = {
  rocket: () => "🚀",
  gear: () => "⚙️",
  star: () => "🌟",
  gamepad: () => "🎮",
  users: () => "👥",
  book: () => "📚",
  question: () => "❓",
  command: () => "🎯",
};

const iconComponent = computed(() => {
  return (
    iconComponents[props.icon as keyof typeof iconComponents] ||
    (() => props.icon)
  );
});
</script>

<style scoped>
.modern-card {
  position: relative;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 1.5rem;
  padding: 2rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  cursor: pointer;
  isolation: isolate;
}

.dark .modern-card {
  background: rgba(30, 41, 59, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.card-glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(102, 126, 234, 0.1) 0%,
    rgba(240, 147, 251, 0.05) 50%,
    rgba(246, 211, 101, 0.1) 100%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: inherit;
}

.card-hover .card-glow {
  opacity: 1;
}

.card-content {
  position: relative;
  z-index: 2;
}

.card-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3.5rem;
  height: 3.5rem;
  background: linear-gradient(135deg, var(--vp-c-brand-1), var(--vp-c-brand-2));
  border-radius: 1rem;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  box-shadow: 0 8px 32px rgba(102, 126, 234, 0.3);
  transition: all 0.3s ease;
}

.card-hover .card-icon {
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 12px 40px rgba(102, 126, 234, 0.4);
}

.card-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0 0 0.75rem 0;
  line-height: 1.4;
  transition: color 0.3s ease;
}

.card-hover .card-title {
  color: var(--vp-c-brand-1);
}

.card-description {
  color: var(--vp-c-text-2);
  line-height: 1.6;
  margin: 0 0 1.5rem 0;
  transition: color 0.3s ease;
}

.card-hover .card-description {
  color: var(--vp-c-text-1);
}

.card-slot {
  margin-bottom: 1.5rem;
}

.card-slot:empty {
  margin-bottom: 0;
}

.card-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--vp-c-brand-1);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(102, 126, 234, 0.1);
  border: 1px solid rgba(102, 126, 234, 0.2);
}

.card-link:hover {
  background: rgba(102, 126, 234, 0.2);
  transform: translateX(4px);
  border-color: rgba(102, 126, 234, 0.3);
}

.card-link svg {
  transition: transform 0.3s ease;
}

.card-link:hover svg {
  transform: translateX(2px);
}

.card-decoration {
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
  height: 100px;
  pointer-events: none;
  z-index: 1;
}

.decoration-circle {
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--vp-c-brand-1), var(--vp-c-brand-2));
  opacity: 0.1;
  transition: all 0.3s ease;
}

.decoration-1 {
  width: 20px;
  height: 20px;
  top: 20px;
  right: 20px;
  animation: float 6s ease-in-out infinite;
}

.decoration-2 {
  width: 12px;
  height: 12px;
  top: 50px;
  right: 50px;
  animation: float 6s ease-in-out infinite 2s;
}

.decoration-3 {
  width: 8px;
  height: 8px;
  top: 70px;
  right: 30px;
  animation: float 6s ease-in-out infinite 4s;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(180deg);
  }
}

.modern-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(102, 126, 234, 0.2);
  border-color: rgba(102, 126, 234, 0.3);
}

.dark .modern-card:hover {
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(102, 126, 234, 0.4);
}

@media (max-width: 768px) {
  .modern-card {
    padding: 1.5rem;
  }

  .card-icon {
    width: 3rem;
    height: 3rem;
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }

  .card-title {
    font-size: 1.125rem;
  }

  .decoration-circle {
    opacity: 0.05;
  }
}

@media (prefers-reduced-motion: reduce) {
  .modern-card,
  .card-icon,
  .card-link,
  .decoration-circle {
    transition: none;
    animation: none;
  }
}

.modern-card.color-secondary .card-icon {
  background: linear-gradient(135deg, #f093fb, #f5576c);
}

.modern-card.color-accent .card-icon {
  background: linear-gradient(135deg, #f6d365, #fda085);
}

.modern-card.color-success .card-icon {
  background: linear-gradient(135deg, #10b981, #34d399);
}
</style>
