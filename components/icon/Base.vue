<script setup lang="ts">
import type { IconName } from "~/types/icon";

type Props = IconName & {
  size?: "default" | "lg";
};

const { iconName, size = "default" } = defineProps<Props>();

const getIconName = computed(() => `${ICON_PROVIDER}:${iconName}`);

const variantClasses = computed(() => ({
  "h-6 w-6": size === "default",
  "h-8 w-8": size === "lg",
}));
</script>

<template>
  <Icon
    :name="getIconName"
    :class="variantClasses"
  />
</template>
