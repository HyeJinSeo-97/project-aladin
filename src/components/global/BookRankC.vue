<template>
  <v-card flat min-width="25%" :width="width" class="d-flex align-center">
    <v-sheet>
      <router-link to="" class="d-inline-block">
        <v-img
          src="https://dummyimage.com/80x116/000/fff&text=thumbnail"
          alt="썸네일"
          width="100"
        />
      </router-link>
    </v-sheet>

    <v-sheet class="font-weight-bold mx-5">{{ rank }}</v-sheet>

    <v-sheet>
      <router-link to="" class="custom-router-link">
        <p style="font-weight: 600">{{ title }}</p>
      </router-link>
      <p class="text-grey mt-1">{{ author }}</p>
    </v-sheet>
  </v-card>
</template>

<script setup>
defineProps({
  rank: Number,
  title: String,
  author: String,
  width: String
})
</script>
