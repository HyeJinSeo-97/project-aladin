<template>
  <v-container class="fill-height">
    <v-row justify="center">
      <v-col cols="12" class="d-flex flex-column align-center">
        <v-img src="images/aladin_logo.jpg" alt="알라딘" width="200" class="login-img" />
        <p class="login-title">로그인</p>
      </v-col>

      <v-col cols="10" sm="5">
        <v-form ref="form" @submit.prevent="onLogin">
          <template v-for="field in FIELDS" :key="field.key">
            <div class="mt-n3">
              <v-label class="pl-1 form-label">{{ field.label }}</v-label>
              <text-field-c
                v-model="fieldModels[field.key]"
                variant="outlined"
                :hide-details="false"
                :append-icon="field.key === 'password' ? (showPwd ? 'mdi-eye' : 'mdi-eye-off') : ''"
                :field-type="
                  field.key === 'password' ? (showPwd ? 'text' : field.type) : field.type
                "
                @click:append="showPwd = !showPwd"
              >
                <template #message="{ message }">
                  <div class="mb-5">{{ message }}</div>
                </template>
              </text-field-c>
            </div>
          </template>

          <v-btn block type="submit" color="primary" class="mt-5">로그인</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { inject, reactive, ref } from 'vue'
import TextFieldC from '@/components/global/TextFieldC.vue'
import { useRouter } from 'vue-router'

// DATA
const FIELDS = [
  {
    key: 'id',
    label: '아이디',
    type: 'text',
    rules: [value => !!value || '필수 입력 항목입니다.']
  },
  {
    key: 'password',
    label: '비밀번호',
    type: 'password',
    rules: [value => !!value || '필수 입력 항목입니다.']
  }
]
const form = ref()
const router = useRouter()
const $alert = inject('$alert')
const fieldModels = reactive({ id: undefined, password: undefined })
const showPwd = ref(false)

// MOUNTED

// METHODS
const onLogin = async () => {
  const { valid } = await form.value.validate()

  if (valid) {
    $alert.confirm({
      text: '로그인하시겠습니까?',
      confirm: {
        text: '로그인',
        cb: () => {
          router.push('/')
        }
      }
    })
  }
}
</script>

<style lang="scss">
.login-title {
  font-weight: 700;
  font-size: 2rem;

  @media screen and (min-width: 600px) {
    font-size: 2.5rem;
  }
}

.form-label {
  font-size: 0.875rem;
}
</style>
