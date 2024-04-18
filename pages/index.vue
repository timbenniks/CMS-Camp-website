<script lang="ts" setup>
const page = await useGetContentForType({ slug: "home", type: "Page" });

const { $preview } = useNuxtApp();

useSeoMeta({
  title: `${$preview ? "⚡️ " : ""} ${page?.openGraphTitle}`,
  ogTitle: page?.openGraphTitle,
  description: page?.openGraphDescription,
  ogDescription: page?.openGraphDescription,
  ogImage: page?.openGraphImage?.url,
  ogSiteName: "CMS Camp",
  ogType: "website",
  twitterCard: "summary_large_image",
  twitterDescription: page?.openGraphDescription,
});
</script>

<template>
  <RenderPage :data="page" />
</template>
