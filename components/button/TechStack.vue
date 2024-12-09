<script setup lang="ts">
type Props = {
  href?: string;
};

const { href = "#" } = defineProps<Props>();
</script>

<template>
  <NuxtLink
    :to="href"
    class="
      border border-decorative text-foreground-lighter bg-decorative-lightest
      rounded-md px-3 py-1 text-sm font-light
    "
  >
    <slot />
  </NuxtLink>
</template>
