<script setup lang="ts">
import type { IconName } from "~/types/icon";

defineProps<IconName>();
</script>

<template>
  <button class="flex items-center justify-center">
    <IconBase :name="name" />
  </button>
</template>
