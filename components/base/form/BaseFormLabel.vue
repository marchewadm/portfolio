<script setup lang="ts">
import type { BaseFormLabel } from "~/types/common";

defineProps<BaseFormLabel>();
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
