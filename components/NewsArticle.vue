<script setup lang="ts">
const props = defineProps([
  "id",
  "slug",
  "title",
  "subtitle",
  "description",
  "image",
]);
const { imageProvider } = useRuntimeConfig().public;
const provider = computed(() => {
  return imageProvider === "hygraph" ? "hygraph" : "cloudinary";
});
</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 mb-10">
    <NuxtImg
      v-if="image"
      :provider="provider"
      :src="image.url"
      :width="500"
      :height="500"
      sizes="sm:220px md:500px md:700px"
      :alt="title || ''"
      class="lg:max-w-[469px] mb-8 lg:mb-0"
      fit="crop"
      loading="lazy"
    />
    <article class="flex flex-col justify-center">
      <h3 class="font-bold text-5xl mb-2" v-if="title">
        {{ title }}
      </h3>
      <p class="font-bold mb-4" v-if="subtitle">{{ subtitle }}</p>
      <div class="prose" v-html="description" />
      <p class="mt-10">
        <nuxt-link :to="`/news/${slug}`" class="cta small"
          >More about</nuxt-link
        >
      </p>
    </article>
  </div>
</template>
