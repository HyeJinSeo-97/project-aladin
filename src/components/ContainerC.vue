<template>
  <v-container class="global-container">
    <slot></slot>
  </v-container>
</template>

<style scoped lang="scss">
.global-container {
  position: relative;
  text-align: center;
  max-width: 1170px;
  padding: 0 16px;
  box-sizing: border-box;
}
</style>
