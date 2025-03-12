<template>
  <BaseSectionHome
    heading="Get in Touch"
    heading-id="section-home-contact"
    subtitle="Reach out for collaboration or inquiries"
  >
    <div
      class="
        grid grid-cols-1

        md:grid-cols-2 md:gap-x-20
      "
    >
      <div>
        <TypographyParagraph
          class="mb-3 text-justify opacity-0"
          data-aos="fade-up"
        >
          I'd love to hear from you! Whether it's about my projects, collaboration opportunities, or any questions you have, feel free to get in touch.
        </TypographyParagraph>
        <BaseListLinkWithIcon
          class="
            mb-3

            md:mb-0
          "
        >
          <li
            v-for="link in SOCIAL_NAVIGATION"
            :key="link.text"
            class="opacity-0"
            data-aos="fade-up"
          >
            <LinkWithIcon
              :icon-name="link.iconName"
              :href="link.href"
              :title="link.title"
              :target="link.target"
            >
              {{ link.userName }}
            </LinkWithIcon>
          </li>
        </BaseListLinkWithIcon>
      </div>
      <FormContact />
    </div>
  </BaseSectionHome>
</template>
