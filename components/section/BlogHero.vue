<script setup lang="ts">
const searchQuery = useSearchQuery();

const isSearching = computed(() => searchQuery.value.length > 0);
</script>

<template>
  <SectionSubPageBase
    class="md:grid md:grid-cols-[1fr_auto] md:items-center md:gap-x-36"
  >
    <div>
      <TypographyHeading
        id="section-blog-hero"
        tag="h1"
        class="mb-3"
      >
        Ideas, Projects, and Lessons I've Learned Along the Way
      </TypographyHeading>
      <TypographyParagraph class="mb-4">
        Each post is a piece of my journey, filled with ideas, projects, and the lessons shaping my path forward.
      </TypographyParagraph>
      <form
        class="
          flex flex-col border-b pb-3 border-decorative

          md:border-none md:pb-0
        "
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
        hidden h-[430px]

        md:block
      "
      filled
      :font-controlled="false"
    />
  </SectionSubPageBase>
</template>
