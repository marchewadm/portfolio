<script setup lang="ts">
import type { ImageCaption } from "~/types/common";

defineProps<ImageCaption>();
</script>

<template>
  <figure>
    <div class="overflow-hidden rounded-xl">
      <NuxtImg
        class="
          h-52 w-full rounded-xl object-cover grayscale transition-all
          duration-300

          hover:scale-110 hover:grayscale-0

          lg:h-[500px]

          md:h-96
        "
        loading="lazy"
        :src="src"
        :alt="alt"
      />
    </div>
    <figcaption
      class="text-center font-thin text-foreground-lighter mt-1 text-sm"
    >
      {{ caption }}
    </figcaption>
  </figure>
</template>
