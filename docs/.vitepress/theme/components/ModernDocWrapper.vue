<template>
  <div
    class="prose dark:prose-invert max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
  >
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.prose {
  line-height: 1.75;
}
</style>
