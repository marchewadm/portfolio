<script setup lang="ts">
const searchQueryStore = useSearchQueryStore();

const { isSearching } = storeToRefs(searchQueryStore);
const { $reset: resetSearchQuery } = searchQueryStore;

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
