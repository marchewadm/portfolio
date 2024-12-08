<script setup lang="ts">
type Props = {
  variant?: "default" | "lg";
};

const { variant = "default" } = defineProps<Props>();

const variantClasses = computed(() => ({
  "text-base": variant === "default",
  "text-xl": variant === "lg",
}));
</script>

<template>
  <p
    class="font-medium"
    :class="variantClasses"
  >
    <slot />
  </p>
</template>
