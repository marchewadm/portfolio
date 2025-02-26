<template>
  <SectionHomeBase>
    <TypographyHeading
      id="section-home-selected-works"
      class="mb-1 opacity-0"
      data-aos="fade-up"
    >
      Selected Works
    </TypographyHeading>
    <TypographyParagraph
      class="mb-3 opacity-0"
      variant="thin"
      data-aos="fade-up"
    >
      Showcasing skills through real projects
    </TypographyParagraph>
    <AccordionSelectedWorks />
    <div
      class="
        w-full opacity-0

        md:w-fit
      "
      data-aos="fade-up"
    >
      <ButtonVariant
        variant="secondary"
        href="/selected-works"
        title="Discover more projects on the selected works page"
      >
        See all
      </ButtonVariant>
    </div>
  </SectionHomeBase>
</template>
