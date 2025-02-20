<script setup lang="ts">
type Props = {
  buttonType: "blog" | "selectedWorks";
};

const { buttonType } = defineProps<Props>();

const buttonLink = computed(() => buttonType === "blog" ? "/blog" : "/selected-works");

const buttonText = computed(() => buttonType === "blog" ? "Return to articles" : "Return to portfolio");
</script>

<template>
  <NuxtLink
    class="
      mb-3 flex items-center gap-x-2 transition-colors duration-300
      text-foreground-lighter w-fit

      focus-visible:text-foreground-lightest

      hover:text-foreground-lightest
    "
    :href="buttonLink"
  >
    <IconBase
      icon-name="arrow-left"
      size="sm"
    />
    <span
      class="
        text-sm font-light tracking-tight

        md:text-base
      "
    >
      {{ buttonText }}
    </span>
  </NuxtLink>
</template>
