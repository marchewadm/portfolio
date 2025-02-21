<script setup lang="ts">
type Props = {
  name: string;
  fieldId: string;
};

defineProps<Props>();

const { errors } = useFormContext();
</script>

<template>
  <FormLabelBase
    :field-id="fieldId"
    :class="{ 'text-red-700': errors[name] }"
  >
    <slot />
  </FormLabelBase>
</template>
