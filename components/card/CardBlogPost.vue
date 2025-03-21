<script setup lang="ts">
type Props = {
  href: string;
  date: string;
  author: string;
  authorImageSrc: string;
  articleTitle: string;
  articleDescription: string;
  articleImageSrc: string;
  articleImageAlt: string;
};

const { author, articleTitle } = defineProps<Props>();

const linkTitle = computed(() => `Read more about ${articleTitle}`);
const authorImageAlt = computed(() => `Image of the article's author, ${author}`);
</script>

<template>
  <article
    class="rounded-lg shadow-xs-below pb-4"
  >
    <NuxtLink
      class="group mb-4 block overflow-hidden rounded-tl-lg rounded-tr-lg"
      :to="href"
      :title="linkTitle"
    >
      <NuxtImg
        class="
          h-56 w-full rounded-tl-lg rounded-tr-lg object-cover grayscale
          transition-all duration-300

          group-focus-visible:scale-110 group-focus-visible:grayscale-0

          hover:scale-110 hover:grayscale-0
        "
        loading="lazy"
        :src="articleImageSrc"
        :alt="articleImageAlt"
      />
    </NuxtLink>
    <div class="px-4">
      <NuxtLink
        class="
          group mb-1 flex justify-between gap-x-12 transition-colors
          duration-300

          focus-visible:text-foreground-lighter

          hover:text-foreground-lighter
        "
        :to="href"
        :title="linkTitle"
      >
        <TypographyTitle
          as-tag="span"
          class="line-clamp-1"
        >
          {{ articleTitle }}
        </TypographyTitle>
        <BaseIcon
          icon-name="arrow-up-right"
          class="
            flex-shrink-0 transition-transform duration-300

            group-focus-visible:rotate-45

            group-hover:rotate-45
          "
        />
      </NuxtLink>
      <TypographyParagraph class="mb-2 line-clamp-5">
        {{ articleDescription }}
      </TypographyParagraph>
      <div
        class="
          flex gap-x-2

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
    </div>
  </article>
</template>
