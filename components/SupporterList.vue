<script setup lang="ts">
defineProps(["title", "supporters"]);
</script>

<template>
  <article
    class="mb-10 bg-cover text-center p-8 sm:p-20 mx-6 2xl:mx-0 bg-[url(/banner.jpg)] text-light"
  >
    <h3 v-if="title" class="text-3xl md:text-5xl font-bold mb-6 uppercase">
      {{ title }}
    </h3>

    <ul>
      <li v-for="supporter in supporters" :key="supporter.id">
        <NuxtLink :to="supporter.link" class="font-bold text-light">{{
          supporter.name
        }}</NuxtLink>
      </li>
    </ul>
  </article>
</template>
