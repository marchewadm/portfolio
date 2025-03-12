<script lang="ts" setup>
const route = useRoute();

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection("blog").path(route.path).first();
});

// TODO: modify content to accept short description to be used as meta description, set title as well
</script>

<template>
  <div>
    <BaseSectionSubPage v-if="page">
      <ContentRenderer :value="page" />
    </BaseSectionSubPage>
    <p v-else>
      TODO: 404
    </p>
  </div>
</template>
