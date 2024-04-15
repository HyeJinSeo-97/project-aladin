<template>
  <v-dialog
    :model-value="dialog"
    :max-width="maxWidth"
    :content-class="contentClass"
    @update:model-value="$emit('update:dialog')"
  >
    <v-card>
      <template #title>
        <slot name="title"></slot>
      </template>

      <template #text>
        <slot name="text"></slot>
      </template>

      <template #actions>
        <slot name="actions"></slot>
      </template>
    </v-card>
    <slot></slot>
  </v-dialog>
</template>

<script setup>
defineProps({
  dialog: Boolean,
  maxWidth: {
    type: String,
    default: '500'
  },
  contentClass: String
})

defineEmits(['update:dialog'])
</script>
