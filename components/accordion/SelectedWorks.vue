<script setup lang="ts">
const route = useRoute();

const { data: portfolios } = await useAsyncData(route.path, () => {
  return queryCollection("portfolio").order("createdAt", "DESC").all();
});
</script>

<template>
  <AccordionRoot
    class="w-full"
    type="single"
    :collapsible="true"
  >
    <article
      v-for="portfolio in portfolios"
      :key="portfolio.path"
    >
      <AccordionItem :value="portfolio.path">
        <AccordionHeader as-child>
          <AccordionTrigger as-child>
            <div class="group cursor-pointer">
              <div class="flex justify-between">
                <TypographyTitle>
                  {{ portfolio.title }}
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
                {{ portfolio.subtitle }}
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
          <NuxtImg
            class="
              mb-2 mt-3 h-52 w-full rounded-xl object-cover grayscale
              transition-all duration-300

              hover:grayscale-0

              lg:h-[500px]

              md:mt-4 md:h-96
            "
            loading="lazy"
            :src="portfolio.image"
            :alt="portfolio.alt"
          />
          <TypographyParagraph class="mb-3 text-justify">
            {{ portfolio.description }}
          </TypographyParagraph>
          <ButtonVariant
            class="
              mx-auto w-full

              md:w-fit
            "
            variant="secondary"
            :href="portfolio.path"
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
          v-for="technology in portfolio.technologies"
          :key="technology.name"
          :href="technology.homepageUrl"
          render-as="link"
          variant="filled"
        >
          {{ technology.name }}
        </ButtonTag>
      </div>
    </article>
  </AccordionRoot>
</template>
