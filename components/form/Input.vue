<script setup lang="ts">
const modelValue = defineModel();
</script>

<template>
  <input
    v-model="modelValue"
    class="
      border p-3 border-decorative-lighter rounded-xl font-light
      placeholder-foreground-lightest

      focus:outline focus:outline-2 focus:outline-primary

      md:text-lg
    "
  >
</template>
