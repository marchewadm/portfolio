<script setup lang="ts">
import type { ImageCaption } from "~/types/common";

defineProps<ImageCaption>();
</script>

<template>
  <figure>
    <div class="overflow-hidden rounded-xl">
      <CldImage
        class="
          h-52 w-full rounded-xl object-cover grayscale transition-all
          duration-300

          hover:scale-110 hover:grayscale-0

          lg:h-[500px]

          md:h-96
        "
        width="1200"
        height="600"
        :alt="alt"
        :src="src"
      />
    </div>
    <figcaption
      class="
        text-center font-light text-foreground-lightest mt-1 text-sm
        tracking-tight
      "
    >
      {{ caption }}
    </figcaption>
  </figure>
</template>
