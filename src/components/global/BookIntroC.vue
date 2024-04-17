<template>
  <v-card flat>
    <v-sheet class="thumbnail-box">
      <router-link to="">
        <v-img :src="banner.cover" alt="책 표지" />
      </router-link>
    </v-sheet>

    <v-sheet width="75%" class="text-box">
      <div class="book-title text-break">
        {{ banner.title }}
      </div>
      <div class="book-author text-break text-grey">{{ banner.author }}</div>
    </v-sheet>
  </v-card>
</template>

<script setup>
defineProps({
  banner: {
    type: Object,
    default: () => {}
  }
})
</script>

<style lang="scss">
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
</style>
