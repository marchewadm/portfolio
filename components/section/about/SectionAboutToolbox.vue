<script setup lang="ts">
const techCategories = ref(TECH_CATEGORIES.map((techCategoryObject, idx) => ({
  ...techCategoryObject,
  isActive: idx === 0,
})));

const activeCategoryIcons = computed(() => {
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
  <BaseSectionSubPage>
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
      class="mb-3 opacity-0"
      data-aos="fade-up"
    >
      Every developer has their own set of tools &mdash; here's mine. These are the languages, frameworks, and technologies I rely on to build efficient, scalable, and well-structured applications. Whether it's backend development, frontend work, or managing infrastructure, this toolbox helps me turn ideas into reality.
    </TypographyParagraph>
    <ListButtonWrapped
      class="mb-2 opacity-0"
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
          :variant="techCategoryObject.isActive === true ? 'filled' : 'outline'"
          @click="toggleCategory(idx)"
        >
          {{ techCategoryObject.category }}
        </ButtonTag>
      </li>
    </ListButtonWrapped>
    <ListButtonWrapped
      class="
        opacity-0

        md:gap-3
      "
      data-aos="fade-up"
      data-aos-delay="900"
    >
      <li
        v-for="icon in activeCategoryIcons"
        :key="icon.name"
        class="opacity-0 animate-fade-in"
      >
        <CardTechnology
          target="_blank"
          :href="icon.url"
          :icon-name="icon.name"
          :title="`Open the ${icon.label} website in a new tab`"
        >
          {{ icon.label }}
        </CardTechnology>
      </li>
    </ListButtonWrapped>
  </BaseSectionSubPage>
</template>
