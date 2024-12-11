<script setup lang="ts">
const navigationData = [
  {
    sectionName: "General",
    sectionId: "general",
    links: [
      {
        name: "Home",
      },
      {
        name: "About",
      },
      {
        name: "Sitemap",
        target: "_blank",
      },
    ],
  },
  {
    sectionName: "Professional",
    sectionId: "professional",
    links: [
      {
        name: "Resume",
        target: "_blank",
      },
      {
        name: "Selected Works",
      },
    ],
  },
  {
    sectionName: "Resources",
    sectionId: "resources",
    links: [
      {
        name: "Blog",
      },
      {
        name: "Contact",
      },
    ],
  },
  {
    sectionName: "Socials",
    sectionId: "socials",
    links: [
      {
        name: "GitHub",
        target: "_blank",
      },
      {
        name: "LinkedIn",
        target: "_blank",
      },
      {
        name: "Discord",
        target: "_blank",
      },
      {
        name: "Mail",
        target: "_blank",
      },
    ],
  },
];
</script>

<template>
  <AccordionRoot
    class="flex w-full flex-col gap-y-3"
    type="single"
    :collapsible="true"
  >
    <NavigationFooterMobile
      v-for="navigation in navigationData"
      :key="navigation.sectionId"
      :section-name="navigation.sectionName"
      :section-id="navigation.sectionId"
      :links="navigation.links"
    />
  </AccordionRoot>
</template>
