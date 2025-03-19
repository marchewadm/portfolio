<script setup lang="ts">
const searchQueryStore = useSearchQueryStore();
const { searchQuery, isSearching } = storeToRefs(searchQueryStore);
</script>

<template>
  <BaseSectionSubPageHero
    heading="Ideas, Projects, and Lessons I've Learned Along the Way"
    heading-id="section-blog-hero"
    illustration="listening"
  >
    <TypographyParagraph
      class="mb-4 opacity-0"
      data-aos="fade-up"
      data-aos-delay="600"
    >
      Each post is a piece of my journey, filled with ideas, projects, and the lessons shaping my path forward.
    </TypographyParagraph>
    <form
      class="
        flex flex-col border-b pb-3 border-decorative opacity-0

        md:border-none md:pb-0
      "
      data-aos="fade-left"
      data-aos-delay="1200"
    >
      <BaseFormLabel field-id="form-search">
        Looking for a particular post?
      </BaseFormLabel>
      <div class="relative">
        <BaseFormInput
          id="form-search"
          v-model="searchQuery"
          class="w-full"
          placeholder="Search posts..."
          minlength="1"
        />
        <BaseIcon
          v-if="!isSearching"
          icon-name="search"
          class="
            text-decorative-lighter absolute bottom-1/2 right-0 mr-3
            translate-y-1/2
          "
        />
      </div>
    </form>
  </BaseSectionSubPageHero>
</template>
