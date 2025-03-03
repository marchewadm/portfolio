<script setup lang="ts">
const isMenuVisible = ref(false);

function toggleMenu() {
  isMenuVisible.value = !isMenuVisible.value;
}
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
          v-for="link in MAIN_NAVIGATION"
          :key="link.text"
        >
          <ButtonNavigation
            class="inline-block w-full"
            :href="link.href"
            :title="link.title"
          >
            {{ link.text }}
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
        <ButtonVariant
          class="w-full"
          href="/#section-home-contact"
          title="Visit the contact section"
        >
          Get in touch
        </ButtonVariant>
        <ButtonVariant
          class="w-full"
          variant="secondary"
          href="#"
          title="View my resume in a new tab"
        >
          Resume
        </ButtonVariant>
      </ul>
      <div class="border-t py-6 border-decorative mt-auto">
        <div class="flex items-center justify-between px-12">
          <NuxtLink
            v-for="link in SOCIAL_NAVIGATION"
            :key="link.text"
            class="flex items-center"
            to="#"
            target="_blank"
            :title="link.title"
          >
            <IconBase
              size="lg"
              :icon-name="link.iconName"
            />
          </NuxtLink>
        </div>
      </div>
    </nav>
  </div>
</template>
