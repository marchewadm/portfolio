import { defineStore } from "pinia";

export const useSearchQueryStore = defineStore("searchQueryStore", () => {
  const searchQuery = ref("");

  const isSearching = computed(() => searchQuery.value.length > 0);

  function $reset() {
    searchQuery.value = "";
  }

  function updateSearchQuery(query: string) {
    searchQuery.value = query;
  }

  return {
    searchQuery,
    isSearching,
    $reset,
    updateSearchQuery,
  };
});
