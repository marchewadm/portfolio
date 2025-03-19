<script setup lang="ts">
import type { BaseButtonVariant } from "~/types/common";

const { href, title, variant = "primary", target } = defineProps<BaseButtonVariant>();

const asTag = computed(() => href ? resolveComponent("NuxtLink") : "button");
const linkAttributes = computed(() => href ? { to: href, title, target } : {});

const variantClasses = computed(() => ({
  "bg-primary text-on-primary hover:bg-primary-lighter hover:text-white focus-visible:bg-primary-lighter focus-visible:text-white": variant === "primary",
  "border border-decorative text-foreground hover:bg-decorative-lightest focus-visible:bg-decorative-lightest": variant === "secondary",
}));
</script>

<template>
  <component
    :is="asTag"
    :class="variantClasses"
    class="
      flex justify-center rounded-xl px-6 py-2 tracking-tight transition-all
      duration-300

      active:scale-95

      md:text-lg md:active:scale-100
    "
    v-bind="linkAttributes"
  >
    <slot />
  </component>
</template>
