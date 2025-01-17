<script setup lang="ts">
type Props = {
  href?: string;
  variant?: "filled" | "outline";
  renderAs?: "link" | "button";
};

const { href = "#", variant = "outline", renderAs = "link" } = defineProps<Props>();

const componentTag = computed(() => renderAs === "link" ? resolveComponent("NuxtLink") : "button");

const linkAttributes = computed(() => renderAs === "link" ? { target: "_blank", to: href } : {});

const variantClasses = computed(() => ({
  "bg-decorative-lightest": variant === "filled",
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
