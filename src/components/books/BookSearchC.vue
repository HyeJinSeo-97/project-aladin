<template>
  <v-card flat class="d-flex ga-8">
    <v-sheet class="d-flex">
      <router-link
        to=""
        class="d-inline-block h-100"
        @click="useRouterLink('Product', { isbn13: book.isbn13 })"
      >
        <v-img :src="book.cover" alt="썸네일" width="180" height="225" class="rounded" />
      </router-link>
    </v-sheet>

    <v-sheet class="d-flex flex-column justify-space-between pb-1 w-100">
      <div>
        <!-- 책 제목 -->
        <v-sheet class="text-left font-size-1">
          [{{ getCategoryName(book.categoryName) }}]
          <router-link
            to=""
            class="custom-router-link"
            @click="useRouterLink('Product', { isbn13: book.isbn13 })"
          >
            <span v-html="getTitle(book.title)"></span>
          </router-link>
        </v-sheet>
        <!-- //책 제목 -->

        <!-- 책 설명 -->
        <v-sheet width="100%" class="border text-left pa-2 mt-2 mb-3 bg-grey-lighten-5">
          <template v-if="book.description">{{ book.description }}</template>
          <template v-else> 해당 도서에 대한 설명이 존재하지 않습니다. </template>
        </v-sheet>
        <!-- //책 설명 -->

        <!-- 책 정보 -->
        <v-sheet class="d-flex flex-column ga-1">
          <!-- 작가, 출판사, 출판일 -->
          <v-sheet class="d-flex align-center justify-start ga-1 font-size-85">
            <v-sheet max-width="50%" class="text-left text-ellipse">{{ book.author }}</v-sheet>
            <v-icon icon="mdi-dots-vertical" size="small" color="grey"></v-icon>
            <v-sheet>{{ book.publisher }}</v-sheet>
            <v-icon icon="mdi-dots-vertical" size="small" color="grey"></v-icon>
            <v-sheet>
              {{ getYYYYMM(book.pubDate) }}
            </v-sheet>
          </v-sheet>
          <!-- //작가, 출판사, 출판일 -->

          <!-- 가격 -->
          <v-sheet class="text-left">
            <v-sheet class="d-inline-block my-divider pr-2 mr-2">
              <span>{{ book.priceStandard.toLocaleString() }}원</span>
              <v-icon icon="mdi-arrow-right" size="small" />
              <span class="font-weight-bold text-red-darken-3">
                {{ book.priceSales.toLocaleString() }}원
              </span>
              <span> ({{ getDiscountRate(book.priceSales, book.priceStandard) }}% 할인) </span>
            </v-sheet>

            <v-sheet class="d-inline-block">
              <span>마일리지 {{ book.mileage.toLocaleString() }}원</span>
              <span>(5% 적립)</span>
            </v-sheet>
          </v-sheet>
          <!-- //가격 -->

          <!-- 리뷰(별점) -->
          <v-sheet class="d-flex align-center">
            <book-review-c
              :customer-review-rank="book.customerReviewRank"
              size="x-small"
              font-class="font-size-75 text-black"
              class="pr-2 my-divider"
            />
            <p class="ml-2">세일즈포인트 : {{ book.salesPoint.toLocaleString() }}</p>
          </v-sheet>
          <!-- //리뷰(별점) -->
        </v-sheet>
        <!-- //책 정보 -->
      </div>

      <v-sheet class="d-flex ga-2">
        <v-btn size="small" color="pink">장바구니</v-btn>
        <v-btn size="small" color="red">바로구매</v-btn>
      </v-sheet>
    </v-sheet>
  </v-card>
</template>

<script setup>
import { useRouterLink } from '@/composable/common.js'
import { useRoute } from 'vue-router'
import { getDiscountRate, getYYYYMM } from '../../utils/book.js'
import BookReviewC from '@/components/books/components/BookReviewC.vue'

defineProps({
  book: {
    type: Object,
    default: () => {}
  }
})

// DATA --------------------------------------------------------
const route = useRoute()

// METHODS --------------------------------------------------------
const getCategoryName = categoryName => {
  if (!categoryName || categoryName === '') return

  return categoryName.split('>')[0]
}

const getTitle = title => {
  return title.replaceAll(route.query.word, `<strong>${route.query.word}</strong>`)
}
</script>
