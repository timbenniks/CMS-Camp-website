<script setup lang="ts">
defineProps(["title", "image", "ctAs"]);
</script>

<template>
  <div class="mb-10 px-6 2xl:px-0">
    <h3
      v-if="title"
      class="max-w-screen-md mx-auto text-center text-primary text-3xl font-light uppercase leading-[56px] tracking-wider mb-10"
    >
      {{ title }}
    </h3>

    <NuxtImg
      v-if="image"
      provider="hygraph"
      :src="image.url"
      class="object-fit block w-full"
      :width="image.width"
      :height="image.height"
      sizes="sm:220px md:500px lg:700px xl:1440"
      :alt="title || ''"
      fit="max"
      loading="lazy"
    />

    <div
      class="flex space-y-2 sm:space-x-2 sm:space-y-0 flex-col sm:flex-row mt-10 justify-center"
    >
      <cta v-for="cta in ctAs" :cta="cta" :key="cta.id" />
    </div>
  </div>
</template>
