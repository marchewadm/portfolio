<script setup lang="ts">
import type { IconName } from "~/types/icon";

type Props = IconName & {
  size?: "default" | "sm" | "lg";
  provider?: "default" | "tech-logo";
};

const { iconName, size = "default", provider = "default" } = defineProps<Props>();

const getIconName = computed(() => {
  const iconProvider = provider === "default" ? UI_ICON_PROVIDER : TECH_ICON_PROVIDER;
  return `${iconProvider}:${iconName}`;
});

const variantClasses = computed(() => ({
  "h-6 w-6": size === "default",
  "h-5 w-5": size === "sm",
  "h-8 w-8": size === "lg",
}));
</script>

<template>
  <Icon
    :name="getIconName"
    :class="variantClasses"
  />
</template>
