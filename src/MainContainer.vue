<script setup>
import HeaderC from '@/components/HeaderC.vue'
import FooterC from '@/components/FooterC.vue'
</script>

<template>
  <header-c></header-c>

  <v-main>
    <v-sheet class="py-4">
      <router-view></router-view>
    </v-sheet>
  </v-main>

  <footer-c></footer-c>
</template>
