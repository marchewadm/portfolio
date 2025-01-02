<template>
  <SectionBase>
    <TypographyHeading class="mb-1">
      Blog
    </TypographyHeading>
    <TypographyParagraph
      variant="thin"
      class="mb-7"
    >
      From life to technology, my honest musings
    </TypographyParagraph>
    <div
      class="
        mb-4 grid grid-cols-1 gap-y-10

        md:grid-cols-2 md:gap-x-5
      "
    >
      <CardBlogArticle
        image-src="/img/blog-article-1.jpg"
        image-alt="Lorem ipsum dolor sit amet"
      >
        <template #articleTitle>
          Lorem ipsum dolor sit amet
        </template>
        <template #articleDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.
        </template>
      </CardBlogArticle>
      <CardBlogArticle
        image-src="/img/blog-article-2.jpg"
        image-alt="Ut enim ad minim veniam"
      >
        <template #articleTitle>
          Ut enim ad minim veniam
        </template>
        <template #articleDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.
        </template>
      </CardBlogArticle>
      <CardBlogArticle
        image-src="/img/blog-article-3.jpg"
        image-alt="Sed do eiusmod"
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
