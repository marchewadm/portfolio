<script setup lang="ts">
import type { IconName } from "~/types/icon";

defineProps<IconName>();
</script>

<template>
  <button class="flex items-center justify-center">
    <IconBase :icon-name="iconName" />
  </button>
</template>
