<script setup lang="ts">
type Props = {
  href?: string;
  target?: string;
};

const { href = "#", target = "_self" } = defineProps<Props>();
</script>

<template>
  <NuxtLink
    class="font-light tracking-tight text-foreground-lighter"
    :target="target"
    :to="href"
  >
    <slot />
  </NuxtLink>
</template>
