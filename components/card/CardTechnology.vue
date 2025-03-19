<script setup lang="ts">
import type { BaseLink, IconName } from "~/types/common";

type Props = BaseLink & IconName;

defineProps<Props>();
</script>

<template>
  <NuxtLink
    class="
      flex flex-col shadow-xs-below h-20 w-20 items-center justify-evenly
      rounded-lg p-2 transition-all duration-300

      hover:scale-95

      md:h-24 md:w-24
    "
    :href="href"
    :title="title"
    :target="target"
  >
    <span
      class="
        text-center font-light text-foreground-lighter text-xs

        md:text-sm
      "
    >
      <slot />
    </span>
    <BaseIcon
      variant="lg"
      provider="tech-logo"
      :icon-name="iconName"
    />
  </NuxtLink>
</template>
