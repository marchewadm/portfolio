<script setup lang="ts">
type Props = {
  href?: string;
  iconName: string;
};

const { href = "#" } = defineProps<Props>();
</script>

<template>
  <NuxtLink
    class="
      flex w-fit items-center gap-x-3 transition-colors duration-300

      focus-visible:text-foreground-lighter

      hover:text-foreground-lighter
    "
    target="_blank"
    :to="href"
  >
    <IconBase
      size="lg"
      :icon-name="iconName"
    />
    <span
      class="
        font-light tracking-tight

        md:text-lg
      "
    >
      <slot />
    </span>
  </NuxtLink>
</template>
