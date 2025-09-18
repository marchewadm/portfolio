<script setup lang="ts">
const route = useRoute();

const { data: selectedWorks } = await useAsyncData(route.path, () => {
  return queryCollection("selectedWorks").order("createdAt", "DESC").all();
});
</script>

<template>
  <BaseSectionSubPage
    class="w-full"
    is-last
  >
    <TypographyHeading
      class="mb-3 opacity-0"
      data-aos="fade-up"
    >
      Selected Works
    </TypographyHeading>
    <template v-if="selectedWorks">
      <div class="lg:grid lg:gap-y-12">
        <div
          v-for="(selectedWork, idx) in selectedWorks"
          :key="selectedWork.path"
        >
          <PortfolioWorkDesktop
            :project-index="idx"
            v-bind="selectedWork"
          />
          <PortfolioWorkMobile
            :project-index="idx"
            v-bind="selectedWork"
            :selected-works-without-last="selectedWorks.length - 1"
          />
        </div>
      </div>
    </template>
  </BaseSectionSubPage>
</template>
