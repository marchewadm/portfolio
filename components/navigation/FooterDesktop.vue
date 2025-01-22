<template>
  <div
    class="
      hidden justify-between

      lg:flex
    "
  >
    <nav
      v-for="section in NAVIGATION_DATA"
      :key="section.title"
    >
      <TypographyTitle class="mb-3">
        {{ section.title }}
      </TypographyTitle>
      <ul class="flex flex-col gap-y-2">
        <li
          v-for="link in section.links"
          :key="link.text"
        >
          <ButtonNavigation
            class="
              transition-colors duration-300

              focus-visible:text-foreground-lightest

              hover:text-foreground-lightest
            "
            :href="link.href"
            :target="link.target"
          >
            {{ link.text }}
          </ButtonNavigation>
        </li>
      </ul>
    </nav>
  </div>
</template>
