<script setup lang="ts">
type Props = {
  tag?: "h1" | "h2";
  id: string;
};

const { id, tag = "h2" } = defineProps<Props>();

const variantClasses = computed(() => ({
  "text-2xl md:text-5xl": tag === "h1",
  "text-2xl md:text-4xl": tag === "h2",
}));

const formattedLink = computed(() => `#${id}`);
</script>

<template>
  <component
    :is="tag"
    :id="id"
    class="font-medium tracking-tight"
    :class="variantClasses"
  >
    <a :href="formattedLink">
      <slot />
    </a>
  </component>
</template>
