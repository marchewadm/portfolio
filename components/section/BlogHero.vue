<script setup lang="ts">
const searchQueryStore = useSearchQueryStore();
const { searchQuery, isSearching } = storeToRefs(searchQueryStore);
</script>

<template>
  <SectionSubPageBase
    class="md:grid md:grid-cols-[1fr_auto] md:items-center md:gap-x-36"
  >
    <div>
      <TypographyHeading
        id="section-blog-hero"
        class="mb-3 opacity-0"
        tag="h1"
        data-aos="fade-up"
      >
        Ideas, Projects, and Lessons I've Learned Along the Way
      </TypographyHeading>
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
        <FormLabelBase
          class="w-fit"
          field-id="form-search"
        >
          Looking for a particular post?
        </FormLabelBase>
        <div class="relative">
          <FormInputBase
            id="form-search"
            v-model="searchQuery"
            class="w-full"
            placeholder="Search posts..."
            minlength="1"
          />
          <IconBase
            v-if="!isSearching"
            icon-name="search"
            class="
              text-decorative-lighter absolute bottom-1/2 right-0 mr-3
              translate-y-1/2
            "
          />
        </div>
      </form>
    </div>
    <SvgoHeroListening
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
