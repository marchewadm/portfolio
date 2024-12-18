<script setup lang="ts">
const navigationSections = [
  {
    title: "General",
    links: [
      { text: "Home", href: "#" },
      { text: "About", href: "#" },
      { text: "Sitemap", href: "#", target: "_blank" },
    ],
  },
  {
    title: "Professional",
    links: [
      { text: "Resume", href: "#", target: "_blank" },
      { text: "Selected Works", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { text: "Blog", href: "#" },
      { text: "Contact", href: "#" },
    ],
  },
  {
    title: "Socials",
    links: [
      { text: "GitHub", href: "#", target: "_blank" },
      { text: "LinkedIn", href: "#", target: "_blank" },
      { text: "Discord", href: "#", target: "_blank" },
      { text: "Mail", href: "#", target: "_blank" },
    ],
  },
];
</script>

<template>
  <div
    class="
      hidden justify-between

      lg:flex
    "
  >
    <nav
      v-for="section in navigationSections"
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
