<template>
  <container-c :overlay="onLoading">
    <v-sheet rounded="lg" class="d-flex flex-column ga-10">
      <!-- 메인 배너 -->
      <v-sheet class="my-border">
        <carousel-c
          min-height="45vh"
          :auto-play="3000"
          :current-slide="currentSlide"
          :items-to-show="1"
          :slides="MAIN_BANNERS"
          @slide-start="onSlideHandler"
        >
          <template v-for="main in MAIN_BANNERS" :key="main.key" v-slot:[main.key]>
            <v-sheet class="banner-container" :class="`banner-${main.key}`">
              <template v-for="book in itemTypes[main.key].item?.slice(0, 4)" :key="book.key">
                <template v-if="main.key === 'event'">
                  <v-card width="25%" class="d-flex flex-column justify-center">
                    <router-link to="">
                      <v-img :src="`/project-aladin/images/${book.img}`" alt="배너" />
                    </router-link>
                  </v-card>
                </template>
                <template v-else>
                  <book-intro-c
                    :book="book"
                    thumbnail-width="200"
                    thumbnail-height="280"
                    class="w-25"
                  ></book-intro-c>
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
      <!-- //메인 배너 -->

      <v-sheet class="d-flex ga-4" min-height="35vh">
        <!-- 탭 -->
        <v-card flat width="70%" class="">
          <v-tabs bg-color="primary" v-model="activeTab" hide-slider density="compact">
            <v-tab
              v-for="tab in MAIN_TABS"
              :key="tab.key"
              size="small"
              class=""
              selected-class="bg-primary-darken-2"
            >
              {{ tab.text }}
            </v-tab>
          </v-tabs>

          <v-window
            v-model="activeTab"
            class="w-100 rounded-t-0 my-border tab-window"
            style="width: 65%"
          >
            <v-window-item v-for="tab in MAIN_TABS" :key="tab.key" :value="tab.key">
              <v-sheet class="my-3">
                <template v-if="tab.key !== 'goods'">
                  <carousel-c
                    :items-to-show="4"
                    :auto-play="0"
                    :wrap-around="false"
                    :slides="itemTypes[tab.key].item"
                  >
                    <template #slide="{ slide }">
                      <book-intro-c
                        :book="slide"
                        thumbnail-width="150"
                        thumbnail-height="220"
                        class=""
                      ></book-intro-c>
                    </template>

                    <template #pagination></template>
                  </carousel-c>
                </template>
                <template v-else>
                  <v-sheet class="d-flex ga-10 px-5">
                    <v-card
                      v-for="ad in itemTypes[tab.key].item"
                      :key="ad.key"
                      flat
                      class="d-flex flex-column align-center justify-center flex-1-0"
                    >
                      <v-sheet width="200" height="223" class="d-flex flex-column justify-end">
                        <router-link to="">
                          <v-img :src="`images/${ad.img}`" alt="배너" />
                        </router-link>
                      </v-sheet>

                      <v-sheet min-height="60" class="mt-3">
                        <router-link to="" class="custom-router-link">
                          <div class="book-title text-break">
                            {{ ad.title }}
                          </div>
                          <div class="book-author text-break text-grey">{{ ad.subTitle }}</div>
                        </router-link>
                      </v-sheet>
                    </v-card>
                  </v-sheet>
                </template>
              </v-sheet>
            </v-window-item>
          </v-window>
        </v-card>
        <!-- //탭 -->

        <!-- 광고 -->
        <v-card width="30%" style="padding-top: 36px">
          <carousel-c min-height="35vh" :slides="WAD_BANNER" :auto-play="0" class="h-100">
            <template v-for="banner in WAD_BANNER" :key="banner.key" v-slot:[banner.key]>
              <v-sheet width="100%" class="my-3">
                <router-link to="">
                  <v-img :src="`images/${banner.img}`" alt="배너" max-height="35vh" />
                </router-link>
              </v-sheet>
            </template>

            <template #pagination></template>
          </carousel-c>
        </v-card>
        <!-- // 광고 -->
      </v-sheet>

      <!-- 어제 베스트 셀러 TOP 10 -->
      <v-sheet v-if="yesterdayBestSeller">
        <section-c title="어제 베스트셀러 TOP 10">
          <template #text>
            <v-card flat class="d-flex flex-column">
              <v-sheet class="d-flex align-end justify-center ga-5 mb-10">
                <template v-for="book in yesterdayBestSeller.item.slice(0, 2)" :key="book.itemId">
                  <book-rank-c
                    thumbnail-width="100"
                    thumbnail-height="150"
                    :book="book"
                    class="rank-book"
                  ></book-rank-c>
                </template>
              </v-sheet>

              <v-sheet width="100%" height="260" class="d-flex flex-column flex-wrap">
                <template v-for="book in yesterdayBestSeller.item.slice(2)" :key="book.itemId">
                  <book-rank-c
                    thumbnail-width="100"
                    thumbnail-height="120"
                    :book="book"
                    :class="{ 'mb-5': book.bestRank % 2 === 1 }"
                  ></book-rank-c>
                </template>
              </v-sheet>
            </v-card>
          </template>
        </section-c>
      </v-sheet>
      <!-- // 어제 베스트 셀러 TOP 10 -->
    </v-sheet>
  </container-c>

  <!-- 와이드 배너 광고 -->
  <v-sheet class="wide-banner">
    <carousel-c :auto-play="0" :slides="WIDE_BANNER">
      <template v-for="banner in WIDE_BANNER" :key="banner.key" v-slot:[banner.key]>
        <v-sheet :color="banner.bgColor" width="100%" class="wide-banner-slide">
          <!--  color="#e5e2be" -->
          <router-link to="">
            <v-img :src="`images/${banner.img}`" alt="배너" height="130" />
          </router-link>
        </v-sheet>
      </template>
    </carousel-c>
  </v-sheet>
  <!-- // 와이드 배너 광고 -->

  <container-c>
    <v-sheet v-if="bestDVD" rounded="lg" class="d-flex flex-column ga-10">
      <!-- 알라딘 오디오북 -->
      <section-c title="이달의 베스트 DVD">
        <template #text>
          <carousel-c :auto-play="0" :items-to-show="5" :slides="bestDVD.item">
            <template #slide="{ slide }">
              <book-intro-c
                :book="slide"
                thumbnail-width="180"
                thumbnail-height="250"
              ></book-intro-c>
            </template>

            <template #pagination></template>
          </carousel-c>
        </template>
      </section-c>
      <!-- // 알라딘 오디오북-->

      <!-- 알라디너 TV -->
      <section-c title="알라디너 TV">
        <template #text>
          <v-sheet class="d-flex align-center justify-space-between">
            <template v-for="tv in ALADINER_TV" :key="tv.key">
              <v-sheet max-width="30%" class="d-flex flex-column">
                <div v-html="tv.html" class=""></div>
                <v-sheet class="book-title mx-auto" width="90%" height="50">{{ tv.title }}</v-sheet>
              </v-sheet>
            </template>
          </v-sheet>
        </template>
      </section-c>
      <!-- // 알라디너 TV-->

      <!-- 알라딘 이벤트 -->
      <section-c title="알라딘 이벤트">
        <template #text>
          <v-sheet class="d-flex align-center justify-space-between">
            <template v-for="event in ALADIN_EVENTS" :key="event.key">
              <v-sheet>
                <router-link to="" class="d-inline-block">
                  <v-img
                    :src="`/project-aladin/images/${event.img}`"
                    alt="이벤트"
                    width="330"
                    style="border-radius: 8px"
                  />
                </router-link>
              </v-sheet>
            </template>
          </v-sheet>
        </template>
      </section-c>
      <!-- // 알라딘 이벤트-->
    </v-sheet>
  </container-c>
