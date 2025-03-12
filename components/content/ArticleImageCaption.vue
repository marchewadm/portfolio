<script setup lang="ts">
import type { ImageCaption } from "~/types/common";

defineProps<ImageCaption>();
</script>

<template>
  <ImageCaption
    class="my-3"
    :src="src"
    :alt="alt"
    :caption="caption"
  />
</template>
