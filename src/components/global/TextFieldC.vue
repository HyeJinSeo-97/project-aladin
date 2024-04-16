<template>
  <v-text-field
    :density="density"
    :variant="variant"
    :placeholder="placeholder"
    :hide-details="hideDetails"
    :type="fieldType"
    :rules="rules"
    :append-inner-icon="appendInnerIcon"
    class="global-text-field"
  >
    <template #message="{ message }">
      <slot name="message" v-bind:message="message"></slot>
    </template>
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
  fieldType: {
    type: String,
    default: 'text'
  },
  rules: {
    type: Array,
    default: () => [value => !!value || '필수 입력 항목입니다.']
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
