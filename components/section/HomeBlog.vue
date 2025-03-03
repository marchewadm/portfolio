<script setup lang="ts">
const { data: posts } = await useAsyncData("blog", () => {
  return queryCollection("blog").order("date", "DESC").limit(4).all();
});
</script>

<template>
  <SectionHomeBase
    heading="Blog"
    heading-id="section-home-blog"
    subtitle="From life to technology, my honest musings"
  >
    <div
      class="
        mb-3 grid grid-cols-1 gap-6

        md:grid-cols-2
      "
    >
      <CardBlogArticle
        v-for="post in posts"
        :key="post.id"
        :href="post.path"
        :date="post.date"
        :author="post.author"
        :author-image-src="post.avatar"
        :article-title="post.title"
        :article-description="post.description"
        :article-image-alt="post.alt"
        :article-image-src="post.image"
        class="opacity-0"
        data-aos="fade-up"
      />
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
        title="Discover more articles on the blog page"
      >
        See all
      </ButtonVariant>
    </div>
  </SectionHomeBase>
</template>
