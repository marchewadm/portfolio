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
          <AccordionTrigger as-child>
            <div class="group cursor-pointer">
              <div class="flex justify-between">
                <TypographyTitle>
                  {{ selectedWork.title }}
                </TypographyTitle>
                <IconBase
                  class="
                    text-decorative transition-transform duration-300

                    group-data-[state=open]:rotate-180
                  "
                  icon-name="chevron-down"
                />
              </div>
              <TypographyParagraph class="text-foreground-lighter">
                {{ selectedWork.subtitle }}
              </TypographyParagraph>
            </div>
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
            :to="selectedWork.path"
            class="
              group mb-2 mt-3 block overflow-hidden rounded-xl

              md:mt-4
            "
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
          >
            Read more
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
          :href="technology.homepageUrl"
          render-as="link"
          variant="filled"
          data-aos="zoom-in"
          :data-aos-delay="idx * 100"
        >
          {{ technology.name }}
        </ButtonTag>
      </div>
    </article>
  </AccordionRoot>
</template>