</template>

<script setup>
import CarouselC from '@/components/carousel/CarouselC.vue'
import {
  MAIN_BANNERS,
  MAIN_TABS,
  WAD_BANNER,
  WIDE_BANNER,
  ALADINER_TV,
  ALADIN_EVENTS
} from '@/config/welcome.js'
import { ref } from 'vue'
import SectionC from '@/components/global/SectionC.vue'
import BookRankC from '@/components/books/BookRankC.vue'
import { useItemListStore } from '@/stores/itemList.js'
import { storeToRefs } from 'pinia'
import BookIntroC from '@/components/books/BookIntroC.vue'
import ContainerC from '@/components/ContainerC.vue'

// DATA ---------------------------------------------------------------
const itemListStore = useItemListStore()
const { itemTypes } = storeToRefs(itemListStore)
const { apiActions } = itemListStore
const currentSlide = ref(0)
const activeTab = ref(MAIN_TABS[0].key)
const yesterdayBestSeller = ref(undefined)
const bestDVD = ref(undefined)
const onLoading = ref(false)

// CREATED ---------------------------------------------------------------
const initApis = [
  { key: 'editor_choice', queryType: 'itemEditorChoice', params: { CategoryId: 1 } },
  { key: 'week', queryType: 'bestseller' },
  { key: 'new_book', queryType: 'itemNewAll' },
  { key: 'blog', queryType: 'blogBest' },
  { key: 'standout', queryType: 'itemNewSpecial' },
  { key: 'ebook', queryType: 'itemNewSpecial', params: { SearchTarget: 'eBook' } },
  { key: 'foreign', queryType: 'itemNewAll', params: { SearchTarget: 'Foreign' } }
]

const init = async () => {
  onLoading.value = true

  for (let i = 0; i < initApis.length; i++) {
    apiActions
      .getItemListWithKey(initApis[i].key, initApis[i].queryType, initApis[i].params)
      .then(() => {})
      .catch(() => {})
  }

  // 어제 베스트셀러 TOP 10
  yesterdayBestSeller.value = await apiActions.getItemList('Bestseller', {
    SearchTarget: 'eBook',
    CategoryId: '1',
    Cover: 'MidBig'
  })

  // 이달의 베스트 DVD
  bestDVD.value = await apiActions.getItemList('Bestseller', {
    SearchTarget: 'DVD',
    Cover: 'Big'
  })
}

init().then(() => (onLoading.value = false))

// METHODS ---------------------------------------------------------------
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
.banner-container {
  display: flex;
  width: 100%;
  padding: 28px 50px 26px 49px;
  box-sizing: border-box;

  &.banner-event {
    justify-content: center;
    gap: 60px;
  }
}

.tab-window {
  border-color: rgb(24, 103, 192) !important;
}

.wide-banner {
  width: 100%;
  height: 130px;
  margin: 80px 0;

  .wide-banner-slide {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 30px;
      background-color: #ffffff;
    }
  }
}
</style>
