<script setup lang="ts">
import type { BaseSection, Illustration } from "~/types/common";

type Props = BaseSection & Illustration;

defineProps<Props>();
</script>

<template>
  <BaseSectionSubPage
    class="md:grid md:grid-cols-[1fr_auto] md:items-center md:gap-x-36"
  >
    <div>
      <TypographyHeading
        :id="headingId"
        class="mb-3 opacity-0"
        as-tag="h1"
        data-aos="fade-up"
      >
        {{ heading }}
      </TypographyHeading>
      <slot />
    </div>
    <IllustrationHero :illustration="illustration" />
  </BaseSectionSubPage>
</template>
