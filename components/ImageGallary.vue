<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Navigation, Slide } from "vue3-carousel";

defineProps(["title", "images"]);

const breakpoints = ref({
  0: {
    itemsToShow: 1.3,
  },
  500: {
    itemsToShow: 2,
  },
});
</script>

<template>
  <div class="mb-20 px-6 2xl:px-0">
    <h3
      v-if="title"
      class="max-w-screen-md mx-auto text-center text-primary text-3xl font-light uppercase leading-[56px] tracking-wider mb-10"
    >
      {{ title }}
    </h3>
    <client-only>
      <carousel
        :items-to-show="2"
        :wrap-around="true"
        :breakpoints="breakpoints"
      >
        <slide v-for="image in images" :key="image.fileName">
          <NuxtImg
            provider="hygraph"
            :src="image.url"
            :width="712"
            :height="712"
            sizes="sm:220px md:500px md:700px"
            alt=""
            fit="crop"
            :quality="90"
          />
        </slide>

        <template #addons>
          <Navigation>
            <Prev #prev />
            <Next #next />
          </Navigation>
        </template>
      </carousel>
    </client-only>
  </div>
</template>

<style>
:root {
  --vc-pgn-width: 8px;
  --vc-pgn-height: 8px;
}

.carousel__slide {
  opacity: 0.2;
}

.carousel__slide.carousel__slide--active {
  opacity: 1;
}
</style>
