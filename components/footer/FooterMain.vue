<script setup lang="ts">
const currentYear = new Date().getFullYear();

const currentYearAsString = computed(() => String(currentYear));
</script>

<template>
  <footer
    class="
      mt-11 bg-surface-darker px-4 pb-5 pt-11

      lg:pb-11
    "
  >
    <div
      class="
        max-w-screen-xl

        lg:grid lg:grid-cols-2 lg:gap-x-14

        xl:mx-auto xl:gap-x-28
      "
    >
      <div
        class="
          pb-11

          lg:hidden
        "
      >
        <FooterNavigationMobile />
      </div>
      <div class="flex flex-col">
        <LinkLogo
          class="
            w-fit text-sm

            md:text-base
          "
        />
        <TypographyParagraph
          variant="thin"
          class="
            mt-1 text-xs

            md:text-sm
          "
        >
          Licensed under the
          <LinkUnderline
            href="https://opensource.org/license/mit"
            title="Open the MIT License website in a new tab"
            target="_blank"
          >
            MIT License</LinkUnderline> &copy;
          <time :datetime="currentYearAsString">{{ currentYear }}</time> Dawid Merchwa
        </TypographyParagraph>
        <TypographyParagraph
          variant="thin"
          class="
            group mt-1 text-xs

            lg:mt-auto

            md:text-sm
          "
        >
          Designed with care and love
          <span
            class="
              transition-colors duration-500

              group-hover:text-red-500
            "
          >
            &hearts;
          </span>
          in
          <LinkUnderline
            href="https://www.figma.com"
            title="Open the Figma website in a new tab"
            target="_blank"
          >
            Figma</LinkUnderline>,
          developed with passion and precision using
          <LinkUnderline
            href="https://nuxt.com"
            title="Open the Nuxt.js website in a new tab"
            target="_blank"
          >
            Nuxt.js
          </LinkUnderline>
        </TypographyParagraph>
      </div>
      <FooterNavigationDesktop />
    </div>
  </footer>
</template>
