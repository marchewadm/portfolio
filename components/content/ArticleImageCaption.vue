<script setup lang="ts">
type Props = {
  imageSrc: string;
  imageAlt: string;
  imageCaption: string;
};

defineProps<Props>();
</script>

<template>
  <figure class="my-3">
    <NuxtImg
      class="
        h-52 w-full rounded-xl object-cover grayscale transition-all
        duration-300

        hover:grayscale-0

        lg:h-[500px]

        md:h-96
      "
      loading="lazy"
      :src="imageSrc"
      :alt="imageAlt"
    />
    <figcaption
      class="text-center font-thin text-foreground-lighter mt-1 text-sm"
    >
      {{ imageCaption }}
    </figcaption>
  </figure>
</template>
