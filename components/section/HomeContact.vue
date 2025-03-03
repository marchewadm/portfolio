<template>
  <SectionHomeBase
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
        <ul
          class="
            mb-3 flex flex-col gap-y-2 place-self-start

            md:gap-y-3
          "
        >
          <li
            v-for="link in SOCIAL_NAVIGATION"
            :key="link.text"
            class="opacity-0"
            data-aos="fade-up"
          >
            <LinkIconExternal
              :icon-name="link.iconName"
              :title="link.title"
            >
              {{ link.userName }}
            </LinkIconExternal>
          </li>
        </ul>
      </div>
      <FormContact />
    </div>
  </SectionHomeBase>
</template>
