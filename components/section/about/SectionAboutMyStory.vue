<template>
  <BaseSectionSubPage>
    <div class="relative mb-3">
      <TypographyHeading
        id="section-about-my-story"
        class="opacity-0"
        data-aos="fade-up"
      >
        My Story
      </TypographyHeading>
      <div
        class="
          absolute right-full mr-3 mt-1 hidden opacity-0

          xl:block
        "
        data-aos="zoom-in"
        data-aos-delay="600"
      >
        <SvgoArrowReverse
          class="h-14 rotate-6"
          filled
          :font-controlled="false"
        />
      </div>
    </div>
    <TypographyParagraph
      class="mb-2 text-justify opacity-0"
      data-aos="fade-up"
    >
      At this time, I'm a third-year Computer Science student. But I didn't wake up one day and decide to become a developer &mdash; it just kind of happened.
    </TypographyParagraph>
    <TypographyParagraph
      class="mb-2 text-justify opacity-0"
      data-aos="fade-up"
    >
      Back then, <LinkUnderline
        href="https://www.minecraft.net"
        title="Open the Minecraft website in a new tab"
      >
        Minecraft</LinkUnderline> was
      hugely popular among kids, and I was no exception &mdash; I spent countless hours playing it. One day, while playing on a server, someone in the global chat mentioned that they were struggling to set up their own server. I was only around nine years old at the time and had absolutely no idea how servers worked &mdash; neither in Minecraft nor in any other game. But for some reason, I told him I could fix it.
    </TypographyParagraph>
    <TypographyParagraph
      class="mb-2 text-justify opacity-0"
      data-aos="fade-up"
    >
      I started searching the internet, digging through forums, and after a while, I managed to find a solution. We ended up working together to build our own server, and that's where it all began. Setting up game servers, running online forums &mdash; it was my first step into the world of technology.
    </TypographyParagraph>
    <TypographyParagraph
      class="text-justify opacity-0"
      data-aos="fade-up"
    >
      But the real hero of this story is my father. He was the one who first showed me how to build a PC, sparking my curiosity and passion for technology. For that, I'll always be grateful.
    </TypographyParagraph>
  </BaseSectionSubPage>
</template>
