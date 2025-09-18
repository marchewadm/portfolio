<script setup lang="ts">
import type { BaseLink } from "~/types/common";

type Props = BaseLink & {
  text: string;
};

defineProps<Props>();
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
    {{ text }}
  </NuxtLink>
</template>
