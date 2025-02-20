<script setup lang="ts">
type Props = {
  technologies: Array<{ name: string; homepageUrl: string }>;
};

defineProps<Props>();
</script>

<template>
  <div class="mb-6 flex flex-wrap gap-2">
    <NuxtLink
      v-for="technology in technologies"
      :key="technology.name"
      :href="technology.homepageUrl"
      class="
        border border-decorative text-foreground-lighter rounded-md px-3 py-1
        text-sm font-light transition-colors duration-300

        focus-visible:bg-decorative-lightest

        hover:bg-decorative-lightest

        md:text-base
      "
      target="_blank"
    >
      {{ technology.name }}
    </NuxtLink>
  </div>
</template>
