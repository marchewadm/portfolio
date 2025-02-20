<script setup lang="ts">
import { useFuse } from "@vueuse/integrations/useFuse";

const searchQuery = useSearchQuery();

const { data: posts } = await useAsyncData("blog", () => {
  return queryCollection("blog").order("date", "DESC").all();
});

const { results: queriedPosts } = useFuse(toRef(() => searchQuery.value), posts.value ?? [], {
  fuseOptions: {
    keys: ["title", "description", "date", "articleTags.name"],
  },
});

const headingText = computed(() =>
  searchQuery.value.length === 0 ? "Recent posts" : "Search results for ",
);

const displayedPosts = computed(() =>
  searchQuery.value.length > 0
    ? queriedPosts.value.map(({ item: queriedPost }) => queriedPost)
    : posts.value ?? [],
);

const showNoResults = computed(() =>
  searchQuery.value.length > 0 && displayedPosts.value.length === 0,
);
</script>

<template>
  <SectionSubPageBase class="w-full flex-grow">
    <TypographyHeading
      id="section-blog-recent-posts"
      class="mb-3 truncate"
    >
      <span :class="{ 'text-foreground-lighter': searchQuery }">
        {{ headingText }}
      </span>
      <span v-if="searchQuery.length > 0">
        {{ searchQuery }}
      </span>
    </TypographyHeading>
    <div
      class="
        grid grid-cols-1 gap-6

        md:grid-cols-2
      "
    >
      <template v-if="displayedPosts.length">
        <CardBlogArticle
          v-for="post in displayedPosts"
          :key="post.id"
          :author="post.author"
          :author-image-src="post.avatar"
          :article-image-alt="post.alt"
          :article-image-src="post.image"
          :date="post.date"
          :href="post.path"
        >
          <template #articleTitle>
            {{ post.title }}
          </template>
          <template #articleDescription>
            {{ post.description }}
          </template>
        </CardBlogArticle>
      </template>
      <div v-if="showNoResults">
        <TypographyParagraph>
          It seems there are no articles related to your search.
        </TypographyParagraph>
        <TypographyParagraph>
          Try another search term.
        </TypographyParagraph>
      </div>
    </div>
  </SectionSubPageBase>
</template>
