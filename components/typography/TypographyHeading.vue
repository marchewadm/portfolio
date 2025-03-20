<script setup lang="ts">
type Props = {
  asTag?: "h1" | "h2";
  id?: string;
};

const { asTag = "h2" } = defineProps<Props>();

const variantClasses = computed(() => ({
  "text-2xl md:text-5xl": asTag === "h1",
  "text-2xl md:text-4xl": asTag === "h2",
}));
</script>

<template>
  <component
    :is="asTag"
    :id="id"
    :class="variantClasses"
    class="font-medium tracking-tight"
  >
    <slot />
  </component>
</template>
