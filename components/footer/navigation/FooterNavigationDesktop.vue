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
          <LinkMuted
            :href="link.href"
            :title="link.title"
            :target="link.target"
          >
            {{ link.text }}
          </LinkMuted>
        </li>
      </ul>
    </nav>
  </div>
</template>
