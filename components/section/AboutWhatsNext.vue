<template>
  <SectionSubPageBase>
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
      class="mb-2 text-justify opacity-0"
      data-aos="fade-up"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate  velit esse cillum dolore eu fugiat.
    </TypographyParagraph>
    <TypographyParagraph
      class="mb-2 text-justify opacity-0"
      data-aos="fade-up"
    >
      Et harum quidem rerum facilis est et expedita distinctio. Nam libero  tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo  minus id quod maxime placeat facere possimus, omnis voluptas assumenda  est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates  repudiandae sint et molestiae non recusandae.
    </TypographyParagraph>
    <TypographyParagraph
      class="mb-3 text-justify opacity-0"
      data-aos="fade-up"
    >
      Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis  voluptatibus maiores alias consequatur aut perferendis doloribus  asperiores repellat.
    </TypographyParagraph>
    <ImageCaption
      class="opacity-0"
      image-src="/img/work-1.jpg"
      image-alt="Lorem ipsum"
      image-caption="Hello world! That's me!"
      data-aos="fade-up"
    />
  </SectionSubPageBase>
</template>
