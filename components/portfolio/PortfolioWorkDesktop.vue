<script setup lang="ts">
import type { PortfolioWork } from "~/types/common";

const { title } = defineProps<PortfolioWork>();

const projectDetailsTitle = computed(() => `Read more about ${title}`);
</script>

<template>
  <article
    class="
      hidden

      lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:gap-x-12
    "
  >
    <div
      class="flex flex-col"
      :class="projectIndex % 2 !== 0 ? 'order-2' : 'order-1'"
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
      <ListLinkDemoAndSource
        class="mt-2"
        :demo-url="demoUrl"
        :source-code-url="sourceCodeUrl"
        :use-animations="true"
      />
      <TypographyParagraph
        class="my-3 text-justify opacity-0"
        data-aos="fade-up"
      >
        {{ description }}
      </TypographyParagraph>
      <div
        class="
          mx-auto w-full opacity-0

          md:w-fit
        "
        data-aos="fade-up"
      >
        <BaseButtonVariant
          variant="secondary"
          :href="path"
          :title="projectDetailsTitle"
        >
          More details
        </BaseButtonVariant>
      </div>
    </div>
    <div
      class="flex flex-col opacity-0"
      :class="projectIndex % 2 !== 0 ? 'order-1' : 'order-2'"
      data-aos="fade-up"
    >
      <NuxtLink
        class="group mb-3 overflow-hidden rounded-xl"
        :title="projectDetailsTitle"
        :to="path"
      >
        <NuxtImg
          class="
            h-80 w-full rounded-xl object-cover grayscale transition-all
            duration-300

            group-focus-visible:scale-110 group-focus-visible:grayscale-0

            hover:scale-110 hover:grayscale-0
          "
          loading="lazy"
          :src="image"
          :alt="alt"
        />
      </NuxtLink>
      <ListButtonWrapped>
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
    </div>
  </article>
</template>
