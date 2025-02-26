<script setup lang="ts">
type Props = {
  demoUrl?: string;
  sourceCodeUrl?: string;
};

defineProps<Props>();
</script>

<template>
  <div
    v-if="demoUrl || sourceCodeUrl"
    class="
      border-t border-decorative mt-3 flex flex-col gap-y-2 pt-3

      md:gap-y-3
    "
  >
    <LinkIconExternal
      v-if="demoUrl"
      href="#"
      icon-name="world-www"
      title="Try out the demo in a new tab"
    >
      Try out the demo
    </LinkIconExternal>
    <LinkIconExternal
      v-if="sourceCodeUrl"
      href="#"
      icon-name="brand-github"
      title="Explore the source code on GitHub in a new tab"
    >
      View source code on GitHub
    </LinkIconExternal>
  </div>
</template>
