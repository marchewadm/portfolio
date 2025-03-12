<script setup lang="ts">
import type { Illustration } from "~/types/common";

const { illustration } = defineProps<Illustration>();

const asTag = computed(() => resolveComponent(`SvgoHero${capitalizeFirstLetter(illustration)}`));
</script>

<template>
  <component
    :is="asTag"
    :font-controlled="false"
    class="
      hidden h-[430px] opacity-0

      md:block
    "
    data-aos="zoom-in"
    data-aos-delay="1800"
    filled
  />
</template>
