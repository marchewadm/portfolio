<script setup lang="ts">
type Props = {
  href?: string;
  title?: string;
  variant?: "filled" | "outline";
};

const { title, href, variant = "outline" } = defineProps<Props>();

const componentTag = computed(() => href ? resolveComponent("NuxtLink") : "button");

const linkAttributes = computed(() => href ? { target: "_blank", to: href, title } : {});

const variantClasses = computed(() => ({
  "bg-decorative-lightest": variant === "filled",
  "transition-colors duration-300 hover:bg-decorative-lightest focus-visible:bg-decorative-lightest": variant === "outline",
}));
</script>

<template>
  <component
    :is="componentTag"
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
