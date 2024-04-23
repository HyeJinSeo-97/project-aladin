<template>
  <container-c>
    <v-sheet v-if="product" class="my-border d-flex ga-15" style="padding: 28px 50px 26px 49px">
      <v-sheet>
        <v-img :src="product.cover" alt="표지" width="200" height="283" />
        <v-btn
          block
          class="my-3"
          variant="outlined"
          color="primary"
          size="small"
          prepend-icon="mdi-book-open-blank-variant-outline"
        >
          미리보기
        </v-btn>
        <v-btn block color="pink">장바구니</v-btn>
        <v-btn block color="red" class="mt-1 mb-3">바로구매</v-btn>
        <div class="d-flex justify-space-between ga-2">
          <v-btn variant="outlined" color="teal" size="small" width="48%" prepend-icon="mdi-gift">
            선물하기
          </v-btn>
          <v-btn
            variant="outlined"
            color="teal"
            size="small"
            width="48%"
            prepend-icon="mdi-heart-box"
          >
            보관함
          </v-btn>
        </div>
      </v-sheet>

      <v-sheet class="d-flex flex-column align-start text-left ga-1">
        <div>{{ product.categoryName }}</div>

        <div class="w-100 d-flex flex-column align-start ga-1">
          <div class="d-flex align-center">
            <div class="book-title text-break">
              {{ product.title }}
            </div>
            <v-divider vertical inset class="mx-3" />
            <div class="book-author text-break">{{ product.author }}</div>
          </div>

          <div class="book-desc text-break text-grey-darken-2">
            {{ product.description }}
          </div>
        </div>

        <v-divider class="w-100 my-5" />

        <v-sheet class="d-flex flex-column align-start">
          <v-table>
            <tbody>
              <tr>
                <th>
                  <div>정가</div>
                  <div class="font-weight-bold" style="font-size: 1.25rem">판매가</div>
                </th>
                <td class="text-left">
                  <div>{{ product.priceStandard.toLocaleString('ko-KR') }}</div>
                  <div>
                    <span class="font-weight-bold mr-1" style="font-size: 1.25rem">{{
                      product.priceSales.toLocaleString('ko-KR')
                    }}</span>
                    <span class="text-grey-darken-2" style="font-size: 1rem">
                      ( {{ 100 - (product.priceSales / product.priceStandard) * 100 }}% 할인 )
                    </span>
                  </div>
                </td>
              </tr>
              <tr>
                <th>마일리지</th>
                <td>{{ product.mileage }}원(5%) + 멤버십(3~1%) + 5만원이상 구매시 2,000원</td>
              </tr>
              <tr>
                <th>배송료</th>
                <td>
                  <div>유료 (도서 1만5천원 이상 무료)</div>
                  <div class="ml-n1 text-orange">
                    <v-chip color="orange" size="small">양탄자배송</v-chip>
                    밤 10시까지 주문하면 내일 아침 7시 출근전 배송 (중구 서소문로 89-31 기준)
                    지역변경
                  </div>
                </td>
              </tr>
              <tr>
                <th>Sales Point</th>
                <td>{{ product.salesPoint.toLocaleString('ko-KR') }}점</td>
              </tr>
              <tr>
                <th>평점</th>
                <td>
                  <div>
                    <template v-if="product.customerReviewRank < 1">
                      <v-icon v-for="n in 5" :key="n" icon="mdi-star-outline" />
                      <span class="font-weight-bold text-red-darken-3">
                        ( {{ product.customerReviewRank.toFixed(1) }} )
                      </span>
                    </template>

                    <template v-else>
                      <template v-for="n in Math.floor(product.customerReviewRank)" :key="n">
                        <v-icon v-if="n % 2 === 0" icon="mdi-star" />
                      </template>
                      <v-icon v-if="product.customerReviewRank % 2 >= 1" icon="mdi-star-half" />
                      <span class="font-weight-bold text-red-darken-3">
                        ( {{ product.customerReviewRank.toFixed(1) }} )
                      </span>
                    </template>
                  </div>

                  <div class="d-flex align-center">
                    <v-btn variant="plain" class="pa-0" size="small">100자평(0)</v-btn>
                    <span class="mx-1">·</span>
                    <v-btn variant="plain" class="pa-0" size="small">리뷰(0)</v-btn>
                    <span class="mx-1"></span>

                    <v-menu v-model="showReview" offset="10" :close-on-content-click="false">
                      <template v-slot:activator="{ props }">
                        <v-chip v-bind="props" color="primary" size="small">
                          리뷰를 남겨주세요!
                        </v-chip>
                      </template>

                      <v-card min-width="300">
                        <v-card-title class="text-center border-b py-1">
                          <v-rating v-model="rating" color="orange" density="compact"></v-rating>
                        </v-card-title>
                        <v-card-actions class="py-0">
                          <v-radio-group
                            v-model="reviewRadio"
                            hide-details
                            class="review-radio-group"
                          >
                            <v-radio
                              v-for="(radio, rIndex) in RADIOS"
                              :key="rIndex"
                              :label="radio.label"
                              :value="radio.value"
                              density="compact"
                            ></v-radio>
                          </v-radio-group>
                        </v-card-actions>
                      </v-card>
                    </v-menu>
                  </div>
                </td>
              </tr>
              <tr>
                <th>결제 헤택</th>
                <td>
                  <v-sheet class="py-3">
                    <v-btn variant="tonal" color="purple" size="x-small">
                      카드/간편결제 할인
                    </v-btn>
                    <div class="mt-1">
                      <div class="d-flex align-center ga-5">
                        <div>
                          <v-img src="/images/mobilepop.jpg" alt="모바일팝" width="60" />
                        </div>
                        <div>
                          <strong class="d-block">모바일팝 4% 즉시 할인</strong>
                          4/1~6/30 (1인多회) · 모바일팝 앱 이용자는 무제한 · 300원 이상 결제해
                          주세요
                        </div>
                      </div>

                      <div class="d-flex align-center ga-5 mt-1">
                        <div>
                          <v-img src="/images/93x58_240131.jpg" alt="네이버페이" width="60" />
                        </div>
                        <div>
                          <strong class="d-block">네이버페이 5천 포인트 적립</strong>
                          4/1~4/30 (1천명 추첨) · 5만원 이상 결제해 주세요 · 포인트 적립일 : 5/15
                          주세요
                        </div>
                      </div>
                    </div>
                  </v-sheet>

                  <v-divider />

                  <v-sheet class="py-3">
                    <v-btn variant="tonal" color="red" size="x-small"> 무이자 할부 </v-btn>
                    <div class="mt-1">
                      <p>* 2~3개월 무이자 : 신한, 국민,현대,롯데,하나,삼성</p>
                      <p>* 2~4개월 무이자 : 농협, 비씨,우리</p>
                    </div>
                  </v-sheet>

                  <v-divider />
                  <v-sheet class="py-3">
                    <v-btn variant="tonal" color="green" size="x-small"> 소득공제 </v-btn>
                    <div class="mt-1">
                      <p>670원</p>
                    </div>
                  </v-sheet>
                </td>
              </tr>
            </tbody>
          </v-table>
        </v-sheet>
      </v-sheet>
    </v-sheet>
  </container-c>
