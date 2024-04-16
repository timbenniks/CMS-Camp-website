<script setup lang="ts">
import { getComponentForName } from "~/utils/componentMapper";

const props = defineProps(["title", "itemsPerRow", "linkedContent"]);

const cols = computed(() => {
  let cols = 1;

  switch (props.itemsPerRow) {
    case "one":
      cols = 1;
      break;
    case "two":
      cols = 2;
      break;
    case "three":
      cols = 3;
      break;
  }

  return `grid-cols-1 md:grid-cols-${cols}`;
});
</script>

<template>
  <div class="mb-20 mx-6 2xl:mx-0">
    <h3
      v-if="title"
      class="max-w-screen-md mx-auto text-center text-primary text-3xl font-light uppercase leading-[56px] tracking-wider mb-10"
    >
      {{ title }}
    </h3>
    <div class="grid" :class="cols">
      <component
        v-for="component in linkedContent"
        :is="getComponentForName(component?.__typename)"
        :key="(component?.id as string)"
        v-bind="component"
      />
    </div>
  </div>
</template>
