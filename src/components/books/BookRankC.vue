<template>
  <v-card
    v-if="book"
    flat
    min-width="25%"
    :width="width"
    class="d-flex align-center"
    :class="{ 'flex-column': vertical }"
  >
    <v-sheet :width="thumbnailWidth" :height="thumbnailHeight">
      <router-link
        to=""
        class="d-inline-block h-100"
        @click="useRouterLink('Product', { isbn13: book.isbn13 })"
      >
        <v-img :src="book.cover" alt="썸네일" width="100" />
      </router-link>
    </v-sheet>

    <v-sheet class="book-ranking font-weight-bold mx-5" :class="{ 'mx-0 my-3': vertical }">
      {{ book.rank }}
    </v-sheet>

    <v-sheet class="book-desc">
      <router-link to="" class="custom-router-link">
        <p
          class="book-title text-left text-break"
          :class="{ 'text-center': vertical }"
          style="font-weight: 600"
        >
          {{ book.title }}
        </p>
      </router-link>
      <p class="rank-title text-break text-left text-grey mt-1">{{ book.author }}</p>
    </v-sheet>
  </v-card>
</template>

<script setup>
import { useRouterLink } from '@/composable/common.js'

defineProps({
  book: Object,
  width: String,
  vertical: Boolean,
  thumbnailWidth: String,
  thumbnailHeight: String
})
</script>

<style scoped lang="scss">
.rank-book {
  padding: 10px 24px;
  box-shadow: 0 5px 12px 6px rgba(0, 0, 0, 0.1);

  .book-ranking {
    font-size: 1.25rem;
  }

  .book-desc {
    max-width: 180px;
  }
}

.book-desc {
  max-width: 100px;
}

.rank-title {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
