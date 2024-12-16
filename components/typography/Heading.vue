<script setup lang="ts">
type Props = {
  tag?: "h1" | "h2";
};

const { tag = "h2" } = defineProps<Props>();

const variantClasses = computed(() => ({
  "text-2xl md:text-5xl": tag === "h1",
  "text-2xl md:text-4xl": tag === "h2",
}));
</script>

<template>
  <component
    :is="tag"
    class="font-medium tracking-tight"
    :class="variantClasses"
  >
    <slot />
  </component>
</template>
