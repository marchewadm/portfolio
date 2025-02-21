<script setup lang="ts">
type Props = {
  fieldId: string;
};

defineProps<Props>();
</script>

<template>
  <label
    class="
      mb-2 inline-block font-medium

      md:text-lg
    "
    :for="fieldId"
  >
    <slot />
  </label>
</template>
