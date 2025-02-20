<script setup lang="ts">
import { computed, useRuntimeConfig } from "#imports";

const props = defineProps<{ id?: string }>();

const { headings } = useRuntimeConfig().public.mdc;
const generate = computed(() => props.id && ((typeof headings?.anchorLinks === "boolean" && headings?.anchorLinks === true) || (typeof headings?.anchorLinks === "object" && headings?.anchorLinks?.h1)));
</script>

<template>
  <h1
    :id="props.id"
    class="
      mb-2 text-2xl font-medium tracking-tight

      md:mb-3 md:text-5xl
    "
  >
    <a
      v-if="generate"
      :href="`#${props.id}`"
    >
      <slot />
    </a>
    <slot v-else />
  </h1>
</template>
