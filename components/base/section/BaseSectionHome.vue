<script setup lang="ts">
import type { BaseSection } from "~/types/common";

type Props = BaseSection & {
  subtitle: string;
};

defineProps<Props>();
</script>

<template>
  <section
    class="
      mx-auto mb-6 flex max-w-screen-lg flex-col items-center px-4

      md:mb-10
    "
  >
    <hgroup class="mb-3 flex flex-col items-center gap-y-1">
      <TypographyHeading
        :id="headingId"
        class="opacity-0"
        data-aos="fade-up"
      >
        {{ heading }}
      </TypographyHeading>
      <TypographyParagraph
        class="opacity-0"
        variant="thin"
        data-aos="fade-up"
      >
        {{ subtitle }}
      </TypographyParagraph>
    </hgroup>
    <slot />
  </section>
</template>
