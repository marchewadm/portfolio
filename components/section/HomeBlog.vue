<script setup lang="ts">
const { data: posts } = await useAsyncData("blog", () => {
  return queryCollection("blog").order("date", "DESC").limit(4).all();
});
</script>

<template>
  <SectionHomeBase>
    <TypographyHeading class="mb-1">
      Blog
    </TypographyHeading>
    <TypographyParagraph
      variant="thin"
      class="mb-3"
    >
      From life to technology, my honest musings
    </TypographyParagraph>
    <div
      class="
        mb-3 grid grid-cols-1 gap-6

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
    <ButtonVariant
      class="
        w-full

        md:w-fit
      "
      variant="secondary"
      href="/blog"
    >
      See all
    </ButtonVariant>
  </SectionHomeBase>
</template>
