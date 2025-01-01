<script setup lang="ts">
import type { IconName } from "~/types/icon";

type Props = Partial<IconName> & {
  variant?: "primary" | "secondary";
  isIconAnimated?: boolean;
};

const { iconName, variant = "primary" } = defineProps<Props>();

const variantClasses = computed(() => ({
  "bg-primary text-on-primary": variant === "primary",
  "border border-decorative text-foreground": variant === "secondary",
  "items-center gap-x-2": iconName,
}));
</script>

<template>
  <button
    class="
      group flex justify-center rounded-xl px-6 py-2

      md:text-lg
    "
    :class="variantClasses"
  >
    <span class="tracking-tight">
      <slot />
    </span>
    <IconBase
      v-if="iconName"
      :icon-name="iconName"
      :class="{ 'group-hover:animate-bounce-right': isIconAnimated }"
    />
  </button>
</template>
