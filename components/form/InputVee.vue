<script setup lang="ts">
type Props = {
  name: string;
  type?: string;
  id?: string;
  placeholder?: string;
  minlength?: string;
  maxlength?: string;
  autocomplete?: string;
  tabindex?: string;
  displayError?: boolean;
};

const { name, type = "text", displayError = true } = defineProps<Props>();

const { value, errorMessage } = useField(() => name);

const shouldDisplayError = computed(() => displayError && errorMessage.value);
</script>

<template>
  <FormInputBase
    :id="id"
    v-model="value"
    class="block w-full"
    :type="type"
    :placeholder="placeholder"
    :minlength="minlength"
    :maxlength="maxlength"
    :autocomplete="autocomplete"
    :tabindex="tabindex"
    :class="{ 'border-red-700 focus:border-red-700 focus:outline-none focus:ring-red-700 hover:border-red-700': shouldDisplayError }"
  />
  <p
    v-if="shouldDisplayError"
    class="
      mt-1 text-sm font-light text-red-700

      md:text-base
    "
  >
    {{ errorMessage }}
  </p>
</template>
