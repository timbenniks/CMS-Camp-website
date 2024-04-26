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
  <article class="mb-10 px-6 2xl:px-0 mx-auto max-w-screen-md">
    <h2
      :is="titleType || 'h2'"
      v-if="title"
      class="text-3xl md:text-4xl font-bold mb-2"
    >
      {{ title }}
    </h2>
    <h3 :is="subtitleType || 'h3'" v-if="subtitle" class="text-xl font-bold">
      {{ subtitle }}
    </h3>
    <div v-html="content.html" v-if="content" class="prose mt-8" />

    <div
      class="flex space-y-2 sm:space-x-2 sm:space-y-0 flex-col sm:flex-row mt-10"
    >
      <cta v-for="cta in ctas" :cta="cta" :key="cta.id" />
    </div>
  </article>
</template>
