<template>
  <v-app-bar flat density="compact">
    <container-c>
      <router-link to="/" class="d-inline-block">
        <v-img src="images/aladin_logo.jpg" alt="로고" width="100" />
      </router-link>

      <v-sheet position="absolute" class="toolbar-actions">
        <template v-for="action in TOOLBAR_ACTIONS" :key="action.key">
          <template v-if="action.subList">
            <v-menu open-on-hover>
              <template v-slot:activator="{ props }">
                <v-btn
                  v-bind="props"
                  variant="plain"
                  size="x-small"
                  append-icon="mdi-menu-down"
                  class="px-2"
                >
                  {{ action.text }}
                </v-btn>
              </template>

              <v-list class="py-1">
                <v-list-item
                  v-for="(list, lIndex) in action.subList"
                  :key="lIndex"
                  link
                  density="compact"
                  min-height="25"
                >
                  <v-list-item-title>{{ list.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </template>
          <template v-else>
            <v-btn min-width="fit-content" size="x-small" variant="plain" class="px-2">
              {{ action.text }}
            </v-btn>
          </template>
        </template>
      </v-sheet>
    </container-c>

    <template #extension>
      <container-c>
        <v-row justify="start" justify-md="center">
          <v-tabs>
            <v-tab
              v-for="menu in MENUS"
              :key="menu.key"
              slim
              hide-slider
              min-width="fit-content"
              size="small"
              variant="flat"
            >
              {{ menu.title }}
            </v-tab>
          </v-tabs>

          <v-btn size="small" class="category-button" @click="dialog = true">
            <v-icon icon="mdi-menu" class="mr-1" />
            <span v-if="$vuetify.display.mdAndUp">전체 카테고리</span>
          </v-btn>
        </v-row>
      </container-c>
    </template>
  </v-app-bar>

  <v-app-bar flat color="primary" density="compact">
    <container-c>
      <v-row align="center">
        <template v-if="$vuetify.display.smAndDown">
          <v-menu open-on-hover open-delay="0" offset="10">
            <template v-slot:activator="{ props }">
              <v-btn v-bind="props" size="small" variant="text" prepend-icon="mdi-dots-vertical">
                메뉴 더보기
              </v-btn>
            </template>

            <v-list class="py-1">
              <v-list-item
                v-for="(subMenu, sIndex) in SUB_MENUS"
                :key="sIndex"
                link
                density="compact"
                min-height="25"
              >
                <v-list-item-title>{{ subMenu.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
        <template v-else>
          <v-col cols="6" sm="7" align-self="center" class="d-flex">
            <template v-for="subMenu in SUB_MENUS" :key="subMenu.key">
              <template v-if="subMenu.first">
                <v-menu open-on-hover offset="10">
                  <template v-slot:activator="{ props }">
                    <v-btn
                      v-bind="props"
                      variant="plain"
                      size="small"
                      append-icon="mdi-menu-down"
                      class="pa-0 flex-1-0 opacity-1"
                    >
                      {{ subMenu.title }}
                    </v-btn>
                  </template>

                  <v-list class="py-1">
                    <v-list-item
                      v-for="(list, lIndex) in subMenu.first"
                      :key="lIndex"
                      link
                      density="compact"
                      min-height="25"
                    >
                      <v-list-item-title>{{ list.title }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </template>
              <template v-else>
                <v-btn
                  :text="subMenu.title"
                  variant="plain"
                  size="small"
                  class="pa-0 flex-1-0 opacity-1"
                >
                  <template #default>
                    <span :class="{ 'text-blue-lighten-4': subMenu.key === 'toBeContinue' }">
                      {{ subMenu.title }}
                    </span>
                  </template>
                </v-btn>
              </template>
            </template>
          </v-col>
        </template>

        <v-spacer />

        <v-col cols="6" sm="5">
          <search-c />
        </v-col>
      </v-row>
    </container-c>
  </v-app-bar>

  <all-category-c v-model:dialog="dialog" @close="dialog = false"></all-category-c>
</template>

<script setup>
import { ref } from 'vue'
import { TOOLBAR_ACTIONS, MENUS, SUB_MENUS } from '@/config/header.js'
import SearchC from '@/components/SearchC.vue'
import AllCategoryC from '@/components/AllCategoryC.vue'
import ContainerC from '@/components/ContainerC.vue'

const dialog = ref(false)
</script>

<style lang="scss">
.toolbar-actions {
  right: 0;
  top: 0;
}

.v-list-item {
  padding: 2px 16px;

  .v-list-item-title {
    font-size: 0.75rem;
  }
}

.category-button {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
</style>
