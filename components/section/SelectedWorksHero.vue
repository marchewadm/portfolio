<template>
  <SectionSubPageBase
    class="md:grid md:grid-cols-[1fr_auto] md:items-center md:gap-x-36"
  >
    <div>
      <TypographyHeading
        id="section-selected-works-hero"
        tag="h1"
        class="mb-3"
      >
        Projects that I have worked on so far and the stories behind them
      </TypographyHeading>
      <TypographyParagraph class="mb-2">
        This is where I share the projects I've completed so far, as well as those still in progress but ready to be showcased.
      </TypographyParagraph>
      <TypographyParagraph class="mb-4">
        This isn't just a portfolio - it's more of a journal where I share my thoughts, challenges, and solutions throughout the creation process. Feel free to explore, and if you have any questions, don't hesitate to contact me!
      </TypographyParagraph>
      <ButtonVariant
        class="
          w-full

          md:w-fit
        "
        icon-name="arrow-right"
        :is-icon-animated="true"
      >
        Check out my GitHub
      </ButtonVariant>
    </div>
    <SvgoHeroIdea
      class="
        hidden h-[430px]

        md:block
      "
      filled
      :font-controlled="false"
    />
  </SectionSubPageBase>
</template>
