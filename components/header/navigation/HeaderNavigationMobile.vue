<script setup lang="ts">
const route = useRoute();
const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

watch(() => route.fullPath, (newVal, oldVal) => {
  if (newVal !== oldVal && isMenuOpen.value) {
    toggleMenu();
  }
});
</script>

<template>
  <ButtonIcon
    aria-label="Open menu"
    class="md:hidden"
    icon-name="menu-2"
    @click="toggleMenu"
  />
  <Transition name="fade">
    <div
      v-if="isMenuOpen"
      class="
        bg-surface absolute left-0 top-0 z-50 h-screen w-full overflow-y-auto
      "
    >
      <div
        class="h-dvh transition-all"
      >
        <div class="flex h-full flex-col">
          <div class="border-b py-6 border-decorative">
            <div class="flex items-center justify-between px-4">
              <LinkLogo />
              <ButtonIcon
                aria-label="Close menu"
                icon-name="x"
                @click="toggleMenu"
              />
            </div>
          </div>
          <nav class="mt-6 px-4">
            <ul class="flex flex-col gap-y-4">
              <li
                v-for="link in MAIN_NAVIGATION"
                :key="link.text"
                class="border-b pb-2 border-decorative"
              >
                <BaseLinkNavigation
                  class="
                    inline-block w-full transition-colors duration-300

                    focus-visible:text-foreground-lighter

                    hover:text-foreground-lighter
                  "
                  :href="link.href"
                  :title="link.title"
                >
                  {{ link.text }}
                </BaseLinkNavigation>
              </li>
            </ul>
          </nav>
          <nav class="my-6 px-4">
            <ul class="flex flex-col gap-y-4">
              <li>
                <BaseButtonVariant
                  class="w-full"
                  href="/#section-home-contact"
                  title="Visit the contact section"
                >
                  Contact
                </BaseButtonVariant>
              </li>
              <li>
                <BaseButtonVariant
                  class="w-full"
                  variant="secondary"
                  href="#"
                  title="View my resume in a new tab"
                  target="_blank"
                >
                  Resume
                </BaseButtonVariant>
              </li>
            </ul>
          </nav>
          <nav class="border-t py-6 border-decorative mt-auto">
            <ul class="flex items-center justify-between px-12">
              <li
                v-for="link in SOCIAL_NAVIGATION"
                :key="link.text"
              >
                <ButtonIcon
                  class="
                    transition-colors duration-300

                    focus-visible:text-foreground-lighter

                    hover:text-foreground-lighter
                  "
                  variant="lg"
                  target="_blank"
                  :href="link.href"
                  :title="link.title"
                  :icon-name="link.iconName"
                />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
 transition: opacity 0.15s ease;
}

.fade-enter-from, .fade-leave-to {
 opacity: 0;
}

.fade-enter-to, .fade-leave-from {
 opacity: 1;
}
</style>
