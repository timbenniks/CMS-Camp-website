<script lang="ts" setup>
const { footer } = await GqlFooter();
</script>
<template>
  <footer class="bg-primary p-12 text-light">
    <pre>{{ footer }}</pre>
  </footer>
</template>
