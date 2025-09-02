<script setup lang="ts">
const searchQueryStore = useSearchQueryStore();

const { isSearching } = storeToRefs(searchQueryStore);
const { $reset: resetSearchQuery } = searchQueryStore;

useSeoMeta({
  title: "Blog",
  description: "A collection of posts about my journey, ideas, projects, and the lessons shaping my path forward.",
});

onUnmounted(() => {
  if (isSearching) {
    resetSearchQuery();
  }
});
</script>

<template>
  <div>
    <SectionBlogHero />
    <SectionBlogPosts />
  </div>
</template>
