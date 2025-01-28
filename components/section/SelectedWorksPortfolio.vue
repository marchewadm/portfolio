<script setup lang="ts">
const route = useRoute();

const { data: portfolios } = await useAsyncData(route.path, () => {
  return queryCollection("portfolio").order("createdAt", "DESC").all();
});
</script>

<template>
  <SectionSubPageBase class="w-full">
    <TypographyHeading class="mb-3">
      Selected Works
    </TypographyHeading>
    <template v-if="portfolios">
      <article
        v-for="(portfolio, index) in portfolios"
        :key="portfolio.path"
      >
        <TypographyTitle>
          {{ portfolio.title }}
        </TypographyTitle>
        <TypographyParagraph class="text-foreground-lighter">
          {{ portfolio.subtitle }}
        </TypographyParagraph>
        <div
          v-if="portfolio.demoUrl || portfolio.sourceCodeUrl"
          class="
            mt-2 flex flex-col gap-y-2 place-self-start

            md:gap-y-3
          "
        >
          <LinkIconExternal
            v-if="portfolio.demoUrl"
            icon-name="world-www"
            :href="portfolio.demoUrl"
          >
            Try out the demo
          </LinkIconExternal>
          <LinkIconExternal
            v-if="portfolio.sourceCodeUrl"
            icon-name="brand-github"
            :href="portfolio.sourceCodeUrl"
          >
            View source code on GitHub
          </LinkIconExternal>
        </div>
        <NuxtImg
          class="
            mb-2 mt-3 h-52 w-full rounded-xl object-cover grayscale
            transition-all duration-300

            hover:grayscale-0

            lg:h-[500px]

            md:mt-4 md:h-96
          "
          loading="lazy"
          :src="portfolio.image"
          :alt="portfolio.alt"
        />
        <TypographyParagraph class="mb-3 text-justify">
          {{ portfolio.description }}
        </TypographyParagraph>
        <ButtonVariant
          class="
            mx-auto w-full

            md:w-fit
          "
          variant="secondary"
          :href="portfolio.path"
        >
          Read more
        </ButtonVariant>
        <div
          class="
            flex flex-wrap gap-2 pt-3

            md:pt-4
          "
          :class="{ 'border-b border-decorative mb-3 pb-3': index !== portfolios.length - 1 }"
        >
          <ButtonTag
            v-for="technology in portfolio.technologies"
            :key="technology.name"
            :href="technology.homepageUrl"
            render-as="link"
            variant="filled"
          >
            {{ technology.name }}
          </ButtonTag>
        </div>
      </article>
    </template>
  </SectionSubPageBase>
</template>
