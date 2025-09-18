<script lang="ts" setup>
const route = useRoute();

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection("selectedWorks").path(route.path).first();
});
</script>

<template>
  <div v-if="page">
    <BaseSectionSubPage is-last>
      <ContentRenderer :value="page" />
    </BaseSectionSubPage>
  </div>
  <SectionErrorContent
    v-else
    error-message="The page you were looking for was not found."
  />
</template>
