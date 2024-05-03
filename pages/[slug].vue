<script lang="ts" setup>
const route = useRoute();
const { slug } = route.params;
const { $preview } = useNuxtApp();
const page = await useGetContentForType({ slug: slug as string, type: "Page" });

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
