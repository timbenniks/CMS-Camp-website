<script setup lang="ts">
defineProps(["ctas"]);
</script>

<template>
  <div class="mb-10 px-6 2xl:px-0">
    <div class="flex space-y-2 sm:space-x-2 sm:space-y-0 flex-col sm:flex-row">
      <cta v-for="cta in ctas" :cta="cta" :key="cta.id" />
    </div>
  </div>
</template>
