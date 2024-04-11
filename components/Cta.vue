<script lang="ts" setup>
const props = defineProps(["cta"]);

const to = computed(() => {
  return props.cta.externalUrl || props.cta.linkedPage.slug;
});
</script>

<template>
  <nuxt-link :class="`cta ${cta.style || ''}`" :to="to">
    {{ cta.label }}
  </nuxt-link>
</template>
