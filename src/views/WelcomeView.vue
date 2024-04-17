<template>
  <v-sheet rounded="lg" class="d-flex flex-column ga-6">
    <v-sheet class="carousel-container">
      <carousel-c
        min-height="45vh"
        :auto-play="3000"
        :current-slide="currentSlide"
        :items-to-show="1"
        :slides="MAIN_BANNERS"
      >
        <template #pagination>
          <v-sheet>
            <v-tabs grow hide-slider density="compact">
              <v-tab
                v-for="(banner, bIndex) in MAIN_BANNERS"
                :key="banner.key"
                variant="text"
                size="small"
                class="bg-blue-lighten-5"
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
        <carousel-c min-height="" :slides="WAD_BANNER" :auto-play="0">
          <template v-for="banner in WAD_BANNER" :key="banner.key" v-slot:[banner.key]>
            <router-link to="">
              <v-img :src="`/images/${banner.img}`" alt="배너" max-height="35vh" />
            </router-link>
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

const currentSlide = ref(0)
const activeTab = ref(MAIN_TABS[0].key)
</script>

<style lang="scss">
.carousel-container {
  border: 5px solid #e3f2fd;
  border-radius: 8px;
  box-sizing: border-box;
}
</style>
