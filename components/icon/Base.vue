<script setup lang="ts">
import type { IconName } from "~/types/icon";

const props = defineProps<IconName>();

const getIconName = computed(() => {
  return `${ICON_PROVIDER}:${props.name}`;
});
</script>

<template>
  <Icon
    :name="getIconName"
    class="h-6 w-6"
  />
</template>
