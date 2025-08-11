<template>
  <DefaultTheme.Layout :class="{ 'modern-layout': !isHomePage }">
    <!-- 背景动画只在主页显示 -->
    <template #layout-top>
      <BackgroundAnimation v-if="isHomePage" />
      <!-- 非主页的现代化背景 -->
      <div v-else class="modern-doc-background">
        <div class="gradient-orb gradient-orb-1"></div>
        <div class="gradient-orb gradient-orb-2"></div>
        <div class="gradient-orb gradient-orb-3"></div>
      </div>
    </template>

    <!-- 自定义Hero区域 -->
    <template #home-hero-before>
      <CustomHero v-if="isHomePage" :heroData="heroData" />
    </template>

    <!-- 隐藏默认Hero -->
    <template #home-hero-info>
      <div v-if="isHomePage" style="display: none"></div>
    </template>

    <template #home-hero-image>
      <div v-if="isHomePage" style="display: none"></div>
    </template>

    <template #home-hero-actions>
      <div v-if="isHomePage" style="display: none"></div>
    </template>

    <!-- 导航栏扩展 -->
    <template #nav-bar-content-after>
      <slot name="nav-bar-content-after" />
    </template>
  </DefaultTheme.Layout>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted } from "vue";
import { useRoute, useData } from "vitepress";
import DefaultTheme from "vitepress/theme";
import BackgroundAnimation from "./BackgroundAnimation.vue";
import CustomHero from "./CustomHero.vue";

const route = useRoute();
const { frontmatter } = useData();

// 检查是否为主页
const isHomePage = computed(() => {
  return route.path === "/" || route.path === "/index.html";
});

// 获取Hero数据
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

// 深色模式侧边栏样式修复
const applySidebarDarkStyles = () => {
  const isDark = document.documentElement.classList.contains("dark");

  if (isDark) {
    // 获取所有侧边栏元素
    const sidebarItems = document.querySelectorAll(".VPSidebarItem .link");
    const sidebarTitles = document.querySelectorAll(".VPSidebarGroup .title");
    const searchButton = document.querySelector(".VPSidebar .DocSearch-Button");
    const searchPlaceholder = document.querySelector(
      ".VPSidebar .DocSearch-Button-Placeholder"
    );

    // 修改侧边栏链接颜色
    sidebarItems.forEach((item: any) => {
      item.style.color = "#f1f5f9";

      // 添加悬停事件
      item.addEventListener("mouseenter", () => {
        item.style.color = "#67e8f9";
        item.style.background =
          "linear-gradient(135deg, rgba(103, 232, 249, 0.08), rgba(125, 211, 252, 0.05))";
        item.style.borderColor = "rgba(103, 232, 249, 0.2)";
      });

      item.addEventListener("mouseleave", () => {
        if (!item.classList.contains("active")) {
          item.style.color = "#f1f5f9";
          item.style.background = "";
          item.style.borderColor = "";
        }
      });

      // 处理激活状态
      if (item.classList.contains("active")) {
        item.style.color = "#67e8f9";
        item.style.background =
          "linear-gradient(135deg, rgba(103, 232, 249, 0.12), rgba(125, 211, 252, 0.08))";
        item.style.borderColor = "rgba(103, 232, 249, 0.25)";
      }
    });

    // 修改侧边栏分组标题颜色
    sidebarTitles.forEach((title: any) => {
      title.style.color = "#7dd3fc";
      title.style.backgroundColor = "rgba(125, 211, 252, 0.08)";
      title.style.borderColor = "rgba(125, 211, 252, 0.15)";

      if (title.closest(".VPSidebarGroup").classList.contains("has-active")) {
        title.style.color = "#67e8f9";
      }
    });

    // 修改搜索框样式
    if (searchButton) {
      (searchButton as any).style.background = "rgba(30, 41, 59, 0.8)";
      (searchButton as any).style.border =
        "1.5px solid rgba(103, 232, 249, 0.25)";
      (searchButton as any).style.color = "#f1f5f9";
    }

    if (searchPlaceholder) {
      (searchPlaceholder as any).style.color = "#cbd5e1";
    }
  }
};

// 监听深色模式变化
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === "attributes" && mutation.attributeName === "class") {
      setTimeout(applySidebarDarkStyles, 100); // 延迟执行确保DOM更新完成
    }
  });
});

// 标题点击处理函数
const handleHeadingClick = () => {
  // 为所有标题添加点击事件
  const headings = document.querySelectorAll(
    ".vp-doc h1, .vp-doc h2, .vp-doc h3, .vp-doc h4, .vp-doc h5, .vp-doc h6, .doc-content h1, .doc-content h2, .doc-content h3, .doc-content h4, .doc-content h5, .doc-content h6"
  );

  headings.forEach((heading: any) => {
    // 移除之前可能存在的点击事件
    heading.style.cursor = "pointer";

    // 添加新的点击事件
    const clickHandler = (e: Event) => {
      e.preventDefault();

      // 获取标题的ID
      const id = heading.id;
      if (id) {
        // 更新URL hash
        window.history.pushState(null, "", `#${id}`);

        // 滚动到标题位置
        heading.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        // 触发hashchange事件，确保其他组件能感知到URL变化
        window.dispatchEvent(new HashChangeEvent("hashchange"));
      }
    };

    // 移除旧的事件监听器（如果存在）
    heading.removeEventListener("click", heading._clickHandler);

    // 添加新的事件监听器
    heading.addEventListener("click", clickHandler);

    // 保存引用以便后续移除
    heading._clickHandler = clickHandler;
  });
};

