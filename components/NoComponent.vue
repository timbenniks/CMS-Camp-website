<script setup lang="ts">
defineProps(["__typename"]);
</script>

<template>
  <div
    class="bg-red-200 text-red-700 p-4 mb-4 border-4 border-red-400 max-w-screen-xl overflow-auto"
  >
    <p class="mb-4">
      No Component Vue file to render
      <strong>{{ __typename }}</strong>
    </p>
    <p class="mb-2">Properties:</p>
    <pre class="border-2 border-red-300 p-4">{{ $attrs }}</pre>
  </div>
</template>
