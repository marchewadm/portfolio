<script setup lang="ts">
import type { BaseLink } from "~/types/common";

type Props = BaseLink & {
  variant?: "filled" | "outline";
};

const { title, href, variant = "outline", target = "_blank" } = defineProps<Props>();

const asTag = computed(() => href ? resolveComponent("NuxtLink") : "button");

const linkAttributes = computed(() => href ? { to: href, title, target } : {});

const variantClasses = computed(() => ({
  "bg-decorative-lightest": variant === "filled",
  "transition-colors duration-300 hover:bg-decorative-lightest focus-visible:bg-decorative-lightest": variant === "outline",
}));
</script>

<template>
  <component
    :is="asTag"
    :class="variantClasses"
    class="
      border border-decorative text-foreground-lighter rounded-md px-3 py-1
      text-sm font-light

      md:text-base
    "
    v-bind="linkAttributes"
  >
    <slot />
  </component>
</template>
