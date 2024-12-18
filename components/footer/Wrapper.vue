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
            text-sm

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
          <NuxtLink
            to="https://opensource.org/license/mit"
            target="_blank"
          >
            MIT License
          </NuxtLink>
          &copy; 2024 Dawid Merchwa
        </TypographyParagraph>
        <TypographyParagraph
          variant="thin"
          class="
            mt-1 text-justify text-xs

            lg:mt-auto

            md:text-sm
          "
        >
          Designed with care and love &hearts; in
          <NuxtLink
            to="https://www.figma.com/"
            target="_blank"
          >
            Figma,
          </NuxtLink>
          developed with passion and precision using
          <NuxtLink
            to="https://nuxt.com/"
            target="_blank"
          >
            Nuxt.js
          </NuxtLink>
        </TypographyParagraph>
      </div>
      <NavigationFooterDesktop />
    </div>
  </footer>
</template>
