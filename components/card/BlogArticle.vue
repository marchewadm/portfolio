<script setup lang="ts">
type Props = {
  imageSrc: string;
  imageAlt: string;
};

defineProps<Props>();
</script>

<template>
  <article
    class="rounded-lg shadow-xs-below flex flex-col px-4 pb-4"
  >
    <NuxtImg
      class="
        rounded-lg grayscale shadow-xs-below mb-6 h-56 w-full -translate-y-4
        object-cover transition-all duration-300

        hover:grayscale-0
      "
      loading="lazy"
      :src="imageSrc"
      :alt="imageAlt"
    />
    <TypographyTitle
      class="mb-1 line-clamp-1 -translate-y-4"
      variant="lg"
    >
      <slot name="articleTitle" />
    </TypographyTitle>
    <TypographyParagraph class="line-clamp-5 -translate-y-4 text-justify">
      <slot name="articleDescription" />
    </TypographyParagraph>
    <ButtonVariant class="w-fit">
      Read more
    </ButtonVariant>
  </article>
</template>
