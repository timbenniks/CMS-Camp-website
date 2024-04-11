<script lang="ts" setup>
const { navigation } = await GqlNavigation();

const navigationItems = computed(() => {
  return navigation?.navigationItem;
});

function getUrl(item: any) {
  if (item.externalLink) {
    return item.externalLink;
  } else {
    if (item.page && item.page.slug === "home") {
      return "/";
    } else {
      return item.page.slug;
    }
  }
}
</script>
<template>
  <header class="h-[161]px flex justify-between py-10">
    <Logo />
    <ul v-if="navigationItems" class="flex items-center">
      <li v-for="item in navigationItems" :key="item.id">
        <nuxt-link
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
