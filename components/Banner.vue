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
    class="mb-20 bg-cover text-center p-8 sm:p-20 mx-6 2xl:mx-0"
    :class="
      noBackground
        ? 'text-primary border border-primary'
        : 'bg-[url(/banner.jpg)] text-light'
    "
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
      v-if="primaryCtas.length"
      :class="
        !!primaryCtas[0].socialMediaIcon
          ? 'flex-row space-x-12'
          : 'flex-col sm:flex-row space-y-2 sm:space-x-4 sm:space-y-0'
      "
      class="flex justify-center mt-10"
    >
      <cta v-for="cta in primaryCtas" :cta="cta" :key="cta.id" />
    </div>
    <div
      v-if="secondaryCtas.length"
      :class="
        !!secondaryCtas[0].socialMediaIcon
          ? 'flex-row space-x-12'
          : 'flex-col sm:flex-row space-y-2 sm:space-x-4 sm:space-y-0'
      "
      class="flex justify-center mt-10"
    >
      <cta v-for="cta in secondaryCtas" :cta="cta" :key="cta.id" />
    </div>
  </article>
</template>
