<script setup lang="ts">
import type { BaseLink, IconName } from "~/types/common";

type Props = BaseLink & IconName & {
  variant?: "default" | "sm" | "lg";
};

const { href, title, target } = defineProps<Props>();

const asTag = computed(() => href ? resolveComponent("NuxtLink") : "button");
const linkAttributes = computed(() => href ? { to: href, title, target } : {});
</script>

<template>
  <component
    :is="asTag"
    class="flex items-center justify-center"
    v-bind="linkAttributes"
  >
    <BaseIcon
      :icon-name="iconName"
      :variant="variant"
    />
  </component>
</template>
