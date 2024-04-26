<script lang="ts" setup>
const { footer } = await GqlFooter();
</script>
<template>
  <footer class="bg-primary p-12 text-light text-center">
    <LogoWhite class="block w-full sm:w-[470px] mx-auto mb-12" />

    <p class="font-bold mb-4">{{ footer?.sponsorsTitle }}</p>
    <ul class="grid grid-cols-1 md:grid-cols-3 mb-12">
      <li
        v-for="sponsor in footer?.sponsors"
        :key="sponsor.id"
        class="flex justify-center mb-4 md:mx-4"
      >
        <NuxtImg
          v-if="sponsor.alternativeLogo"
          provider="hygraph"
          :src="sponsor.alternativeLogo.url"
          :width="470"
          sizes="sm:230px"
          alt=""
          class="w-60 object-contain"
        />
      </li>
    </ul>

    <p class="font-bold mb-4">{{ footer?.organizersTitle }}</p>
    <ul class="grid grid-cols-1 md:grid-cols-3">
      <li
        v-for="organizer in footer?.organizers"
        :key="organizer.id"
        class="flex justify-center mb-4 md:mx-4"
      >
        <NuxtImg
          v-if="organizer.logo"
          provider="hygraph"
          :src="organizer.logo.url"
          :width="131"
          sizes="sm:131px"
          alt=""
          class="w-36 object-contain"
        />
      </li>
    </ul>
  </footer>
</template>
