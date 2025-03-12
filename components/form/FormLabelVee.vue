<script setup lang="ts">
import type { BaseFormLabel } from "~/types/common";

type Props = BaseFormLabel & {
  name: string;
};

defineProps<Props>();

const { errors } = useFormContext();
</script>

<template>
  <BaseFormLabel
    :field-id="fieldId"
    :class="{ 'text-red-700': errors[name] }"
  >
    <slot />
  </BaseFormLabel>
</template>
