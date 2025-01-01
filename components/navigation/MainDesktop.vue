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
        class="font-light tracking-tight"
        to="#"
      >
        {{ navigation.name }}
      </NuxtLink>
    </ul>
  </nav>
  <button
    class="
      bg-primary text-on-primary hidden rounded-xl px-6 py-2 tracking-tight

      md:inline-block
    "
  >
    Contact
  </button>
</template>
