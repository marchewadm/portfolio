<script setup lang="ts">
type Props = {
  href?: string;
  iconName: string;
};

const { href = "#" } = defineProps<Props>();
</script>

<template>
  <NuxtLink
    class="flex items-center gap-x-3"
    target="_blank"
    :to="href"
  >
    <IconBase
      size="lg"
      :icon-name="iconName"
    />
    <span>
      <slot />
    </span>
  </NuxtLink>
</template>
