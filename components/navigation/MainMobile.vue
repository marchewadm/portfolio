<script setup lang="ts">
const isMenuVisible = ref(false);

function toggleMenu() {
  isMenuVisible.value = !isMenuVisible.value;
}

const siteNavigationData = [
  {
    name: "Home",
  },
  {
    name: "About",
  },
  {
    name: "Blog",
  },
  {
    name: "Selected Works",
  },
];

const socialsNavigationData = [
  {
    iconName: "brand-github",
  },
  {
    iconName: "brand-linkedin",
  },
  {
    iconName: "brand-discord",
  },
  {
    iconName: "mail",
  },
];
</script>

<template>
  <ButtonIcon
    class="md:hidden"
    icon-name="menu-2"
    @click="toggleMenu"
  />
  <div
    v-if="isMenuVisible"
    class="
      absolute left-0 top-0 bg-surface z-50 h-screen w-full overflow-y-auto
    "
  >
    <nav class="flex h-full flex-col">
      <div class="border-b py-6 border-decorative">
        <div class="flex items-center justify-between px-4">
          <ButtonLogo />
          <ButtonIcon
            icon-name="x"
            @click="toggleMenu"
          />
        </div>
      </div>
      <ul class="mt-6 flex flex-col gap-y-4 px-4">
        <li
          v-for="navigation in siteNavigationData"
          :key="navigation.name"
        >
          <ButtonNavigation class="inline-block w-full">
            {{ navigation.name }}
          </ButtonNavigation>
          <div class="border-b pt-2 border-decorative" />
        </li>
        <li>
          <TypographyParagraph class="text-foreground-lighter">
            Theme
          </TypographyParagraph>
          <div class="border-b pt-2 border-decorative" />
        </li>
      </ul>
      <ul class="my-6 flex flex-col gap-y-3 px-4">
        <ButtonVariant class="w-full">
          Get in touch
        </ButtonVariant>
        <ButtonVariant
          class="w-full"
          variant="secondary"
        >
          Resume
        </ButtonVariant>
      </ul>
      <div class="border-t py-6 border-decorative mt-auto">
        <div class="flex items-center justify-between px-12">
          <NuxtLink
            v-for="navigation in socialsNavigationData"
            :key="navigation.iconName"
            class="flex items-center"
            to="#"
            target="_blank"
          >
            <IconBase
              size="lg"
              :icon-name="navigation.iconName"
            />
          </NuxtLink>
        </div>
      </div>
    </nav>
  </div>
</template>
