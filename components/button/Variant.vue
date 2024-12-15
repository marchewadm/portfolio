<script setup lang="ts">
import type { IconName } from "~/types/icon";

type Props = Partial<IconName> & {
  variant?: "primary" | "secondary";
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
    class="flex justify-center rounded-xl px-6 py-2"
    :class="variantClasses"
  >
    <span>
      <slot />
    </span>
    <IconBase
      v-if="iconName"
      :icon-name="iconName"
    />
  </button>
</template>
