<script setup lang="ts">
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
</script>

<template>
  <nav
    class="
      hidden

      md:block
    "
  >
    <ul class="flex gap-x-6">
      <NuxtLink
        v-for="navigation in siteNavigationData"
        :key="navigation.name"
        class="
          font-light tracking-tight

          after:block after:scale-x-0 after:border-b after:transition-transform
          after:duration-200 after:ease-in-out after:content-['']
          after:border-foreground

          focus-visible:after:scale-x-100

          hover:after:scale-x-100
        "
        to="#"
      >
        {{ navigation.name }}
      </NuxtLink>
    </ul>
  </nav>
  <button
    class="
      bg-primary text-on-primary hidden rounded-xl px-6 py-2 tracking-tight
      transition-colors duration-300

      focus-visible:bg-primary-lighter focus-visible:text-white

      hover:bg-primary-lighter hover:text-white

      md:inline-block
    "
  >
    Contact
  </button>
</template>
