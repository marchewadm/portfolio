<template>
  <SectionSubPageBase
    class="md:grid md:grid-cols-[1fr_auto] md:items-center md:gap-x-36"
  >
    <div>
      <TypographyHeading
        id="section-about-hero"
        class="mb-3 opacity-0"
        tag="h1"
        data-aos="fade-up"
      >
        Behind every face is a tale of trials, triumphs, and transformation
      </TypographyHeading>
      <TypographyParagraph
        class="mb-4 opacity-0"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        Life is a constant process of trial and error &mdash; mistakes show us our limits, challenges test our resilience, and experiences shape our perspective. What we take from them is entirely up to us.
      </TypographyParagraph>
      <div
        class="
          opacity-0

          md:w-fit
        "
        data-aos="fade-left"
        data-aos-delay="1200"
      >
        <ButtonVariant
          class="w-full"
          icon-name="arrow-right"
          icon-animation="bounce-right"
          href="#"
          title="View my resume in a new tab"
        >
          View my resume
        </ButtonVariant>
      </div>
    </div>
    <SvgoHeroGreeting
      class="
        hidden h-[430px] opacity-0

        md:block
      "
      data-aos="zoom-in"
      data-aos-delay="1800"
      :font-controlled="false"
      filled
    />
  </SectionSubPageBase>
</template>
