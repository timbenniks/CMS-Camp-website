<script setup lang="ts">
defineProps([
  "title",
  "content",
  "noBackground",
  "primaryCtas",
  "secondaryCtas",
]);
</script>

<template>
  <article
    class="mb-20 bg-cover text-center p-"
    :class="noBackground ? 'text-primary' : 'bg-[url(/banner.jpg)] text-light'"
  >
    <h3 v-if="title" class="text-3xl md:text-5xl font-bold mb-2">
      {{ title }}
    </h3>

    <div
      v-html="content.html"
      v-if="content"
      class="prose mt-8 mx-auto max-w-prose"
      :class="noBackground ? 'text-primary' : 'text-light'"
    />

    <div
      class="flex space-y-2 justify-center sm:space-x-2 sm:space-y-0 flex-col sm:flex-row mt-10"
    >
      <cta v-for="cta in primaryCtas" :cta="cta" :key="cta.id" />
    </div>

    <div
      class="flex space-y-2 sm:space-x-2 sm:space-y-0 flex-col sm:flex-row mt-10"
    >
      <cta v-for="cta in secondaryCtas" :cta="cta" :key="cta.id" />
    </div>
  </article>
</template>
