<script setup lang="ts">
defineProps(["data"]);
</script>

<template>
  <slot />
  <ComponentList :data="data" />
</template>
