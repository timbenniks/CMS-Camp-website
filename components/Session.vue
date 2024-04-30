<script setup lang="ts">
defineProps(["id", "title", "theme", "sessionTheme", "speaker"]);

const { imageProvider } = useRuntimeConfig().public;
const provider = computed(() => {
  return imageProvider === "hygraph" ? "hygraph" : "cloudinary";
});
</script>

<template>
  <div class="mb-10 flex flex-col md:flex-row bg-zinc-100 p-4">
    <div class="md:w-1/3">
      <NuxtImg
        v-if="speaker.image"
        :provider="provider"
        :src="speaker.image.url"
        :width="70"
        :height="70"
        sizes="sm:220px"
        :alt="speaker.name || ''"
        class="mb-2 max-w-24"
        fit="crop"
        loading="lazy"
      />
      <p v-if="speaker">{{ speaker.name }}</p>
    </div>
    <div
      class="md:w-2/3 pt-4 mt-4 md:pt-0 md:mt-0 md:pl-6 border-t-2 md:border-t-0 md:border-l-2 max-w-prose"
      :style="`border-color: ${sessionTheme.color.hex}`"
    >
      <p
        class="font-bold text-xl mb-4"
        :style="`color: ${sessionTheme.color.hex}`"
        v-if="title"
      >
        {{ title }}
      </p>
      <div v-if="theme" v-html="theme" />
    </div>
  </div>
</template>
