<template>
  <v-text-field
    :density="density"
    :variant="variant"
    :placeholder="placeholder"
    :hide-details="hideDetails"
    :append-inner-icon="appendInnerIcon"
    class="global-text-field"
  >
    <slot></slot>
  </v-text-field>
</template>

<script setup>
import { VTextField } from 'vuetify/components'

defineProps({
  density: {
    type: String,
    default: 'compact'
  },
  variant: {
    type: String,
    default: 'solo'
  },
  hideDetails: {
    type: Boolean,
    default: true
  },
  placeholder: String,
  appendInnerIcon: String
})
</script>

<style scoped lang="scss">
.global-text-field {
  &:deep(.v-field__field) {
    font-size: 0.75rem;
  }
  &:deep(.v-field__input) {
    min-height: 25px;
  }
}
</style>
