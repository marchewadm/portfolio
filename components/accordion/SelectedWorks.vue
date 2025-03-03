<script setup lang="ts">
const route = useRoute();

const { data: selectedWorks } = await useAsyncData(route.path, () => {
  return queryCollection("selectedWorks").order("createdAt", "DESC").all();
});
</script>

<template>
  <AccordionRoot
    class="w-full"
    type="single"
    :collapsible="true"
  >
    <article
      v-for="selectedWork in selectedWorks"
      :key="selectedWork.path"
      class="opacity-0"
      data-aos="fade-up"
    >
      <AccordionItem :value="selectedWork.path">
        <AccordionHeader as-child>
          <AccordionTrigger class="group flex w-full flex-col">
            <span class="flex justify-between">
              <span
                class="
                  text-base font-medium tracking-tight

                  md:text-xl
                "
              >
                {{ selectedWork.title }}
              </span>
              <IconBase
                class="
                  text-decorative transition-transform duration-300

                  group-data-[state=open]:rotate-180
                "
                icon-name="chevron-down"
              />
            </span>
            <span
              class="
                font-light tracking-tight text-foreground-lighter text-left

                md:text-lg
              "
            >
              {{ selectedWork.subtitle }}
            </span>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent
          class="
            overflow-hidden

            data-[state=closed]:animate-slide-up

            data-[state=open]:animate-slide-down
          "
        >
          <NuxtLink
            class="
              group mb-2 mt-3 block overflow-hidden rounded-xl

              md:mt-4
            "
            :to="selectedWork.path"
            :title="`Read more about ${selectedWork.title}`"
          >
            <NuxtImg
              class="
                h-52 w-full rounded-xl object-cover grayscale transition-all
                duration-300

                group-focus-visible:scale-110 group-focus-visible:grayscale-0

                hover:scale-110 hover:grayscale-0

                lg:h-[500px]

                md:h-96
              "
              loading="lazy"
              :src="selectedWork.image"
              :alt="selectedWork.alt"
            />
          </NuxtLink>
          <TypographyParagraph class="mb-3 text-justify">
            {{ selectedWork.description }}
          </TypographyParagraph>
          <ButtonVariant
            class="
              mx-auto w-full

              md:w-fit
            "
            variant="secondary"
            :href="selectedWork.path"
            :title="`Read more about ${selectedWork.title}`"
          >
            More details
          </ButtonVariant>
        </AccordionContent>
      </AccordionItem>
      <div
        class="
          mb-3 flex flex-wrap gap-2 border-b border-decorative py-3

          md:pb-3 md:pt-4
        "
      >
        <ButtonTag
          v-for="(technology, idx) in selectedWork.technologies"
          :key="technology.name"
          variant="filled"
          data-aos="zoom-in"
          :href="technology.homepageUrl"
          :data-aos-delay="idx * 100"
          :title="`Open the ${technology.name} website in a new tab`"
        >
          {{ technology.name }}
        </ButtonTag>
      </div>
    </article>
  </AccordionRoot>
</template>
