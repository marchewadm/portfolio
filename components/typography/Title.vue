<script setup lang="ts">
type Props = {
  variant?: "default" | "lg";
};

const { variant = "default" } = defineProps<Props>();

const variantClasses = computed(() => ({
  "text-base md:text-xl": variant === "default",
  "text-xl md:text-2xl": variant === "lg",
}));
</script>

<template>
  <p
    class="font-medium tracking-tight"
    :class="variantClasses"
  >
    <slot />
  </p>
</template>
