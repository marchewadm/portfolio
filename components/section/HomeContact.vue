<template>
  <SectionHomeBase>
    <TypographyHeading
      id="section-home-contact"
      class="mb-1 opacity-0"
      data-aos="fade-up"
    >
      Get in Touch
    </TypographyHeading>
    <TypographyParagraph
      class="mb-3 opacity-0"
      variant="thin"
      data-aos="fade-up"
    >
      Reach out for collaboration or inquiries
    </TypographyParagraph>
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
            class="opacity-0"
            data-aos="fade-up"
          >
            <LinkIconExternal icon-name="brand-github">
              @marchewadm
            </LinkIconExternal>
          </li>
          <li
            class="opacity-0"
            data-aos="fade-up"
          >
            <LinkIconExternal icon-name="brand-linkedin">
              @merchwadawid
            </LinkIconExternal>
          </li>
          <li
            class="opacity-0"
            data-aos="fade-up"
          >
            <LinkIconExternal icon-name="brand-discord">
              @marchewa02
            </LinkIconExternal>
          </li>
          <li
            class="opacity-0"
            data-aos="fade-up"
          >
            <LinkIconExternal
              icon-name="mail"
              href="mailto:merchwa.dawid@gmail.com"
            >
              merchwa.dawid@gmail.com
            </LinkIconExternal>
          </li>
        </ul>
      </div>
      <FormContact />
    </div>
  </SectionHomeBase>
</template>
