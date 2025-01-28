<!-- <script setup lang="ts">
const dummyData = [
  {
    value: "item-1",
    title: "Lorem ipsum dolor sit",
    shortDescription: "Is nostrud exercitation ullamco.",
    fullDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate  velit esse cillum dolore eu fugiat.",
    imageUrl: "/img/work-1.jpg",
    imageAlt: "Lorem ipsum dolor sit amet.",
    tags: [
      "Vue",
      "Nuxt",
      "TypeScript",
      "Radix Vue",
      "Tailwind CSS",
    ],
  },
  {
    value: "item-2",
    title: "Aperiam cupiditate nostrum",
    shortDescription: "Is nostrud exercitation ullamco.",
    fullDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate  velit esse cillum dolore eu fugiat.",
    imageUrl: "/img/work-2.jpg",
    imageAlt: "Lorem ipsum dolor sit amet.",
    tags: [
      "Python",
      "TypeScript",
      "Vue.js",
      "FastAPI",
      "PostgreSQL",
      "AWS",
      "Redis",
      "OpenAI API",
      "Gemini API",
      "shadcn-vue",
      "Radix Vue",
      "Tailwind CSS",
    ],
  },
  {
    value: "item-3",
    title: "Amet consectetur adipisicing",
    shortDescription: "Is nostrud exercitation ullamco.",
    fullDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate  velit esse cillum dolore eu fugiat.",
    imageUrl: "/img/work-3.jpg",
    imageAlt: "Lorem ipsum dolor sit amet.",
    tags: ["Python", "Django", "Javascript", "PostgreSQL", "Stripe"],
  },
];
</script> -->

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
