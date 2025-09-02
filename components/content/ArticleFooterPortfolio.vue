<script setup lang="ts">
type Props = {
  demoUrl?: string;
  sourceCodeUrl?: string;
};

defineProps<Props>();
</script>

<template>
  <ListLinkDemoAndSource
    :demo-url="demoUrl"
    :source-code-url="sourceCodeUrl"
    :bordered="true"
  />
</template>
