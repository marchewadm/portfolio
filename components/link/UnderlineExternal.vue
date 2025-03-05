<script setup lang="ts">
type Props = {
  href: string;
  title: string;
};

defineProps<Props>();
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
    :title="title"
  >
    <slot />
  </NuxtLink>
</template>
