<script setup lang="ts">
type Props = {
  date: string;
  author: string;
  authorImageSrc: string;
};

const { author } = defineProps<Props>();

const authorImageAlt = computed(() => `Image of the article's author, ${author}`);
</script>

<template>
  <div
    class="
      mb-3 flex gap-x-2

      md:gap-x-3
    "
  >
    <div class="overflow-hidden rounded-full">
      <NuxtImg
        class="
          h-10 w-10 rounded-full object-cover grayscale transition-all
          duration-300

          hover:scale-110 hover:grayscale-0

          md:h-12 md:w-12
        "
        loading="lazy"
        :src="authorImageSrc"
        :alt="authorImageAlt"
      />
    </div>
    <div class="flex flex-col justify-between">
      <TypographyParagraph variant="sm">
        {{ author }}
      </TypographyParagraph>
      <TypographyParagraph variant="muted">
        <time :datetime="date">
          {{ formatDate(date) }}
        </time>
      </TypographyParagraph>
    </div>
  </div>
</template>
