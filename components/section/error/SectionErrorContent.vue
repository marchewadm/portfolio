<script setup lang="ts">
type Props = {
  errorMessage: string;
};

defineProps<Props>();
</script>

<template>
  <section
    class="
      my-auto grid max-w-screen-lg grid-cols-1 px-4 py-8

      md:mx-auto md:grid-cols-[1fr_auto] md:items-center md:gap-x-36
    "
  >
    <IllustrationHero
      illustration="404"
      class="
        order-1 mb-4 !block justify-self-center

        md:order-2 md:mb-0
      "
      :use-animations="false"
    />
    <div
      class="
        order-2 flex flex-col items-center

        md:order-1 md:block
      "
    >
      <TypographyHeading
        class="mb-3"
        as-tag="h1"
      >
        Oops! Something went wrong!
      </TypographyHeading>
      <TypographyParagraph class="mb-4">
        {{ errorMessage }}
      </TypographyParagraph>
      <div
        class="
          w-full

          md:w-fit
        "
      >
        <BaseButtonVariant
          class="w-full"
          variant="secondary"
          href="/"
          title="Go home"
        >
          Go home
        </BaseButtonVariant>
      </div>
    </div>
  </section>
</template>
