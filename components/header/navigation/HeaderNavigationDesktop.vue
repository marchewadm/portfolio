<template>
  <nav
    class="
      hidden

      md:block
    "
  >
    <ul class="flex gap-x-6">
      <li
        v-for="link in MAIN_NAVIGATION"
        :key="link.text"
      >
        <BaseLinkNavigation
          class="
            after:block after:scale-x-0 after:border-b
            after:transition-transform after:duration-200 after:ease-in-out
            after:content-[''] after:border-foreground

            focus-visible:after:scale-x-100

            hover:after:scale-x-100
          "
          :to="link.href"
          :title="link.title"
        >
          {{ link.text }}
        </BaseLinkNavigation>
      </li>
    </ul>
  </nav>
  <div
    class="
      hidden

      md:block
    "
  >
    <BaseButtonVariant
      href="/#section-home-contact"
      title="Visit the contact section"
      class="md:!text-base"
    >
      Contact
    </BaseButtonVariant>
  </div>
</template>
