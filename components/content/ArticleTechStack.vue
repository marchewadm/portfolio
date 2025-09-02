<script setup lang="ts">
type Props = {
  technologies: Array<{ name: string; homepageUrl: string }>;
};

defineProps<Props>();
</script>

<template>
  <ListButtonWrapped>
    <li
      v-for="technology in technologies"
      :key="technology.name"
    >
      <ButtonTag
        variant="filled"
        class="inline-block"
        :href="technology.homepageUrl"
        :title="`Open the ${technology.name} website in a new tab`"
      >
        {{ technology.name }}
      </ButtonTag>
    </li>
  </ListButtonWrapped>
</template>
