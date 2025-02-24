<template>
  <SectionSubPageBase
    class="md:grid md:grid-cols-[1fr_auto] md:items-center md:gap-x-36"
  >
    <div>
      <TypographyHeading
        id="section-selected-works-hero"
        tag="h1"
        class="mb-3 opacity-0"
        data-aos="fade-up"
      >
        Projects that I have worked on so far and the stories behind them
      </TypographyHeading>
      <TypographyParagraph
        class="mb-2 opacity-0"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        This is where I share the projects I've completed so far, as well as those still in progress but ready to be showcased.
      </TypographyParagraph>
      <TypographyParagraph
        class="mb-4 opacity-0"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        This isn't just a portfolio - it's more of a journal where I share my thoughts, challenges, and solutions throughout the creation process. Feel free to explore, and if you have any questions, don't hesitate to contact me!
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
        >
          Check out my GitHub
        </ButtonVariant>
      </div>
    </div>
    <SvgoHeroIdea
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
