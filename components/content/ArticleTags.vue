<script setup lang="ts">
type Props = {
  tags: Array<{ name: string }>;
};

defineProps<Props>();

const { updateSearchQuery } = useSearchQueryStore();
</script>

<template>
  <ListButtonWrapped class="mb-6">
    <li
      v-for="tag in tags"
      :key="tag.name"
    >
      <ButtonTag
        href="/blog"
        target="_self"
        variant="filled"
        class="inline-block"
        :title="`Find more posts related to ${tag.name}`"
        @click="updateSearchQuery(tag.name)"
      >
        {{ tag.name }}
      </ButtonTag>
    </li>
  </ListButtonWrapped>
</template>
