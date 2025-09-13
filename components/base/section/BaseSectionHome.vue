<script setup lang="ts">
import type { BaseSection } from "~/types/common";

type Props = BaseSection & {
  subtitle: string;
  headingId?: string;
  isLast?: boolean;
};

const { isLast = false } = defineProps<Props>();

const sectionMargin = computed(() => ({
  "mb-6 md:mb-10": !isLast,
  "mb-[68px] md:mb-[84px]": isLast,
}));
</script>

<template>
  <section
    class="mx-auto flex max-w-screen-lg flex-col items-center px-4"
    :class="sectionMargin"
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
        variant="muted"
        data-aos="fade-up"
      >
        {{ subtitle }}
      </TypographyParagraph>
    </hgroup>
    <slot />
  </section>
</template>
