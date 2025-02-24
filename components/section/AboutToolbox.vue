<script setup lang="ts">
const techCategories = ref(TECH_CATEGORIES.map((techCategoryObject, idx) => ({
  ...techCategoryObject,
  isActive: idx === 0,
})));

const getActiveCategoryIcons = computed(() => {
  const activeTechCategoryObject = techCategories.value.find(techCategoryObject => techCategoryObject.isActive);
  return activeTechCategoryObject ? activeTechCategoryObject.icons : [];
});

function toggleCategory(idx: number) {
  if (idx > techCategories.value.length - 1) {
    return;
  }

  const activeTechCategoryIdx = techCategories.value.findIndex(techCategory => techCategory.isActive === true);

  if (idx === activeTechCategoryIdx) {
    return;
  }

  techCategories.value[activeTechCategoryIdx].isActive = false;
  techCategories.value[idx].isActive = true;
}
</script>

<template>
  <SectionSubPageBase>
    <div class="relative mb-3">
      <TypographyHeading
        id="section-about-toolbox"
        class="opacity-0"
        data-aos="fade-up"
      >
        Developer's Toolbox
      </TypographyHeading>
      <div
        class="
          absolute right-full top-0 mr-1 mt-1 hidden opacity-0

          xl:block
        "
        data-aos="zoom-in"
        data-aos-delay="600"
      >
        <SvgoArrowPen
          class="h-20 -translate-y-1/4 -rotate-[37deg]"
          filled
          :font-controlled="false"
        />
      </div>
    </div>
    <TypographyParagraph
      class="mb-3 text-justify opacity-0"
      data-aos="fade-up"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat duis aute irure dolor in.
    </TypographyParagraph>
    <ul
      class="mb-2 flex flex-wrap gap-2 opacity-0"
      data-aos="fade-up"
    >
      <li
        v-for="(techCategoryObject, idx) in techCategories"
        :key="techCategoryObject.category"
        class="opacity-0"
        data-aos="zoom-in"
        :data-aos-delay="idx * 100"
      >
        <ButtonTag
          render-as="button"
          :variant="techCategoryObject.isActive === true ? 'filled' : 'outline'"
          @click="toggleCategory(idx)"
        >
          {{ techCategoryObject.category }}
        </ButtonTag>
      </li>
    </ul>
    <ul
      class="
        flex flex-wrap gap-2 opacity-0

        md:gap-3
      "
      data-aos="fade-up"
      data-aos-delay="900"
    >
      <li
        v-for="icon in getActiveCategoryIcons"
        :key="icon.name"
        class="opacity-0 animate-fade-in"
      >
        <CardTechStack
          :href="icon.url"
          :icon-name="icon.name"
        >
          {{ icon.label }}
        </CardTechStack>
      </li>
    </ul>
  </SectionSubPageBase>
</template>
