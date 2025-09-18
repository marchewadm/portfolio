<script setup lang="ts">
type Props = {
  isLast?: boolean;
};

const { isLast = false } = defineProps<Props>();

const sectionMargin = computed(() => ({
  "my-6 md:my-10": !isLast,
  "mt-6 mb-[68px] md:mt-10 md:mb-[84px]": isLast,
}));
</script>

<template>
  <section
    class="mx-auto max-w-screen-lg px-4"
    :class="sectionMargin"
  >
    <slot />
  </section>
</template>
