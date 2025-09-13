<script setup lang="ts">
import type { NuxtError } from "#app";

const { error } = defineProps<{ error: NuxtError }>();

const errorMessage = computed(() => error.statusCode === 404 ? "The page you were looking for was not found." : "An unexpected error has occurred.");
</script>

<template>
  <NuxtLayout>
    <SectionErrorContent :error-message="errorMessage" />
  </NuxtLayout>
</template>
