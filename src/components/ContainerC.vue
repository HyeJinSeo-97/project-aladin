<template>
  <v-container class="global-container bg-transparent">
    <v-overlay :model-value="overlay" persistent class="align-center justify-center">
      <v-progress-circular
        color="primary"
        bg-color="white"
        size="60"
        width="5"
        indeterminate
      ></v-progress-circular>
    </v-overlay>
    <slot></slot>
  </v-container>
</template>

<script setup>
defineProps({
  overlay: { type: Boolean, default: false }
})
</script>

<style scoped lang="scss">
.global-container {
  position: relative;
  text-align: center;
  max-width: 1170px;
  padding: 0 16px;
  box-sizing: border-box;
}
</style>
