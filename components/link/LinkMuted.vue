<script setup lang="ts">
import type { BaseLink } from "~/types/common";

defineProps<BaseLink>();
</script>

<template>
  <BaseLinkNavigation
    class="
      transition-colors duration-300 text-foreground-lighter

      focus-visible:text-foreground-lightest

      hover:text-foreground-lightest

      md:text-lg
    "
    :href="href"
    :title="title"
    :target="target"
  >
    <slot />
  </BaseLinkNavigation>
</template>
