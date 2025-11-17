<template>
  <div
    class="group glass-card"
  >
    <p
      class="text-xs font-semibold tracking-wide"
      :class="labelClass"
    >
      {{ label }}
    </p>
    <div class="mt-1.5 text-sm">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
  label: string;
  variant?: "primary" | "danger" | "warning" | "success";
}

const props = withDefaults(defineProps<Props>(), {
  variant: "primary",
});

const labelClass = computed(() => {
  switch (props.variant) {
    case "danger":
      return "text-rime-error-600 dark:text-rime-error-400";
    case "warning":
      return "text-rime-warning-600 dark:text-rime-warning-400";
    case "success":
      return "text-rime-success-600 dark:text-rime-success-400";
    default:
      return "text-rime-primary-600 dark:text-rime-primary-400";
  }
});
</script>
