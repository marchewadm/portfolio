<script setup lang="ts">
type Props = {
  demoUrl?: string;
  sourceCodeUrl?: string;
  useAnimations?: boolean;
  bordered?: boolean;
};

const { useAnimations = false, bordered = false } = defineProps<Props>();

const asTag = computed(() =>
  (bordered ? resolveComponent("ListLinkWithIconBordered") : resolveComponent("BaseListLinkWithIcon")),
);

const animationClasses = computed(() => ({ "opacity-0": useAnimations }));
const animationAttributes = computed(() => useAnimations ? { "data-aos": "fade-up" } : {});
</script>

<template>
  <component
    :is="asTag"
    v-if="demoUrl || sourceCodeUrl"
  >
    <li
      v-if="demoUrl"
      v-bind="animationAttributes"
      :class="animationClasses"
    >
      <LinkWithIcon
        icon-name="world-www"
        title="Try out the demo in a new tab"
        target="_blank"
        :href="demoUrl"
      >
        Try out the demo
      </LinkWithIcon>
    </li>
    <li
      v-if="sourceCodeUrl"
      v-bind="animationAttributes"
      :class="animationClasses"
    >
      <LinkWithIcon
        icon-name="brand-github"
        title="Explore the source code on GitHub in a new tab"
        target="_blank"
        :href="sourceCodeUrl"
      >
        View source code on GitHub
      </LinkWithIcon>
    </li>
  </component>
</template>
