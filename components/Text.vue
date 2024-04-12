<script setup lang="ts">
defineProps([
  "title",
  "titleType",
  "subtitle",
  "subtitleType",
  "content",
  "ctas",
]);
</script>

<template>
  <article class="mb-20 px-6 2xl:px-0 mx-auto max-w-screen-md">
    <h2 :is="titleType || 'h2'" v-if="title">{{ title }}</h2>
    <h3 :is="subtitleType || 'h3'" v-if="subtitle">{{ subtitle }}</h3>
    <div v-html="content" v-if="content" class="prose" />

    <div class="flex space-y-2 sm:space-x-2 sm:space-y-0 flex-col sm:flex-row">
      <cta v-for="cta in ctas" :cta="cta" :key="cta.id" />
    </div>
  </article>
</template>
