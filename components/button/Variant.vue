<script setup lang="ts">
import type { IconName } from "~/types/icon";

type Props = Partial<IconName> & {
  href?: string;
  variant?: "primary" | "secondary";
  isIconAnimated?: boolean;
};

const { href, iconName, variant = "primary" } = defineProps<Props>();

const variantClasses = computed(() => ({
  "bg-primary text-on-primary transition-colors duration-300 hover:bg-primary-lighter hover:text-white focus-visible:bg-primary-lighter focus-visible:text-white": variant === "primary",
  "border border-decorative text-foreground transition-colors duration-300 hover:bg-decorative-lightest focus-visible:bg-decorative-lightest": variant === "secondary",
  "items-center gap-x-2": iconName,
}));

const componentTag = computed(() => href ? resolveComponent("NuxtLink") : "button");

const linkAttributes = computed(() => href ? { to: href } : {});
</script>

<template>
  <component
    :is="componentTag"
    :class="variantClasses"
    class="
      group flex justify-center rounded-xl px-6 py-2

      md:text-lg
    "
    v-bind="linkAttributes"
  >
    <span class="tracking-tight">
      <slot />
    </span>
    <IconBase
      v-if="iconName"
      :icon-name="iconName"
      :class="{ 'group-focus-visible:animate-bounce-right group-hover:animate-bounce-right': isIconAnimated }"
    />
  </component>
</template>
