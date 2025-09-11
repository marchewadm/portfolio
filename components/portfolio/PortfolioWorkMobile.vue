<script setup lang="ts">
import type { PortfolioWork } from "~/types/common";

type Props = PortfolioWork & {
  selectedWorksWithoutLast: number;
};

const { title } = defineProps<Props>();

const projectDetailsTitle = computed(() => `Read more about ${title}`);
</script>

<template>
  <article
    class="
      block

      lg:hidden
    "
  >
    <TypographyTitle
      class="opacity-0"
      data-aos="fade-up"
    >
      {{ title }}
    </TypographyTitle>
    <TypographyParagraph
      class="text-foreground-lighter opacity-0"
      data-aos="fade-up"
    >
      {{ subtitle }}
    </TypographyParagraph>
    <div
      class="mt-2 opacity-0"
      data-aos="fade-up"
    >
      <ListLinkDemoAndSource
        :demo-url="demoUrl"
        :source-code-url="sourceCodeUrl"
      />
      <NuxtLink
        class="group mb-2 mt-3 block overflow-hidden rounded-xl"
        :title="projectDetailsTitle"
        :to="path"
      >
        <CldImage
          class="
            h-52 w-full rounded-xl object-cover grayscale transition-all
            duration-300

            group-focus-visible:scale-110 group-focus-visible:grayscale-0

            hover:scale-110 hover:grayscale-0

            lg:h-[500px]

            md:mt-4 md:h-96
          "
          width="1200"
          height="600"
          :src="image"
          :alt="alt"
        />
      </NuxtLink>
    </div>
    <TypographyParagraph
      class="mb-3 opacity-0"
      data-aos="fade-up"
    >
      {{ description }}
    </TypographyParagraph>
    <div
      class="opacity-0"
      data-aos="fade-up"
    >
      <BaseButtonVariant
        class="
          mx-auto w-full

          md:w-fit
        "
        variant="secondary"
        :href="path"
        :title="projectDetailsTitle"
      >
        More details
      </BaseButtonVariant>
    </div>
    <ListButtonWrapped
      class="
        pt-3 opacity-0

        md:pt-4
      "
      data-aos="fade-up"
      :class="{ 'border-b border-decorative mb-3 pb-3': projectIndex !== selectedWorksWithoutLast }"
    >
      <li
        v-for="(technology, itemIndex) in technologies"
        :key="technology.name"
        :data-aos-delay="itemIndex * 100"
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
</template>
