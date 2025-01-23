<script setup lang="ts">
const formSearchQuery = ref("");

const isSearching = computed(() => formSearchQuery.value.length > 0);
</script>

<template>
  <SectionSubPageBase>
    <TypographyHeading
      tag="h1"
      class="mb-3"
    >
      Ideas, Projects, and Lessons I've Learned Along the Way
    </TypographyHeading>
    <TypographyParagraph class="mb-4">
      Each post is a piece of my journey, filled with ideas, projects, and the lessons shaping my path forward.
    </TypographyParagraph>
    <form class="flex flex-col border-b pb-3 border-decorative">
      <FormLabel for="form-search">
        Looking for a particular post?
      </FormLabel>
      <div class="relative">
        <FormInput
          id="form-search"
          v-model="formSearchQuery"
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
  </SectionSubPageBase>
</template>
