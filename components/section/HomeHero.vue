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
          class="mb-1 opacity-0"
          tag="h1"
          data-aos="fade-up"
        >
          Dawid Merchwa
        </TypographyHeading>
        <TypographyTitle
          class="mb-2 opacity-0"
          variant="lg"
          data-aos="fade-up"
        >
          A Computer Science student
        </TypographyTitle>
        <TypographyParagraph
          class="
            mb-4 w-full opacity-0

            lg:w-[75%]
          "
          data-aos="fade-up"
          data-aos-delay="600"
        >
          Passionate developer, open source contributor, Linux enthusiast, and a lifelong learner exploring new technologies.
        </TypographyParagraph>
        <div
          class="
            flex flex-col gap-y-2

            md:flex-row md:gap-x-4 md:gap-y-0
          "
        >
          <div
            class="opacity-0"
            data-aos="fade-left"
            data-aos-delay="1200"
          >
            <ButtonVariant
              icon-name="arrow-right"
              icon-animation="bounce-right"
              href="/#section-home-contact"
            >
              Get in touch
            </ButtonVariant>
          </div>
          <div
            class="opacity-0"
            data-aos="fade-left"
            data-aos-delay="1400"
          >
            <ButtonVariant
              class="w-full"
              variant="secondary"
            >
              Resume
            </ButtonVariant>
          </div>
        </div>
      </div>
      <div
        class="
          hidden self-center justify-self-center overflow-hidden rounded-full
          border-4 border-white shadow-xs-below opacity-0

          md:block
        "
        data-aos="zoom-in"
        data-aos-delay="1800"
      >
        <NuxtLink
          to="/about"
          class="group rounded-full"
        >
          <NuxtImg
            src="/img/work-1.jpg"
            alt="Portrait of the author"
            class="
              h-48 w-48 rounded-full object-cover grayscale transition-all
              duration-300

              group-focus-visible:scale-110 group-focus-visible:grayscale-0

              hover:scale-110 hover:grayscale-0
            "
          />
        </NuxtLink>
      </div>
    </div>
    <ParticlesLink />
  </section>
</template>
