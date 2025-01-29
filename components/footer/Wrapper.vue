<script setup lang="ts">
const currentYear = new Date().getFullYear();
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
        <AccordionFooterLinksMobile />
      </div>
      <div class="flex flex-col">
        <ButtonLogo
          class="
            w-fit text-sm

            md:text-base
          "
        />
        <TypographyParagraph
          variant="thin"
          class="
            mt-1 text-justify text-xs

            md:text-sm
          "
        >
          Licensed under the
          <LinkFooterExternal href="https://opensource.org/license/mit">
            MIT License
          </LinkFooterExternal>
          &copy; {{ currentYear }} Dawid Merchwa
        </TypographyParagraph>
        <TypographyParagraph
          variant="thin"
          class="
            group mt-1 text-justify text-xs

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
          <LinkFooterExternal href="https://www.figma.com">Figma</LinkFooterExternal>,
          developed with passion and precision using
          <LinkFooterExternal href="https://nuxt.com">
            Nuxt.js
          </LinkFooterExternal>
        </TypographyParagraph>
      </div>
      <NavigationFooterDesktop />
    </div>
  </footer>
</template>
