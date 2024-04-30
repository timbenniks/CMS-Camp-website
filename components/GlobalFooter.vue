<script lang="ts" setup>
const { footer } = await GqlFooter();

const { imageProvider } = useRuntimeConfig().public;
const provider = computed(() => {
  return imageProvider === "hygraph" ? "hygraph" : "cloudinary";
});
</script>
<template>
  <footer class="bg-primary p-12 text-light text-center">
    <LogoWhite class="block w-full sm:w-[470px] mx-auto mb-12" />

    <p class="font-bold mb-6">{{ footer?.sponsorsTitle }}</p>
    <ul class="grid grid-cols-1 md:grid-cols-3 mb-16">
      <li
        v-for="sponsor in footer?.sponsors"
        :key="sponsor.id"
        class="flex justify-center mb-4 md:mx-4"
      >
        <NuxtImg
          v-if="sponsor.alternativeLogo"
          :provider="provider"
          :src="sponsor.alternativeLogo.url"
          width="240"
          height="90"
          sizes="sm:240px"
          alt=""
          fit="fit"
          class="w-60 object-contain"
        />
      </li>
    </ul>

    <p class="font-bold mb-6">{{ footer?.organizersTitle }}</p>
    <ul class="grid grid-cols-1 md:grid-cols-4">
      <li
        v-for="organizer in footer?.organizers"
        :key="organizer.id"
        class="flex justify-center mb-4 md:mx-4"
      >
        <NuxtImg
          v-if="organizer.logo"
          :provider="provider"
          :src="organizer.logo.url"
          width="112"
          height="34"
          sizes="sm:120px"
          alt=""
          fit="fit"
          class="w-28 object-contain"
        />
      </li>
    </ul>
  </footer>
</template>
