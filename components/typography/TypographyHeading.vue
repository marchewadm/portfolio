<script setup lang="ts">
type Props = {
  id: string;
  asTag?: "h1" | "h2";
};

const { id, asTag = "h2" } = defineProps<Props>();

const formattedLink = computed(() => `#${id}`);

const variantClasses = computed(() => ({
  "text-2xl md:text-5xl": asTag === "h1",
  "text-2xl md:text-4xl": asTag === "h2",
}));
</script>

<template>
  <component
    :is="asTag"
    :id="id"
    class="font-medium tracking-tight"
    :class="variantClasses"
  >
    <NuxtLink :to="formattedLink">
      <slot />
    </NuxtLink>
  </component>
</template>
