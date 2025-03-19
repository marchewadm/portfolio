<script setup lang="ts">
import type { BaseFormLabel } from "~/types/common";

defineProps<BaseFormLabel>();
</script>

<template>
  <label
    class="
      mb-2 inline-block w-full font-medium

      md:w-fit md:text-lg
    "
    :for="fieldId"
  >
    <slot />
  </label>
</template>
