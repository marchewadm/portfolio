<template>
  <SectionSubPageBase
    class="md:grid md:grid-cols-[1fr_auto] md:items-center md:gap-x-36"
  >
    <div>
      <TypographyHeading
        tag="h1"
        class="mb-3"
      >
        Behind every face is a tale of trials, triumphs, and transformation
      </TypographyHeading>
      <TypographyParagraph class="mb-4">
        Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam.
      </TypographyParagraph>
      <ButtonVariant
        class="
          w-full

          md:w-fit
        "
        icon-name="arrow-right"
        :is-icon-animated="true"
      >
        View my resume
      </ButtonVariant>
    </div>
    <SvgoHeroGreeting
      class="
        hidden h-[430px]

        md:block
      "
      filled
      :font-controlled="false"
    />
  </SectionSubPageBase>
</template>
