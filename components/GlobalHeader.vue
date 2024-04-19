<script lang="ts" setup>
const { $preview } = useNuxtApp();
const stage = $preview ? "DRAFT" : "PUBLISHED";
const { navigation } = await GqlNavigation({ stage });

const navigationItems = computed(() => {
  return navigation?.navigationItem;
});

function getUrl(item: any) {
  if (!item) {
    return false;
  }

  if (item.externalLink) {
    return item.externalLink;
  } else {
    if (item.page && item.page.slug === "home") {
      return "/";
    } else {
      return item.page?.slug || "";
    }
  }
}
</script>
<template>
  <header class="px-6 lg:px-0 h-[161]px flex justify-between py-10">
    <nuxt-link to="/" aria-label="Home" class="block w-[331px] h-[81px]">
      <Logo />
    </nuxt-link>
    <ul v-if="navigationItems" class="flex items-center">
      <li v-for="item in navigationItems" :key="item.id">
        <nuxt-link
          v-if="item?.page || item?.externalLink"
          :to="getUrl(item)"
          :target="item.externalLink ? '_blank' : '_self'"
          class="font-bold text-xl leading-7 tracking-wide"
          :class="item.highlighted ? 'cta mr-0' : 'mr-10'"
        >
          {{ item.label }}
        </nuxt-link>
      </li>
    </ul>
  </header>
</template>
