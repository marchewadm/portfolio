<script setup lang="ts">
import type { Illustration } from "~/types/common";

const { illustration, useAnimations = true } = defineProps<Illustration>();

const asTag = computed(() => resolveComponent(`SvgoHero${capitalizeFirstLetter(illustration)}`));

const animationClasses = computed(() => ({ "opacity-0": useAnimations }));
const animationAttributes = computed(() => useAnimations ? { "data-aos": "zoom-in", "data-aos-delay": "1800" } : {});
</script>

<template>
  <component
    :is="asTag"
    :font-controlled="false"
    :class="animationClasses"
    class="
      hidden h-[430px]

      md:block
    "
    v-bind="animationAttributes"
    filled
  />
</template>
