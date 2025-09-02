<script setup lang="ts">
type Props = {
  asTag?: "p" | "span";
  variant?: "default" | "lg";
};

const { asTag = "p", variant = "default" } = defineProps<Props>();

const variantClasses = computed(() => ({
  "text-base md:text-xl": variant === "default",
  "text-xl md:text-2xl": variant === "lg",
}));
</script>

<template>
  <component
    :is="asTag"
    :class="variantClasses"
    class="font-medium tracking-tight"
  >
    <slot />
  </component>
</template>
