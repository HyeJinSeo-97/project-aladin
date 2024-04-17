<script setup>
import HeaderC from '@/components/HeaderC.vue'
import ContainerC from '@/components/ContainerC.vue'
</script>

<template>
  <header-c></header-c>

  <v-main>
    <container-c>
      <v-sheet class="py-4">
        <router-view></router-view>
      </v-sheet>
    </container-c>
  </v-main>
</template>
