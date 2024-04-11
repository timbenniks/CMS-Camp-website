<script lang="ts" setup>
const route = useRoute();
const { slug } = route.params;
const page = await useGetContentForType({ slug: slug as string, type: "Page" });
useOGTags(page);
</script>

<template>
  <template>
    <RenderPage :data="page" />
  </template>
</template>
