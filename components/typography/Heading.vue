<script setup lang="ts">
type Props = {
  tag?: "h1" | "h2";
};

const { tag = "h2" } = defineProps<Props>();
</script>

<template>
  <component
    :is="tag"
    class="text-2xl font-medium"
  >
    <slot />
  </component>
</template>
