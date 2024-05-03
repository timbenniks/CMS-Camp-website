<script setup lang="ts">
const { $preview } = useNuxtApp();
</script>

<template>
  <p class="px-4 p-2 text-sm text-light bg-primary" v-if="$preview">
    ⚡️ Preview mode on.
  </p>
</template>
