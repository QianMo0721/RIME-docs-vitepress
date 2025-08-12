<template>
  <DefaultTheme.Layout :class="{ 'modern-layout': !isHomePage }">
    <template #layout-top>
      <BackgroundAnimation v-if="isHomePage" />
      <div v-else class="modern-doc-background">
        <div class="gradient-orb gradient-orb-1"></div>
        <div class="gradient-orb gradient-orb-2"></div>
        <div class="gradient-orb gradient-orb-3"></div>
      </div>
    </template>

    <template #home-hero-before>
      <CustomHero v-if="isHomePage" :heroData="heroData" />
    </template>

    <template #home-hero-info v-if="isHomePage"></template>
    <template #home-hero-image v-if="isHomePage"></template>
    <template #home-hero-actions v-if="isHomePage"></template>

    <template #nav-bar-content-after>
      <slot name="nav-bar-content-after" />
    </template>

    <template #doc-before>
      <ModernDocWrapper>
        <template #default>
          <slot name="doc-before" />
        </template>
      </ModernDocWrapper>
    </template>

    <template #doc-after>
      <ModernDocWrapper>
        <template #default>
          <slot name="doc-after" />
        </template>
      </ModernDocWrapper>
    </template>
  </DefaultTheme.Layout>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute, useData } from "vitepress";
import DefaultTheme from "vitepress/theme";
import BackgroundAnimation from "./BackgroundAnimation.vue";
import CustomHero from "./CustomHero.vue";

const route = useRoute();
const { frontmatter } = useData();

const isHomePage = computed(() => {
  return route.path === "/" || route.path === "/index.html";
});

const heroData = computed(() => {
  if (!frontmatter.value?.hero) return undefined;

  return {
    name: frontmatter.value.hero.name || "",
    text: frontmatter.value.hero.text || "",
    tagline: frontmatter.value.hero.tagline || "",
    image: {
      src: frontmatter.value.hero.image?.src || "",
      alt: frontmatter.value.hero.image?.alt || "",
    },
    actions: frontmatter.value.hero.actions || [],
  };
});
</script>

<style scoped>
.modern-doc-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
  overflow: hidden;
}

.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.3;
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

@media (max-width: 768px) {
  .gradient-orb {
    filter: blur(40px);
    opacity: 0.2;
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
  .gradient-orb {
    filter: blur(30px);
    opacity: 0.15;
  }

  .gradient-orb-1 {
    width: 150px;
    height: 150px;
  }

  .gradient-orb-2 {
    width: 120px;
    height: 120px;
  }

  .gradient-orb-3 {
    width: 180px;
    height: 180px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .gradient-orb {
    animation: none;
  }
}
</style>
