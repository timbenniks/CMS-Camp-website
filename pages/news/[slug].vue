<script lang="ts" setup>
const route = useRoute();
const { slug } = route.params;
const page = await useGetContentForType({ slug: slug as string, type: "News" });

const { $preview } = useNuxtApp();

useSeoMeta({
  title: `${$preview ? "⚡️ " : ""} ${page.title}`,
  ogTitle: page.title,
  description: page.description,
  ogDescription: page.description,
  ogImage: page.image.url,
  ogSiteName: "CMS Camp",
  ogType: "website",
  twitterCard: "summary_large_image",
  twitterDescription: page.description,
});
</script>

<template>
  <template>
    <RenderPage :data="page" />
  </template>
</template>
