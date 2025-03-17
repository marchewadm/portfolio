<script setup lang="ts">
import type { IconName } from "~/types/common";

type Props = IconName & {
  variant?: "default" | "sm" | "lg";
  provider?: "default" | "tech-logo";
};

const { iconName, variant = "default", provider = "default" } = defineProps<Props>();

const resolvedIconName = computed(() => {
  const iconProvider = provider === "default" ? UI_ICON_PROVIDER : TECH_ICON_PROVIDER;
  return `${iconProvider}:${iconName}`;
});

const variantClasses = computed(() => ({
  "h-6 w-6": variant === "default",
  "h-5 w-5": variant === "sm",
  "h-8 w-8": variant === "lg",
}));
</script>

<template>
  <Icon
    :name="resolvedIconName"
    :class="variantClasses"
  />
</template>
