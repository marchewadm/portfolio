<script setup lang="ts">
const { data: posts } = await useAsyncData("blog", () => {
  return queryCollection("blog").order("date", "DESC").limit(4).all();
});
</script>

<template>
  <SectionHomeBase>
    <TypographyHeading
      id="section-home-blog"
      class="mb-1 opacity-0"
      data-aos="fade-up"
    >
      Blog
    </TypographyHeading>
    <TypographyParagraph
      variant="thin"
      class="mb-3 opacity-0"
      data-aos="fade-up"
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
        class="opacity-0"
        data-aos="fade-up"
      >
        <template #articleTitle>
          {{ post.title }}
        </template>
        <template #articleDescription>
          {{ post.description }}
        </template>
      </CardBlogArticle>
    </div>
    <div
      class="
        w-full opacity-0

        md:w-fit
      "
      data-aos="fade-up"
    >
      <ButtonVariant
        variant="secondary"
        href="/blog"
      >
        See all
      </ButtonVariant>
    </div>
  </SectionHomeBase>
</template>
