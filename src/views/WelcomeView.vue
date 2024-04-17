<template>
  <v-sheet rounded="lg" class="d-flex flex-column ga-6">
    <v-sheet class="carousel-container">
      <carousel-c
        min-height="45vh"
        :auto-play="0"
        :current-slide="currentSlide"
        :items-to-show="1"
        :slides="MAIN_BANNERS"
        @slide-start="onSlideHandler"
      >
        <template v-for="main in MAIN_BANNERS" :key="main.key" v-slot:[main.key]>
          <v-sheet class="banner-container" :class="`banner-${main.key}`">
            <template v-for="banner in itemTypes[main.key].item?.slice(0, 4)" :key="banner.key">
              <template v-if="main.key === 'event'">
                <v-card width="25%">
                  <router-link to="">
                    <v-img :src="`images/${banner.img}`" alt="배너" />
                  </router-link>
                </v-card>
              </template>
              <template v-else>
                <book-intro-c :banner="banner" class="banner-item"></book-intro-c>
              </template>
            </template>
          </v-sheet>
        </template>

        <template #pagination>
          <v-sheet>
            <v-tabs grow hide-slider density="compact">
              <v-tab
                v-for="(banner, bIndex) in MAIN_BANNERS"
                :key="banner.key"
                variant="text"
                size="small"
                class="bg-blue-lighten-5"
                :class="{ 'bg-blue-lighten-4': bIndex === currentSlide }"
                @click="currentSlide = bIndex"
              >
                {{ banner.text }}
              </v-tab>
            </v-tabs>
          </v-sheet>
        </template>
      </carousel-c>
    </v-sheet>

    <v-sheet class="d-flex ga-4" min-height="35vh">
      <v-card width="70%">
        <v-tabs v-model="activeTab" hide-slider density="compact">
          <v-tab
            v-for="tab in MAIN_TABS"
            :key="tab.key"
            size="small"
            class=""
            selected-class="bg-blue-lighten-5"
          >
            {{ tab.text }}
          </v-tab>
        </v-tabs>

        <v-window v-model="activeTab" class="w-100" style="width: 65%">
          <v-window-item v-for="tab in MAIN_TABS" :key="tab.key" :value="tab.key">
            <v-sheet>
              {{ tab.text }}
            </v-sheet>
          </v-window-item>
        </v-window>
      </v-card>

      <v-card width="30%">
        <carousel-c min-height="35vh" :slides="WAD_BANNER" :auto-play="0">
          <template v-for="banner in WAD_BANNER" :key="banner.key" v-slot:[banner.key]>
            <v-sheet width="100%">
              <router-link to="">
                <v-img :src="`/images/${banner.img}`" alt="배너" max-height="35vh" />
              </router-link>
            </v-sheet>
          </template>

          <template #pagination></template>
        </carousel-c>
      </v-card>
    </v-sheet>

    <v-sheet>
      <section-c title="어제 베스트셀러 TOP 10">
        <template #text>
          <v-card height="40vh" class="d-flex flex-column flex-wrap ga-3">
            <template v-for="n in 10" :key="n">
              <book-rank-c :rank="n" title="책 제목" author="작가이름"></book-rank-c>
            </template>
          </v-card>
        </template>
      </section-c>
    </v-sheet>
  </v-sheet>
</template>

<script setup>
import CarouselC from '@/components/carousel/CarouselC.vue'
import { MAIN_BANNERS, MAIN_TABS, WAD_BANNER } from '@/config/welcome.js'
import { ref } from 'vue'
import SectionC from '@/components/global/SectionC.vue'
import BookRankC from '@/components/global/BookRankC.vue'
import { useItemListStore } from '@/stores/itemList.js'
import { storeToRefs } from 'pinia'
import BookIntroC from '@/components/global/BookIntroC.vue'

const itemListStore = useItemListStore()
const { itemTypes } = storeToRefs(itemListStore)
const { getItemList } = itemListStore
const currentSlide = ref(0)
const activeTab = ref(MAIN_TABS[0].key)

// CREATED
const defaultParams = {
  MaxResults: 10,
  Start: 1
}
const makeParams = ({
  type = '',
  QueryType = '',
  CategoryId = '0',
  SearchTarget = 'Book',
  Year = '0',
  Month = '0',
  Week = '0'
}) => {
  return {
    ...defaultParams,
    type,
    QueryType,
    CategoryId,
    SearchTarget,
    Year,
    Month,
    Week
  }
}

Promise.all([
  getItemList(
    makeParams({ type: 'editor_choice', QueryType: 'ItemEditorChoice', CategoryId: '1' })
  ),
  getItemList(
    makeParams({
      type: 'week',
      QueryType: 'Bestseller',
      Year: '2024',
      Month: new Date().getMonth() + 1,
      Week: 3
    })
  ),
  getItemList(
    makeParams({
      type: 'new_book',
      QueryType: 'ItemNewAll'
    })
  ),
  getItemList(
    makeParams({
      type: 'blog',
      QueryType: 'BlogBest'
    })
  ),
  getItemList(
    makeParams({
      type: 'standout',
      QueryType: 'ItemNewSpecial'
    })
  ),
  getItemList(
    makeParams({
      type: 'ebook',
      QueryType: 'ItemNewSpecial',
      SearchTarget: 'eBook'
    })
  )
]).then(() => {
  console.log('### PROMISE.ALL', itemTypes)
})

// METHODS
const onSlideHandler = $event => {
  const { slidingToIndex, currentSlideIndex, slidesCount } = $event

  if (currentSlideIndex === 0 && slidingToIndex < 0) {
    currentSlide.value = slidesCount - 1
    return
  }

  if (slidingToIndex === slidesCount) {
    currentSlide.value = 0
    return
  }

  currentSlide.value = slidingToIndex
}
</script>

<style lang="scss">
.carousel-container {
  border: 5px solid #e3f2fd;
  border-radius: 8px;
  box-sizing: border-box;
}

.banner-container {
  display: flex;
  width: 100%;
  padding: 28px 50px 26px 49px;
  box-sizing: border-box;

  &.banner-event {
    justify-content: center;
    gap: 60px;
  }

  .banner-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25%;

    .thumbnail-box {
      width: 170px;
      height: 260px;

      display: flex;
      flex-direction: column;
      justify-content: end;

      margin-bottom: 16px;
    }
  }
}
</style>
