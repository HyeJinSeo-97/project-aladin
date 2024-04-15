<template>
  <v-sheet position="relative">
    <text-field-c placeholder="도서 검색" append-inner-icon="mdi-magnify">
      <v-overlay
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
              <span>최근 검색어가 없습니다.</span>
            </div>
            <div class="card-right">
              <v-card>광고</v-card>
              <v-card>광고</v-card>
            </div>
          </template>
          <template #actions>
            <v-btn size="small" variant="plain">검색 기록 삭제</v-btn>
          </template>
        </v-card>
      </v-overlay>
    </text-field-c>
  </v-sheet>
</template>

<script setup>
import TextFieldC from '@/components/global/TextFieldC.vue'
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
    border-top: 1px solid #dbdbdb;
    padding: 1rem;

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
