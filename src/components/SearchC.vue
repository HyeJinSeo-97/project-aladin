<template>
  <v-sheet position="relative">
    <text-field-c
      v-model.trim="search"
      placeholder="도서 검색"
      append-inner-icon="mdi-magnify"
      :on-search="onSearchHandler"
      @keyup.enter="onSearchHandler"
    >
      <template #overlay>
        <v-overlay
          v-model="overlay"
          :scrim="false"
          offset="10"
          activator="parent"
          location-strategy="connected"
          scroll-strategy="block"
        >
          <v-card density="compact" class="search-box">
            <template #title> 최근 검색어 </template>
            <template #text>
              <div class="card-left">
                <span v-if="searchBooks.length === 0">최근 검색어가 없습니다.</span>
                <v-list v-else class="pa-0">
                  <v-list-item
                    v-for="(book, bKey) in searchBooks"
                    :key="bKey"
                    link
                    density="compact"
                    class="pa-0"
                    min-height="20"
                    @click="onSearchHandler(book)"
                  >
                    {{ book }}
                  </v-list-item>
                </v-list>
              </div>
              <div class="card-right">
                <v-card>광고</v-card>
                <v-card>광고</v-card>
              </div>
            </template>
            <template #actions>
              <v-btn size="small" variant="plain" @click="onRemoveHandler">검색 기록 삭제</v-btn>
            </template>
          </v-card>
        </v-overlay>
      </template>
    </text-field-c>
  </v-sheet>
</template>

<script setup>
import TextFieldC from '@/components/global/TextFieldC.vue'
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getSearchBooks, setSearchBook, allRemoveBook } from '@/utils/product.js'

// DATA --------------------------------------------------------
const search = ref('')
const overlay = ref(false)
const route = useRoute()
const router = useRouter()
const { query } = route
const searchBooks = ref([])

// CREATED --------------------------------------------------------
const init = () => {
  searchBooks.value = getSearchBooks()

  if (query.word) {
    search.value = query.word
  }
}
init()

// WATCH --------------------------------------------------------
watch(
  () => route.query,
  newQuery => {
    search.value = newQuery.word || ''
  }
)

// METHODS --------------------------------------------------------

const onSearchHandler = async book => {
  let searchWord = search.value

  if (search.value === '' || search.value === undefined || search.value === null) return
  if (typeof book === 'string') searchWord = book

  overlay.value = false

  router
    .push({
      name: 'SearchResult',
      query: { word: searchWord }
    })
    .then(() => {
      setSearchBook(search.value)
      searchBooks.value = getSearchBooks()
    })
}

const onRemoveHandler = async () => {
  await allRemoveBook()
  searchBooks.value = getSearchBooks()
}
</script>

<style lang="scss">
.search-box {
  .v-card-item {
    padding: 0.25rem 1rem;
  }

  .v-card-title {
    font-size: 0.75rem;
    min-height: 25px;
    font-weight: 700;
  }

  .v-card-text {
    display: flex;
    font-size: 0.75rem;
    min-height: 150px;
    max-height: 200px;
    overflow: hidden;
    box-sizing: border-box;
    border-top: 1px solid #dbdbdb;
    padding: 1rem 1rem 0;
    margin-bottom: 1rem;

    .card-left {
      width: 35%;
      padding-right: 12px;
      box-sizing: border-box;
      border-right: 1px solid #dbdbdb;
    }
    .card-right {
      width: 65%;
      display: flex;
      gap: 12px;
      padding-left: 12px;
      box-sizing: border-box;

      > div {
        flex: 1;
      }
    }
  }

  .v-card-actions {
    min-height: 25px;
    padding: 0.25rem 0.5rem;
    border-top: 1px solid #dbdbdb;
  }
}
</style>
