<template>
  <SectionHomeBase>
    <TypographyHeading
      id="section-home-contact"
      class="mb-1"
    >
      Get in Touch
    </TypographyHeading>
    <TypographyParagraph
      class="mb-3"
      variant="thin"
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
        <TypographyParagraph class="mb-3 text-justify">
          I'd love to hear from you! Whether it's about my projects, collaboration opportunities, or any questions you have, feel free to get in touch.
        </TypographyParagraph>
        <div
          class="
            mb-3 flex flex-col gap-y-2 place-self-start

            md:gap-y-3
          "
        >
          <LinkIconExternal icon-name="brand-github">
            @marchewadm
          </LinkIconExternal>
          <LinkIconExternal icon-name="brand-linkedin">
            @merchwadawid
          </LinkIconExternal>
          <LinkIconExternal icon-name="brand-discord">
            @marchewa02
          </LinkIconExternal>
          <LinkIconExternal
            icon-name="mail"
            href="mailto:merchwa.dawid@gmail.com"
          >
            merchwa.dawid@gmail.com
          </LinkIconExternal>
        </div>
      </div>
      <FormContact />
    </div>
  </SectionHomeBase>
</template>
