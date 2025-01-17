<script setup lang="ts">
import type { IconName } from "~/types/icon";

type Props = {
  href: string;
} & IconName;

defineProps<Props>();
</script>

<template>
  <NuxtLink
    class="
      flex flex-col shadow-xs-below h-20 w-20 items-center justify-evenly
      rounded-lg p-2
    "
    target="_blank"
    :href="href"
  >
    <span
      class="
        text-center font-light text-foreground-lighter text-xs

        md:text-sm
      "
    >
      <slot />
    </span>
    <IconBase
      size="lg"
      provider="tech-logo"
      :icon-name="iconName"
    />
  </NuxtLink>
</template>
