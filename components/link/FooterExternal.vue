<script setup lang="ts">
type Props = {
  href?: string;
};

const { href = "#" } = defineProps<Props>();
</script>

<template>
  <NuxtLink
    class="
      underline-offset-4

      focus-within:underline

      hover:underline
    "
    target="_blank"
    :to="href"
  >
    <slot />
  </NuxtLink>
</template>
