<template>  <div
    class="prose dark:prose-invert max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
// This component is now a simple styling wrapper.
// All complex logic and animations have been removed for performance and clarity.
</script>

<style scoped>
/* Applying responsive typography and layout via Tailwind classes.
   The 'prose' class from @tailwindcss/typography handles the detailed styling
   of headers, paragraphs, lists, code blocks, etc.
   This ensures a clean, modern, and readable documentation page. */
.prose {
  line-height: 1.75;
}
</style>
