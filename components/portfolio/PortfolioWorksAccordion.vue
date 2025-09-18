<script setup lang="ts">
const route = useRoute();

const { data: selectedWorks } = await useAsyncData(route.path, () => {
  return queryCollection("selectedWorks").order("createdAt", "DESC").limit(3).all();
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
            <span class="flex items-center justify-between">
              <TypographyTitle as-tag="span">
                {{ selectedWork.title }}
              </TypographyTitle>
              <IconAccordionToggle />
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
            <CldImage
              class="
                h-52 w-full rounded-xl object-cover grayscale transition-all
                duration-300

                group-focus-visible:scale-110 group-focus-visible:grayscale-0

                hover:scale-110 hover:grayscale-0

                lg:h-[500px]

                md:h-96
              "
              width="1200"
              height="600"
              :alt="selectedWork.alt"
              :src="selectedWork.image"
            />
          </NuxtLink>
          <TypographyParagraph class="mb-3">
            {{ selectedWork.description }}
          </TypographyParagraph>
          <BaseButtonVariant
            class="
              mx-auto w-full

              md:w-fit
            "
            variant="secondary"
            :href="selectedWork.path"
            :title="`Read more about ${selectedWork.title}`"
          >
            More details
          </BaseButtonVariant>
        </AccordionContent>
      </AccordionItem>
      <ListButtonWrapped
        class="
          mb-3 border-b border-decorative py-3

          md:pb-3 md:pt-4
        "
      >
        <li
          v-for="(technology, idx) in selectedWork.technologies"
          :key="technology.name"
          :data-aos-delay="idx * 100"
          data-aos="zoom-in"
        >
          <ButtonTag
            variant="filled"
            class="inline-block"
            :href="technology.homepageUrl"
            :title="`Open the ${technology.name} website in a new tab`"
          >
            {{ technology.name }}
          </ButtonTag>
        </li>
      </ListButtonWrapped>
    </article>
  </AccordionRoot>
</template>
