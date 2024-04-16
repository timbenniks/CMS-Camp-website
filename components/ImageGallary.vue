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
  <div class="mb-20 mx-6 2xl:mx-0">
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
            <template #prev>
              <Prev />
            </template>
            <template #next>
              <Next />
            </template>
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

.carousel {
  @apply mb-32 md:mb-0;
}

.carousel__slide {
  opacity: 0.2;
  transition: opacity 0.4s;
}

.carousel__slide.carousel__slide--active {
  opacity: 1;
}

.carousel__prev,
.carousel__next {
  @apply m-0 w-8 h-8 md:w-14 md:h-14 top-[114%] md:top-2/4;
}

.carousel__prev svg,
.carousel__next svg {
  width: 100%;
  height: auto;
}

.carousel__next:hover,
.carousel__prev:hover {
  opacity: 0.9;
}
</style>
