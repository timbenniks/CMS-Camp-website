<script setup lang="ts">
defineProps([
  "id",
  "slug",
  "name",
  "tagline",
  "sponsorDescription",
  "url",
  "sponsorStatus",
  "logo",
  "masterclass",
  "itemsPerRow",
]);

const { imageProvider } = useRuntimeConfig().public;
const provider = computed(() => {
  return imageProvider === "hygraph" ? "hygraph" : "cloudinary";
});
</script>

<template>
  <template v-if="itemsPerRow === 'one'">
    <div class="grid grid-cols-1 lg:grid-cols-2 mb-10">
      <NuxtImg
        v-if="logo"
        :provider="provider"
        :src="logo.url"
        :width="470"
        sizes="sm:220px md:500px md:700px"
        :alt="name || ''"
        class="max-w-[300px] lg:max-w-[600px] mx-auto object-contain"
      />
      <article class="lg:px-32">
        <h3 class="text-yellow-500 font-bold text-5xl mb-2" v-if="name">
          {{ name }}
        </h3>
        <p class="font-bold mb-4" v-if="tagline">{{ tagline }}</p>
        <div
          class="prose"
          v-if="sponsorDescription"
          v-html="sponsorDescription"
        />

        <div
          class="flex justify-start mt-4 flex-col sm:flex-row space-y-2 sm:space-x-4 sm:space-y-0"
          v-if="masterclass?.url || url"
        >
          <nuxt-link
            v-if="masterclass?.url"
            :to="masterclass.url"
            class="cta small"
            >Masterclass</nuxt-link
          >
          <nuxt-link v-if="url" :to="url" target="_blank" class="cta small"
            >More about</nuxt-link
          >
        </div>
      </article>
    </div>
  </template>
  <template v-if="itemsPerRow === 'two'">
    <div class="mb-10 text-center">
      <NuxtImg
        v-if="logo"
        :provider="provider"
        :src="logo.url"
        :width="470"
        sizes="sm:220px md:500px md:700px"
        :alt="name || ''"
        class="max-w-[470px] mx-auto object-contain"
      />
      <article class="lg:px-32">
        <h3 class="text-neutral-400 font-bold text-3xl mb-6" v-if="name">
          {{ name }}
        </h3>
        <p v-if="url">
          <nuxt-link :to="url" target="_blank" class="cta small"
            >More about</nuxt-link
          >
        </p>
      </article>
    </div>
  </template>
  <template v-if="itemsPerRow === 'three'">
    <div class="mb-10 px-20">
      <nuxt-link :to="url" v-if="url">
        <NuxtImg
          v-if="logo"
          :provider="provider"
          :src="logo.url"
          :width="470"
          sizes="sm:220px md:500px md:700px"
          :alt="name || ''"
          class="max-w-[470px] mx-auto object-contain"
          loading="lazy"
        />
      </nuxt-link>
    </div>
  </template>
</template>
