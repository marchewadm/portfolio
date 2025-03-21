<script setup lang="ts">
type Props = {
  variant?: "default" | "sm" | "muted";
};

const { variant = "default" } = defineProps<Props>();

const variantClasses = computed(() => {
  if (variant === "default") {
    return "text-base md:text-lg";
  }

  const commonClasses = "text-sm font-light md:text-base";
  const colorClass = variant === "sm" ? "text-foreground-lighter" : "text-foreground-lightest";

  return `${commonClasses} ${colorClass}`;
});
</script>

<template>
  <p
    class="font-light tracking-tight"
    :class="variantClasses"
  >
    <slot />
  </p>
</template>
