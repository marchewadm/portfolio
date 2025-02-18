<template>
  <NuxtLink
    class="
      mb-3 flex items-center gap-x-2 transition-colors duration-300
      text-foreground-lighter w-fit

      focus-visible:text-foreground-lightest

      hover:text-foreground-lightest
    "
    href="/blog"
  >
    <IconBase
      icon-name="arrow-left"
      size="sm"
    />
    <span
      class="
        text-sm font-light tracking-tight

        md:text-base
      "
    >
      Return to articles
    </span>
  </NuxtLink>
</template>
