<script setup lang="ts">
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
</script>

<template>
  <AccordionRoot
    class="w-full"
    type="single"
    :collapsible="true"
  >
    <article
      v-for="item in dummyData"
      :key="item.value"
    >
      <AccordionItem :value="item.value">
        <AccordionHeader as-child>
          <AccordionTrigger as-child>
            <div class="group cursor-pointer">
              <div class="flex justify-between">
                <TypographyTitle>
                  {{ item.title }}
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
                {{ item.shortDescription }}
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
              mb-2 mt-3 h-52 w-full rounded-xl object-cover

              lg:h-[500px]

              md:mt-4 md:h-96
            "
            loading="lazy"
            :src="item.imageUrl"
            :alt="item.imageAlt"
          />
          <TypographyParagraph class="mb-3 text-justify">
            {{ item.fullDescription }}
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
        <ButtonTechStack
          v-for="techTag in item.tags"
          :key="techTag"
        >
          {{ techTag }}
        </ButtonTechStack>
      </div>
    </article>
  </AccordionRoot>
</template>
