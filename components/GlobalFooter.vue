<script lang="ts" setup>
const { footer } = await GqlFooter();
</script>
<template>
  <footer class="bg-primary p-12 text-light">
    <nuxt-link to="/" aria-label="Home">
      <LogoWhite />
    </nuxt-link>

    <p>{{ footer?.sponsorsTitle }}</p>
    <ul class="grid grid-cols-1 md:grid-cols-3">
      <li
        v-for="sponsor in footer?.sponsors"
        :key="sponsor.id"
        class="flex justify-center"
      >
        <NuxtImg
          v-if="sponsor.logo"
          provider="hygraph"
          :src="sponsor.logo.url"
          :width="470"
          :height="200"
          sizes="sm:230px"
          alt=""
          class="w-56"
        />
      </li>
    </ul>

    <p>{{ footer?.organizersTitle }}</p>
    <pre>{{ footer }}</pre>
  </footer>
</template>
