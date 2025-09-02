<script setup lang="ts">
const modelValue = defineModel();
</script>

<template>
  <input
    v-model="modelValue"
    class="
      border p-3 border-decorative-lighter rounded-xl font-light
      placeholder-foreground-lightest outline-none transition duration-300
      ease-in-out

      focus:border-primary focus:outline-none focus:ring-primary

      hover:border-primary

      md:text-lg
    "
  >
</template>
