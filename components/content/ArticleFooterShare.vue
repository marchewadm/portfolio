<script setup lang="ts">
type Props = {
  linkedinUrl?: string;
  xUrl?: string;
  githubUrl: string;
};

defineProps<Props>();
</script>

<template>
  <ListLinkWithIconBordered>
    <li v-if="linkedinUrl">
      <LinkWithIcon
        :href="linkedinUrl"
        target="_blank"
        icon-name="brand-linkedin"
        title="Share this post on LinkedIn in a new tab"
      >
        Share on LinkedIn
      </LinkWithIcon>
    </li>
    <li v-if="xUrl">
      <LinkWithIcon
        :href="xUrl"
        target="_blank"
        icon-name="brand-x"
        title="Share this post on X in a new tab"
      >
        Share on X
      </LinkWithIcon>
    </li>
    <li>
      <LinkWithIcon
        :href="githubUrl"
        target="_blank"
        icon-name="brand-github"
        title="Edit this post on GitHub in a new tab"
      >
        Edit on GitHub
      </LinkWithIcon>
    </li>
  </ListLinkWithIconBordered>
</template>
