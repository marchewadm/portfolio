<template>
  <BaseSectionSubPage>
    <div class="relative mb-3">
      <TypographyHeading
        id="section-about-whats-next"
        class="opacity-0"
        data-aos="fade-up"
      >
        What's Next?
      </TypographyHeading>
      <div
        class="
          absolute right-full mt-1 hidden

          xl:block
        "
        data-aos="zoom-in"
        data-aos-delay="600"
      >
        <SvgoArrowScribble
          class="h-20 -translate-y-1/2 rotate-[60deg]"
          filled
          :font-controlled="false"
        />
      </div>
    </div>
    <TypographyParagraph
      class="mb-2 opacity-0"
      data-aos="fade-up"
    >
      In IT, learning never really stops. I'm currently in my third year of studies, and in the near future, I'd love to pursue a master's degree in computer science or mathematics &mdash; something that has been on my mind for a long time and feels like a quiet dream of mine. I've even considered studying philosophy as a fascinating addition, something that could offer a fresh perspective &mdash; but who knows what the future holds?
    </TypographyParagraph>
    <TypographyParagraph
      class="mb-3 opacity-0"
      data-aos="fade-up"
    >
      For now, I'm focused on growing in the open-source space while also working on my engineering thesis in AI/ML.
    </TypographyParagraph>
    <ImageCaption
      class="opacity-0"
      src="/img/work-1.jpg"
      alt="Lorem ipsum"
      caption="Hello world! That's me!"
      data-aos="fade-up"
    />
  </BaseSectionSubPage>
</template>
