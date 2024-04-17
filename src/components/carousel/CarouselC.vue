<!-- https://ismail9k.github.io/vue3-carousel/ -->

<template>
  <Carousel
    :model-value="currentSlide"
    :items-to-show="itemsToShow"
    :autoplay="autoPlay"
    :wrap-around="true"
    @slide-start="$emit('slide-start', $event)"
    @slide-end="$emit('slide-end', $event)"
  >
    <Slide v-for="slide in slides" :key="slide.key">
      <v-sheet :min-height="minHeight" class="d-flex w-100 carousel-slide">
        <slot :name="slide.key" v-bind:slide="slide"></slot>
      </v-sheet>
    </Slide>

    <template #addons>
      <Navigation />
      <template v-if="$slots['pagination']">
        <slot name="pagination"></slot>
      </template>
      <template v-else>
        <Pagination />
      </template>
    </template>
  </Carousel>
</template>

<script setup>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

// DATA
defineProps({
  currentSlide: {
    type: Number,
    default: 0
  },
  itemsToShow: {
    type: Number,
    default: 1
  },
  slides: {
    type: Array,
    default: () => []
  },
  autoPlay: {
    type: Number,
    default: 2000
  },
  minHeight: {
    type: String,
    default: ''
  }
})

defineEmits(['slide-start', 'slide-end'])
</script>

<style lang="scss">
.carousel-slide {
  border-radius: 8px;
}
</style>
