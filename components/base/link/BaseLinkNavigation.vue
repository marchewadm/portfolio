<script setup lang="ts">
import type { BaseLink } from "~/types/common";

defineProps<BaseLink>();
</script>

<template>
  <NuxtLink
    class="font-light tracking-tight"
    :to="href"
    :title="title"
    :target="target"
  >
    <slot />
  </NuxtLink>
</template>
