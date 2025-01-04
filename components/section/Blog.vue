<template>
  <SectionBase>
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
        article-image-src="/img/blog-article-1.jpg"
        article-image-alt="Lorem ipsum dolor sit amet"
        author-image-src="/img/work-1.jpg"
        author="Dawid Merchwa"
        date="Jan 4, 2025"
      >
        <template #articleTitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </template>
        <template #articleDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.
        </template>
      </CardBlogArticle>
      <CardBlogArticle
        article-image-src="/img/blog-article-2.jpg"
        article-image-alt="Ut enim ad minim veniam"
        author-image-src="/img/work-1.jpg"
        author="Dawid Merchwa"
        date="Dec 17, 2024"
      >
        <template #articleTitle>
          Ut enim ad minim veniam
        </template>
        <template #articleDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.
        </template>
      </CardBlogArticle>
      <CardBlogArticle
        article-image-src="/img/blog-article-3.jpg"
        article-image-alt="Sed do eiusmod"
        author-image-src="/img/work-1.jpg"
        author="Dawid Merchwa"
        date="Sep 26, 2024"
      >
        <template #articleTitle>
          Sed do eiusmod
        </template>
        <template #articleDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.
        </template>
      </CardBlogArticle>
    </div>
    <ButtonVariant
      class="
        w-full

        md:w-fit
      "
      variant="secondary"
    >
      See all
    </ButtonVariant>
  </SectionBase>
</template>
