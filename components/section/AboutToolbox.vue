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
    <TypographyHeading class="mb-3">
      Developer's Toolbox
    </TypographyHeading>
    <TypographyParagraph class="mb-3 text-justify">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat duis aute irure dolor in.
    </TypographyParagraph>
    <ul class="mb-2 flex flex-wrap gap-2">
      <li
        v-for="(techCategoryObject, idx) in techCategories"
        :key="techCategoryObject.category"
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
    <ul class="flex flex-wrap gap-2">
      <li
        v-for="icon in getActiveCategoryIcons"
        :key="icon.name"
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
