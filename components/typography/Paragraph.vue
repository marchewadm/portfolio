<script setup lang="ts">
type Props = {
  variant?: "default" | "sm" | "thin";
};

const { variant = "default" } = defineProps<Props>();

const variantClasses = computed(() => ({
  "text-base font-light tracking-tight md:text-lg": variant === "default",
  "text-sm font-light tracking-tight": variant === "sm",
  "text-sm font-thin text-foreground-lighter md:text-base": variant === "thin",
}));
</script>

<template>
  <p
    :class="variantClasses"
  >
    <slot />
  </p>
</template>
