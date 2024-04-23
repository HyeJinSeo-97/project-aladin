<template>
  <v-card v-if="book" flat class="d-flex flex-column align-center">
    <v-sheet :width="thumbnailWidth" :height="thumbnailHeight" class="thumbnail-box mb-3">
      <router-link to="" class="h-100" @click="onRouterHandler">
        <v-img :src="book.cover" alt="책 표지" />
      </router-link>
    </v-sheet>

    <v-sheet :width="thumbnailWidth" min-height="60" class="text-box">
      <div class="book-title text-break">
        {{ book.title }}
      </div>
      <div class="book-author text-break text-grey">{{ book.author }}</div>
    </v-sheet>
  </v-card>
</template>

<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  book: {
    type: Object,
    default: () => {}
  },
  thumbnailWidth: String,
  thumbnailHeight: String
})

const router = useRouter()

// METHODS
const onRouterHandler = () => {
  router.push({
    name: 'Product',
    params: { isbn13: props.book.isbn13 }
  })
}
</script>

<style scoped lang="scss">
.book-title {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.85rem;
  font-weight: 600;
}

.book-author {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.thumbnail-box {
  //display: flex;
  //flex-direction: column;
  //justify-content: end;
}
</style>
