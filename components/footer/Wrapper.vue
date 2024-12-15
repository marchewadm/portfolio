<template>
  <footer class="mt-11 bg-surface-darker px-4 pb-5 pt-11">
    <div class="pb-11">
      <AccordionFooterLinksMobile />
    </div>
    <div class="flex w-full items-center justify-between gap-x-10">
      <ButtonLogo class="self-start text-sm" />
      <TypographyParagraph
        variant="thin"
        class="text-justify text-xs"
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
  </footer>
</template>
