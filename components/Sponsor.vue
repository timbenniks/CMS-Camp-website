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
]);
</script>

<template>
  <template v-if="sponsorStatus === 'gold'">
    <div class="grid grid-cols-1 lg:grid-cols-2 mb-20">
      <NuxtImg
        v-if="logo"
        provider="hygraph"
        :src="logo.url"
        :width="470"
        :height="200"
        sizes="sm:220px md:500px md:700px"
        :alt="name || ''"
        class="max-w-[300px] lg:max-w-[600px] mx-auto"
      />
      <article class="lg:px-32">
        <h3 class="text-yellow-500 font-bold text-5xl mb-2" v-if="name">
          {{ name }}
        </h3>
        <p class="font-bold mb-4" v-if="tagline">{{ tagline }}</p>
        <div class="prose" v-html="sponsorDescription" />

        <div
          class="flex justify-start mt-4 flex-col sm:flex-row space-y-2 sm:space-x-4 sm:space-y-0"
        >
          <nuxt-link :to="masterclass.url" class="cta small"
            >Masterclass</nuxt-link
          >
          <nuxt-link :to="url" class="cta small">More about</nuxt-link>
        </div>
      </article>
    </div>
  </template>
  <template v-if="sponsorStatus === 'silver'">
    <div class="mb-20 text-center">
      <NuxtImg
        v-if="logo"
        provider="hygraph"
        :src="logo.url"
        :width="470"
        :height="200"
        sizes="sm:220px md:500px md:700px"
        :alt="name || ''"
        class="max-w-[470px] mx-auto"
        fit="crop"
      />
      <article class="lg:px-32">
        <h3 class="text-neutral-400 font-bold text-3xl mb-6" v-if="name">
          {{ name }}
        </h3>
        <p><nuxt-link :to="url" class="cta small">More about</nuxt-link></p>
      </article>
    </div>
  </template>
  <template v-if="sponsorStatus === 'bronze'">
    <div class="mb-20 px-20">
      <nuxt-link :to="url">
        <NuxtImg
          v-if="logo"
          provider="hygraph"
          :src="logo.url"
          :width="470"
          :height="245"
          sizes="sm:220px md:500px md:700px"
          :alt="name || ''"
          class="max-w-[470px] mx-auto"
          fit="crop"
        />
      </nuxt-link>
    </div>
  </template>
</template>
