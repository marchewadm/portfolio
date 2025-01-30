<template>
  <section
    class="
      relative mb-6 flex h-[350px] items-center overflow-hidden

      md:mb-10 md:h-[550px]
    "
  >
    <div
      class="
        z-10 mx-auto w-full max-w-screen-lg px-4

        md:grid md:grid-cols-[1fr_auto] md:gap-x-20
      "
    >
      <div>
        <TypographyHeading
          id="section-home-hero"
          class="mb-1"
          tag="h1"
        >
          Dawid Merchwa
        </TypographyHeading>
        <TypographyTitle
          class="mb-2"
          variant="lg"
        >
          A Computer Science student
        </TypographyTitle>
        <TypographyParagraph
          class="
            mb-4 w-full

            lg:w-[75%]
          "
        >
          Passionate developer, open source contributor, Linux enthusiast, and a lifelong learner exploring new technologies.
        </TypographyParagraph>
        <div
          class="
            flex flex-col gap-y-2

            md:flex-row md:gap-x-4 md:gap-y-0
          "
        >
          <ButtonVariant
            icon-name="arrow-right"
            :is-icon-animated="true"
            href="/#section-home-contact"
          >
            Get in touch
          </ButtonVariant>
          <ButtonVariant variant="secondary">
            Resume
          </ButtonVariant>
        </div>
      </div>
      <div
        class="
          hidden self-center justify-self-center rounded-full border-4
          border-white shadow-xs-below

          md:block
        "
      >
        <NuxtImg
          src="/img/work-1.jpg"
          alt="Portrait of the author"
          class="
            h-48 w-48 rounded-full object-cover grayscale transition-all
            duration-300

            hover:grayscale-0
          "
        />
      </div>
    </div>
    <ParticlesLink />
  </section>
</template>
