<script setup lang="ts">
type Props = {
  tags: Array<{ name: string }>;
};

defineProps<Props>();

const { updateSearchQuery } = useSearchQueryStore();
</script>

<template>
  <div class="mb-6 flex flex-wrap gap-2">
    <NuxtLink
      v-for="tag in tags"
      :key="tag.name"
      href="/blog"
      class="
        border border-decorative text-foreground-lighter rounded-md px-3 py-1
        text-sm font-light transition-colors duration-300

        focus-visible:bg-decorative-lightest

        hover:bg-decorative-lightest

        md:text-base
      "
      @click="updateSearchQuery(tag.name)"
    >
      {{ tag.name }}
    </NuxtLink>
  </div>
</template>
