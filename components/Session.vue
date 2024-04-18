<script setup lang="ts">
const props = defineProps(["id", "title", "theme", "sessionTheme", "speaker"]);
</script>

<template>
  <div class="mb-10 flex flex-row bg-zinc-100 p-4">
    <div class="w-1/3">
      <NuxtImg
        v-if="speaker.image"
        provider="hygraph"
        :src="speaker.image.url"
        :width="70"
        :height="70"
        sizes="sm:220px"
        :alt="speaker.name || ''"
        class="mb-2 max-w-24"
        fit="crop"
      />
      <p v-if="speaker">{{ speaker.name }}</p>
    </div>
    <div
      class="w-2/3 pl-6 border-l-2 max-w-prose"
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
