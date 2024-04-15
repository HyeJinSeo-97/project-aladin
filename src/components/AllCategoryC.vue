<template>
  <dialog-c max-width="1200" content-class="all-category-dialog">
    <template v-slot:title>
      <div class="text-right">
        <v-btn
          icon="mdi-close"
          size="x-small"
          color="black"
          class="mb-1 mr-1"
          @click="$emit('close')"
        >
        </v-btn>
      </div>
    </template>
    <template v-slot:text>
      <v-container fluid class="category-container d-flex pa-0">
        <v-sheet class="d-flex category-vertical-box" min-width="25%">
          <v-tabs
            v-model="activeMenu"
            direction="vertical"
            density="compact"
            hide-slider
            style="width: 45%"
          >
            <v-tab
              v-for="menu in verticalMenus"
              :key="menu.key"
              :value="menu.key"
              height="28"
              size="small"
              selected-class="bg-blue-lighten-5"
              class="justify-space-between"
              append-icon="mdi-chevron-right"
            >
              <strong>{{ menu.title }}</strong>
            </v-tab>
          </v-tabs>
          <v-window v-model="activeMenu" class="bg-blue-lighten-5" style="width: 65%">
            <v-window-item v-for="menu in verticalMenus" :key="menu.key" :value="menu.key">
              <v-sheet>
                <v-list class="bg-blue-lighten-5">
                  <template v-for="(subMenu, sKey) in menu.subMenus" :key="sKey">
                    <v-hover>
                      <template v-slot:default="{ isHovering, props }">
                        <v-list-item
                          v-bind="props"
                          link
                          density="compact"
                          min-width="fit-content"
                          min-height="25"
                          variant="plain"
                        >
                          <span :class="{ 'text-primary font-weight-bold': isHovering }">
                            {{ subMenu.title }}
                          </span>
                        </v-list-item>
                      </template>
                    </v-hover>
                  </template>
                </v-list>
              </v-sheet>
            </v-window-item>
          </v-window>
        </v-sheet>

        <v-sheet class="d-flex flex-wrap">
          <template v-for="menu in MENUS" :key="menu.key">
            <v-sheet
              v-if="!menu.vertical && menu.subMenus"
              max-width="20%"
              class="category-box flex-fill pa-3"
            >
              <v-btn
                block
                size="small"
                color="primary"
                append-icon="mdi-chevron-right"
                class="justify-space-between"
              >
                {{ menu.title }}
              </v-btn>

              <v-list>
                <template v-for="(subMenu, sKey) in menu.subMenus" :key="sKey">
                  <v-hover>
                    <template v-slot:default="{ isHovering, props }">
                      <v-list-item
                        link
                        v-bind="props"
                        density="compact"
                        min-width="fit-content"
                        min-height="25"
                        class="category-list-item"
                        variant="plain"
                      >
                        <span :class="{ 'text-primary font-weight-bold': isHovering }">
                          {{ subMenu.title }}
                        </span>
                      </v-list-item>
                    </template>
                  </v-hover>
                </template>
              </v-list>
            </v-sheet>
          </template>
        </v-sheet>
      </v-container>
    </template>
  </dialog-c>
</template>

<script setup>
import DialogC from '@/components/global/DialogC.vue'

import { MENUS } from '@/config/header.js'
import { ref } from 'vue'

const activeMenu = ref('book')
const verticalMenus = MENUS.filter(menu => menu.vertical)

defineEmits(['close'])
</script>

<style scoped lang="scss">
.category-container {
  border: 1px solid #dbdbdb;

  .category-box {
    border-bottom: 1px solid #dbdbdb;
    border-left: 1px solid #dbdbdb;

    &:last-of-type {
      border-right: 1px solid #dbdbdb;
    }
  }
}
</style>
