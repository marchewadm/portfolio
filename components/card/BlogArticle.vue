<script setup lang="ts">
type Props = {
  date: string;
  author: string;
  authorImageSrc: string;
  articleImageSrc: string;
  articleImageAlt: string;
  href: string;
};

const props = defineProps<Props>();

const getAuthorImageAlt = computed(() => `Image presenting the article's author - ${props.author}`);
</script>

<template>
  <article
    class="rounded-lg shadow-xs-below pb-4"
  >
    <NuxtLink
      :to="href"
      class="group"
    >
      <NuxtImg
        class="
          mb-4 h-56 w-full rounded-tl-lg rounded-tr-lg object-cover grayscale
          transition-all duration-300

          group-focus-visible:grayscale-0

          hover:grayscale-0
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
      >
        <span
          class="
            line-clamp-1 text-xl

            md:text-2xl
          "
        >
          <slot name="articleTitle" />
        </span>
        <IconBase
          icon-name="arrow-up-right"
          class="
            flex-shrink-0 transition-transform duration-300

            group-focus-visible:rotate-45

            group-hover:rotate-45
          "
        />
      </NuxtLink>
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
            <time :datetime="date">
              {{ formatDate(date) }}
            </time>
          </TypographyParagraph>
        </div>
      </div>
    </div>
  </article>
</template>
