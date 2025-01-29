<script lang="ts" setup>
const route = useRoute();

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection("blog").path(route.path).first();
});
</script>

<template>
  <div>
    <SectionSubPageBase v-if="page">
      <ContentRenderer :value="page" />
    </SectionSubPageBase>
    <p v-else>
      TODO: 404
    </p>
  </div>
</template>
