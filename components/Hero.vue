<script setup lang="ts">
const props = defineProps([
  "headline",
  "description",
  "backgroundImage",
  "backgroundImageDarkness",
  "logoImage",
  "ctas",
]);
</script>

<template>
  <div class="mb-20 aspect-[1440/732] relative text-light">
    <div class="relative aspect-[1440/732]">
      <NuxtImg
        provider="hygraph"
        :src="backgroundImage.url"
        class="absolute w-full h-auto"
        width="1440"
        height="732"
        :quality="100"
        sizes="sm:100vw"
        :alt="headline"
        fit="crop"
      />
      <div
        class="bg-black absolute top-0 left-0 w-full h-full"
        :style="`opacity: ${backgroundImageDarkness / 100}`"
      ></div>
    </div>

    <img
      v-if="logoImage"
      :src="logoImage.url"
      class="absolute w-2/3 h-auto top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4"
      :width="logoImage.width"
      :height="logoImage.height"
      :alt="headline"
    />

    <div
      v-else
      class="max-w-screen-md absolute w-2/3 h-auto top-2/4 left-32 -translate-y-2/4"
    >
      <h1
        v-if="headline"
        class="text-light text-6xl mb-6 font-bold leading-none"
      >
        {{ headline }}
      </h1>
      <p v-if="description" class="text-light text-xl mb-6">
        {{ description }}
      </p>
      <div class="flex space-x-2">
        <cta v-for="cta in ctas" :cta="cta" :key="cta.id" />
      </div>
    </div>
  </div>
</template>
