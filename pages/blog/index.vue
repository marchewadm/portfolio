<script setup lang="ts">
const searchQuery = ref("");

function onUpdateSearchQuery(query: string) {
  searchQuery.value = query;
}
</script>

<template>
  <NuxtLayout>
    <SectionBlogHero @update:search-query="onUpdateSearchQuery" />
    <SectionBlogPosts :search-query="searchQuery" />
  </NuxtLayout>
</template>
