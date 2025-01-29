<script setup lang="ts">
const searchQuery = ref("");

function onUpdateSearchQuery(query: string) {
  searchQuery.value = query;
}
</script>

<template>
  <div>
    <SectionBlogHero @update:search-query="onUpdateSearchQuery" />
    <SectionBlogPosts :search-query="searchQuery" />
  </div>
</template>
