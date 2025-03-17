<script setup lang="ts">
import type { BaseLink, IconName } from "~/types/common";

type Props = BaseLink & IconName;

defineProps<Props>();
</script>

<template>
  <NuxtLink
    class="
      flex w-fit items-center gap-x-3 transition-colors duration-300

      focus-visible:text-foreground-lighter

      hover:text-foreground-lighter
    "
    :to="href"
    :title="title"
    :target="target"
  >
    <BaseIcon
      variant="lg"
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
