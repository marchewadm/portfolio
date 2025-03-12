<script setup lang="ts">
const route = useRoute();

const { data: selectedWorks } = await useAsyncData(route.path, () => {
  return queryCollection("selectedWorks").order("createdAt", "DESC").all();
});
</script>

<template>
  <BaseSectionSubPage class="w-full">
    <TypographyHeading
      id="section-selected-works-portfolio"
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
            :title="selectedWork.title"
            :subtitle="selectedWork.subtitle"
            :description="selectedWork.description"
            :path="selectedWork.path"
            :image="selectedWork.image"
            :alt="selectedWork.alt"
            :technologies="selectedWork.technologies"
            :demo-url="selectedWork.demoUrl"
            :source-code-url="selectedWork.sourceCodeUrl"
          />
          <PortfolioWorkMobile
            :project-index="idx"
            :title="selectedWork.title"
            :subtitle="selectedWork.subtitle"
            :description="selectedWork.description"
            :path="selectedWork.path"
            :image="selectedWork.image"
            :alt="selectedWork.alt"
            :technologies="selectedWork.technologies"
            :demo-url="selectedWork.demoUrl"
            :source-code-url="selectedWork.sourceCodeUrl"
            :selected-works-without-last="selectedWorks.length - 1"
          />
        </div>
      </div>
    </template>
  </BaseSectionSubPage>
</template>
