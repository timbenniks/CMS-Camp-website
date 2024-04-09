<script lang="ts" setup>
const page = await useGetContentForType({ slug: "home", type: "Page" });
const sponsor = await useGetContentForType({
  slug: "hygraph",
  type: "Sponsor",
});

const news = await useGetContentForType({
  slug: "new-news",
  type: "NewsArticle",
});

const { navigation } = await GqlNavigation();
</script>
<template>
  <pre>{{ navigation }}</pre>
  <pre>{{ news }}</pre>
  <pre>{{ sponsor }}</pre>
  <pre>{{ page }}</pre>
</template>
<style>
:root {
  font-family: Poppins;
}
</style>
