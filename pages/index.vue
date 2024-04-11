<script lang="ts" setup>
const page = await useGetContentForType({ slug: "home", type: "Page" });
useOGTags(page);
</script>

<template>
  <RenderPage :data="page" />
</template>
