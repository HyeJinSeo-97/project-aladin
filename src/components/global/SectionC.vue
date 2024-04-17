<template>
  <v-card>
    <v-card-title class="text-left">
      <router-link to="" class="custom-router-link">
        <strong>{{ title }}</strong>
        <v-icon icon="mdi-chevron-right" />
      </router-link>
    </v-card-title>

    <v-card-text class="text-left">
      <slot name="text"></slot>
    </v-card-text>
  </v-card>
</template>

<script setup>
defineProps({
  title: String
})
</script>
