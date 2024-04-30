<script setup lang="ts">
const { enabled } = usePreviewMode();
</script>

<template>
  <p class="px-4 p-2 text-sm text-light bg-primary" v-if="enabled">
    ⚡️ Preview mode on.
    <button @click="enabled = false" class="underline">disable</button>
  </p>
</template>
