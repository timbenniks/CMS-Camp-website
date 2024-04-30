<script lang="ts" setup>
const props = defineProps(["cta"]);

const to = computed(() => {
  return props.cta?.externalUrl || props.cta?.linkedPage?.slug || false;
});
</script>

<template>
  <nuxt-link
    v-if="to"
    :class="`${cta.style || ''} ${cta.socialMediaIcon ? 'cta-icon' : 'cta'} `"
    :to="to"
    :name="`Follow us on ${cta.socialMediaIcon}`"
    :aria-label="`Follow us on ${cta.socialMediaIcon}`"
  >
    <template v-if="cta.socialMediaIcon">
      <Twitter v-if="cta.socialMediaIcon === 'Twitter'" />
      <Facebook v-if="cta.socialMediaIcon === 'Facebook'" />
      <LinkedIn v-if="cta.socialMediaIcon === 'LinkedIn'" />
    </template>
    <template v-else>{{ cta.label }}</template>
  </nuxt-link>
</template>
