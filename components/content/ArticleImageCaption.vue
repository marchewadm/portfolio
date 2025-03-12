<script setup lang="ts">
type Props = {
  src: string;
  alt: string;
  caption: string;
};

defineProps<Props>();
</script>

<template>
  <ImageCaption
    class="my-3"
    :src="src"
    :alt="alt"
    :caption="caption"
  />
</template>
