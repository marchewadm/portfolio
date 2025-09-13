<script lang="ts" setup>
const route = useRoute();

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection("selectedWorks").path(route.path).first();
});
</script>

<template>
  <div>
    <BaseSectionSubPage
      v-if="page"
      is-last
    >
      <ContentRenderer :value="page" />
    </BaseSectionSubPage>
    <p v-else>
      TODO: 404
    </p>
  </div>
</template>
