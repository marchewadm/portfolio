<script setup lang="ts">
const searchQuery = useSearchQuery();

onUnmounted(() => {
  if (searchQuery.value.length > 0) {
    searchQuery.value = "";
  }
});
</script>

<template>
  <div>
    <SectionBlogHero />
    <SectionBlogPosts />
  </div>
</template>
