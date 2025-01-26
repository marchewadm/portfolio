<script setup lang="ts">
const { data: posts } = await useAsyncData("blog", () => {
  return queryCollection("blog").order("date", "DESC").all();
});
</script>

<template>
  <SectionSubPageBase class="w-full flex-grow">
    <TypographyHeading class="mb-3">
      Recent posts
    </TypographyHeading>
    <div
      class="
        grid grid-cols-1 gap-6

        md:grid-cols-2
      "
    >
      <CardBlogArticle
        v-for="post in posts"
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
    </div>
    <!-- <TypographyParagraph
      class="text-left"
    >
      It seems there are no articles related to your search.
    </TypographyParagraph>
    <TypographyParagraph
      class="text-left"
    >
      Try another search term.
    </TypographyParagraph> -->
  </SectionSubPageBase>
</template>
