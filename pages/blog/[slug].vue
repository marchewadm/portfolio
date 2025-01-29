<script lang="ts" setup>
const route = useRoute();

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection("blog").path(route.path).first();
});
</script>

<template>
  <NuxtLayout v-if="page">
    <SectionSubPageBase>
      <ContentRenderer :value="page" />
    </SectionSubPageBase>
  </NuxtLayout>
  <p v-else>
    TODO: 404
  </p>
</template>