</template>
<script setup>
import ContainerC from '@/components/ContainerC.vue'
import { ref } from 'vue'
import { useLookUpStore } from '@/stores/lookUp.js'

// -----------------------------------------------------------
const RADIOS = [
  { label: '읽고 싶어요', value: 0 },
  { label: '읽고 있어요', value: 1 },
  { label: '읽었어요', value: 2 }
]
// -----------------------------------------------------------

// DATA
const lookUpStore = useLookUpStore()
const { actions } = lookUpStore
const product = ref(undefined)
const showReview = ref(false)
const rating = ref(5) // 리뷰 별점
const reviewRadio = ref(undefined)

// PROPS
const props = defineProps({
  isbn13: [Number, String]
})

// CREATED
const getProduct = async () => {
  const params = {
    itemIdType: 'ISBN',
    ItemId: props.isbn13,
    Cover: 'Big'
  }
  product.value = await actions.getLookUp(params)
  console.log('### 상품 조회', product.value)
}

getProduct()

// METHODS
</script>

<style scoped lang="scss">
.book-title {
  max-width: 75%;
  font-size: 1.75rem;
  line-height: 1.1;
  font-weight: bold;
}

.book-author {
  text-align: left;
  font-size: 1rem;
}
.book-desc {
  width: 100%;
  font-size: 0.85rem;
}

table {
  tr {
    th,
    td {
      border-bottom: none !important;
      text-align: left;
    }
  }
}

.review-radio-group {
  &:deep(.v-input__control) {
    .v-selection-control-group {
      flex-direction: row;

      .v-selection-control {
        justify-content: center;

        & > * {
          font-size: 0.75rem;
        }
      }
    }
  }
}
</style>
