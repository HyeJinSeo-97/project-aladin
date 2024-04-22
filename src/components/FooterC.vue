<template>
  <v-footer border class="d-flex flex-column pa-0 mt-15">
    <!-- 공지사항, 빠른 서비스, 출판사·판매자 안내 -->
    <div class="w-100 bg-grey-lighten-4">
      <container-c>
        <v-sheet color="transparent" class="pt-15 pb-5">
          <v-sheet color="transparent" class="d-flex align-center justify-space-between ga-5">
            <template v-for="card in TOP_ITEMS" :key="card.key">
              <v-card color="transparent" flat class="flex-1-1" height="30vh">
                <v-card-title class="text-left">
                  <router-link to="" class="custom-router-link">
                    <v-icon size="x-small" :icon="card.prevIcon" class="mr-2" />
                    <span class="title">{{ card.title }}</span>
                    <v-icon size="x-small" icon="mdi-chevron-right" />
                  </router-link>
                </v-card-title>

                <v-card-text class="text-left">
                  <v-list class="bg-transparent">
                    <v-list-item
                      v-for="(list, lIndex) in LISTS[card.key]"
                      :key="list.key"
                      link
                      density="compact"
                      min-height="30"
                    >
                      <span v-if="card.order"> {{ lIndex + 1 }}. </span>
                      <span :class="{ 'font-weight-bold': list.active }">
                        {{ list.text }}
                      </span>
                    </v-list-item>
                  </v-list>
                </v-card-text>
              </v-card>
            </template>
          </v-sheet>
        </v-sheet>
      </container-c>
    </div>
    <!-- // 공지사항, 빠른 서비스, 출판사·판매자 안내 -->

    <!-- 스페셜 서비스 ~ 제휴 서비스 -->
    <div class="w-100 bg-grey-lighten-3">
      <container-c>
        <v-sheet color="transparent" class="pt-15 pb-5 d-flex ga-4">
          <template v-for="card in BOTTOM_ITEMS" :key="card.key">
            <v-card flat color="transparent" height="40vh" style="flex: 1">
              <v-card-title class="bg-grey-lighten-2 py-1">
                <router-link to="" class="custom-router-link">
                  <span class="title">{{ card.title }}</span>
                </router-link>
              </v-card-title>

              <v-card-text class="px-1">
                <v-list class="bg-transparent">
                  <v-list-item
                    v-for="list in card.lists"
                    :key="`${card.key}_${list.key}`"
                    link
                    density="compact"
                    min-height="30"
                    class="text-break"
                  >
                    <span v-html="list.text"></span>
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </template>
        </v-sheet>
      </container-c>
    </div>
    <!-- // 스페셜 서비스 ~ 제휴 서비스 -->

    <div class="w-100 bg-grey-lighten-2">
      <container-c>
        <v-sheet color="transparent" class="py-5 d-flex">
          <v-btn v-for="menu in FOOTER_MENUS" :key="menu.key" variant="text" size="small">
            <span :class="{ 'font-weight-bold': menu.active }">{{ menu.text }}</span>
          </v-btn>
        </v-sheet>
      </container-c>

      <v-divider />

      <container-c>
        <v-sheet color="transparent" class="d-flex justify-space-between">
          <v-sheet color="transparent" class="py-5 text-left">
            <h2 class="font-weight-bold">(주)알라딘커뮤니케이션</h2>
            <p>&copy; Aladin Communication. All Rights Reserved.</p>
            <p>RE:DESIGN By.서혜진</p>
          </v-sheet>
          <v-sheet color="transparent" class="py-5 text-left">
            <h2 class="font-weight-bold">고객센터 1544-2514 (발신자 부담)</h2>
            <p>서울시 마포구 백범로 71 숨도빌딩 7층 Fax 02-6926-2600</p>
          </v-sheet>
        </v-sheet>
      </container-c>
    </div>
  </v-footer>
</template>

<script setup>
import { TOP_ITEMS, LISTS, BOTTOM_ITEMS, FOOTER_MENUS } from '@/config/footer.js'
import ContainerC from '@/components/ContainerC.vue'
</script>

<style scoped lang="scss">
.title {
  font-size: 0.85rem;
  font-weight: 600;
}
</style>
