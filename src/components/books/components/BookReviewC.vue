<template>
  <div>
    <template v-if="customerReviewRank < 1">
      <v-icon v-for="n in 5" :key="n" icon="mdi-star-outline" :size="size" />
      <span class="font-weight-bold" :class="fontClass">
        ( {{ customerReviewRank.toFixed(1) }} )
      </span>
    </template>

    <template v-else>
      <template v-for="n in Math.floor(customerReviewRank)" :key="n">
        <v-icon v-if="n % 2 === 0" icon="mdi-star" :size="size" />
      </template>
      <v-icon v-if="customerReviewRank % 2 >= 1" icon="mdi-star-half" :size="size" />
      <span class="font-weight-bold" :class="fontClass">
        ( {{ customerReviewRank.toFixed(1) }} )
      </span>
    </template>
  </div>
</template>

<script setup>
defineProps({
  customerReviewRank: {
    type: Number,
    default: 0
  },
  size: {
    type: String,
    default: 'default'
  },
  fontClass: {
    type: String,
    default: 'text-red-darken-3'
  }
})
</script>
