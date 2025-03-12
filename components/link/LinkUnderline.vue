<script setup lang="ts">
import type { BaseLink } from "~/types/common";

defineProps<BaseLink>();
</script>

<template>
  <NuxtLink
    class="
      underline-offset-4

      focus-visible:underline

      hover:underline
    "
    :to="href"
    :title="title"
    :target="target"
  >
    <slot />
  </NuxtLink>
</template>
