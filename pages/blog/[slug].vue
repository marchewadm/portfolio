<script lang="ts" setup>
const route = useRoute();

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection("blog").path(route.path).first();
});

// TODO: modify content to accept short description to be used as meta description, set title as well
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
