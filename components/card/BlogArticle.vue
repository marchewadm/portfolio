<script setup lang="ts">
type Props = {
  date: string;
  author: string;
  authorImageSrc: string;
  articleImageSrc: string;
  articleImageAlt: string;
};

const props = defineProps<Props>();

const getAuthorImageAlt = computed(() => `Image presenting the article's author - ${props.author}`);
</script>

<template>
  <article
    class="rounded-lg shadow-xs-below pb-4"
  >
    <NuxtImg
      class="
        mb-4 h-56 w-full rounded-tl-lg rounded-tr-lg object-cover grayscale
        transition-all duration-300

        hover:grayscale-0
      "
      loading="lazy"
      :src="articleImageSrc"
      :alt="articleImageAlt"
    />
    <div class="px-4">
      <div class="mb-1 flex justify-between gap-x-12">
        <TypographyTitle
          class="line-clamp-1"
          variant="lg"
        >
          <slot name="articleTitle" />
        </TypographyTitle>
        <ButtonIcon icon-name="arrow-up-right" />
      </div>
      <TypographyParagraph class="mb-2 line-clamp-5 text-justify">
        <slot name="articleDescription" />
      </TypographyParagraph>
      <div
        class="
          flex gap-x-2

          md:gap-x-3
        "
      >
        <NuxtImg
          class="
            h-10 w-10 rounded-full object-cover grayscale transition-all
            duration-300

            hover:grayscale-0

            md:h-12 md:w-12
          "
          loading="lazy"
          :src="authorImageSrc"
          :alt="getAuthorImageAlt"
        />
        <div class="flex flex-col justify-between">
          <TypographyParagraph variant="sm">
            {{ author }}
          </TypographyParagraph>
          <TypographyParagraph variant="thin">
            {{ date }}
          </TypographyParagraph>
        </div>
      </div>
    </div>
  </article>
</template>
