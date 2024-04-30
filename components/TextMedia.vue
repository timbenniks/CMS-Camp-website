<script setup lang="ts">
defineProps(["title", "mediaFirst", "media", "text", "ctas"]);

const { imageProvider } = useRuntimeConfig().public;
const provider = computed(() => {
  return imageProvider === "hygraph" ? "hygraph" : "cloudinary";
});
</script>

<template>
  <div class="mb-10 px-6 2xl:px-0 overflow-hidden">
    <div
      class="flex items-center flex-col md:flex-row md:gap-x-16"
      :class="{ 'md:flex-row-reverse flex-col-reverse': mediaFirst }"
    >
      <div class="relative h-full md:w-2/4">
        <Text v-bind="text" />
      </div>
      <NuxtImg
        v-if="media"
        :provider="provider"
        :src="media.url"
        :width="712"
        :height="712"
        sizes="sm:220px md:500px md:700px"
        :alt="title || ''"
        fit="crop"
        class="md:w-2/4 mb-10 md:mb-0"
        loading="lazy"
      />
    </div>
  </div>
</template>