// 确保汉堡菜单按钮可见性正常的函数
const ensureHamburgerMenuVisible = () => {
  // 仅确保汉堡菜单按钮可见，不干扰VitePress原生事件处理
  const hamburgerButton = document.querySelector(
    ".VPNavBarHamburger"
  ) as HTMLElement;

  if (hamburgerButton) {
    // 确保按钮可见（仅处理样式，不处理事件）
    hamburgerButton.style.display = "block";
    hamburgerButton.style.visibility = "visible";
    hamburgerButton.style.opacity = "1";
    hamburgerButton.style.pointerEvents = "auto";
  }
};

onMounted(() => {
  // 初始应用样式
  setTimeout(applySidebarDarkStyles, 500);

  // 初始化标题点击事件
  setTimeout(handleHeadingClick, 1000);

  // 确保汉堡菜单按钮可见
  setTimeout(ensureHamburgerMenuVisible, 800);

  // 监听class变化
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });

  // 监听路由变化
  const handleRouteChange = () => {
    setTimeout(applySidebarDarkStyles, 200);
    // 路由变化时重新绑定标题点击事件
    setTimeout(handleHeadingClick, 500);
    // 确保汉堡菜单按钮可见
    setTimeout(ensureHamburgerMenuVisible, 600);
  };

  // 使用VitePress的路由事件
  if (typeof window !== "undefined") {
    window.addEventListener("hashchange", handleRouteChange);

    // 定期检查并应用样式（确保样式不会丢失）
    const styleInterval = setInterval(() => {
      applySidebarDarkStyles();
      handleHeadingClick(); // 同时检查标题点击事件
      ensureHamburgerMenuVisible(); // 确保汉堡菜单按钮可见
    }, 3000);

    // 清理定时器
    onUnmounted(() => {
      clearInterval(styleInterval);
      window.removeEventListener("hashchange", handleRouteChange);

      // 清理标题点击事件
      const headings = document.querySelectorAll(
        ".vp-doc h1, .vp-doc h2, .vp-doc h3, .vp-doc h4, .vp-doc h5, .vp-doc h6, .doc-content h1, .doc-content h2, .doc-content h3, .doc-content h4, .doc-content h5, .doc-content h6"
      );
      headings.forEach((heading: any) => {
        if (heading._clickHandler) {
          heading.removeEventListener("click", heading._clickHandler);
        }
      });
    });
  }
});

onUnmounted(() => {
  observer.disconnect();
});
</script>

<style scoped>
/* 现代化文档背景 */
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

/* 现代布局样式 */
:global(.modern-layout .VPDoc) {
  background: rgba(255, 255, 255, 0.05) !important;
  backdrop-filter: blur(20px) !important;
  -webkit-backdrop-filter: blur(20px) !important;
  border-radius: 2rem !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25),
    0 0 0 1px rgba(102, 126, 234, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1) !important;
  margin: 2rem !important;
  padding: 2rem !important;
  position: relative;
  overflow: hidden;
}

:global(.dark .modern-layout .VPDoc) {
  background: rgba(30, 41, 59, 0.6) !important;
  border-color: rgba(255, 255, 255, 0.05) !important;
}

/* 添加装饰元素 */
:global(.modern-layout .VPDoc::before) {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: linear-gradient(
    135deg,
    rgba(102, 126, 234, 0.1) 0%,
    rgba(240, 147, 251, 0.05) 50%,
    rgba(246, 211, 101, 0.1) 100%
  );
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 1;
}

:global(.modern-layout .VPDoc::after) {
  content: "";
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
  z-index: 1;
}

/* 内容区域相对定位 */
:global(.modern-layout .vp-doc) {
  position: relative;
  z-index: 2;
  padding-top: 4rem !important;
}

/* 响应式 */
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

  :global(.modern-layout .VPDoc) {
    margin: 0.5rem !important;
    padding: 1rem !important;
    border-radius: 1.5rem !important;
    max-width: calc(100vw - 1rem) !important;
    box-sizing: border-box !important;
    overflow-x: hidden !important;
  }
}

/* 移动端专门优化 */
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

  :global(.modern-layout .VPDoc) {
    margin: 0.25rem !important;
    padding: 0.75rem !important;
    border-radius: 1rem !important;
    max-width: calc(100vw - 0.5rem) !important;
    box-sizing: border-box !important;
    overflow-x: hidden !important;
  }

  /* 确保现代化布局的内容区域不超出 */
  :global(.modern-layout .vp-doc) {
    padding-top: 2rem !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
}

/* 性能优化 */
@media (prefers-reduced-motion: reduce) {
  .gradient-orb {
    animation: none;
  }
}
</style>
