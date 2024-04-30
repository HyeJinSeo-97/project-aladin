<template>
  <container-c :overlay="onLoading">
    <v-card>
      <v-card-title class="text-left">
        <span class="font-weight-bold font-size-1">&lsquo;{{ searchWord }}&rsquo; 검색 결과</span>
      </v-card-title>
      <v-card-subtitle>
        <v-tabs v-model="activeTab" density="compact">
          <v-tab
            v-for="tab in TABS"
            :key="tab.key"
            :value="tab.key"
            size="small"
            min-width="fit-content"
            slider-color="grey-darken-2"
            class="px-1 mr-2"
          >
            <span :class="{ 'font-weight-bold text-grey-darken-2': activeTab === tab.key }">
              {{ tab.title }}({{ result[tab.key]?.totalResults?.toLocaleString() }})
            </span>
          </v-tab>
        </v-tabs>
      </v-card-subtitle>
      <v-card-text>
        <v-window v-model="activeTab">
          <v-window-item v-for="tab in TABS" :key="tab.key" :value="tab.key">
            <v-sheet
              v-if="result[tab.key]?.totalResults === 0"
              min-height="50vh"
              class="d-flex flex-column align-center justify-center"
            >
              <v-icon color="grey" icon="mdi-magnify" size="95" />
              <p class="my-3 font-size-1 text-grey-darken-1">
                &lsquo;{{ searchWord }}&rsquo;에 대한 검색 결과가 없습니다.
              </p>
            </v-sheet>

            <v-sheet v-else class="d-flex flex-column ga-6 mt-3">
              <template v-for="(book, bIndex) in result[tab.key]?.item" :key="book.itemId">
                <book-search-c :book="book" />
                <v-divider v-if="bIndex < result[tab.key]?.item.length - 1" />
              </template>
            </v-sheet>
          </v-window-item>
        </v-window>
      </v-card-text>
    </v-card>
  </container-c>
</template>

<script setup>
import ContainerC from '@/components/ContainerC.vue'
import { useRoute } from 'vue-router'
import { computed, reactive, ref, watch } from 'vue'
import { useSearchStore } from '@/stores/search.js'
import { TABS } from '@/config/searchResult.js'
import BookSearchC from '@/components/books/BookSearchC.vue'

// DATA --------------------------------------------------------
const route = useRoute()
const searchStore = useSearchStore()
const { apiActions } = searchStore
const onLoading = ref(false)
const result = reactive({
  All: undefined,
  Book: undefined,
  Foreign: undefined,
  Music: undefined,
  DVD: undefined,
  Used: undefined,
  Ebook: undefined
})
const activeTab = ref(TABS[0].key)

// CREATED --------------------------------------------------------
const init = () => {
  if (route.query.word.trim() === '') {
    return
  }

  onLoading.value = true

  const params = { Query: route.query.word }
  apiActions
    .getSearchItem(params)
    .then(res => {
      console.log('[ INIT - res ]', res)
      if (res.length > 0) {
        res.forEach(el => {
          result[el.searchTarget] = el
        })
      }

      onLoading.value = false
    })
    .catch(() => {})
}
init()

// COMPUTED --------------------------------------------------------
const searchWord = computed(() => {
  const { query } = route
  return query.word
})

// WATCH --------------------------------------------------------
watch(
  () => route.query.word,
  newWord => {
    console.log('[WATCH]', newWord)
    init()
  }
)
</script>
