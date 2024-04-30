import { defineStore } from 'pinia'
import { getLookUpApi } from '@/module/lookUp.js'
import swal from '@/plugins/swal.js'

const useLookUpStore = defineStore('lookUp', () => {
  const apiActions = {
    getLookUp: params => {
      return getLookUpApi(params)
        .then(res => {
          return res?.item[0]
        })
        .catch(err => {
          swal.notice({
            type: 'error',
            text: err.errorMessage || err.message
          })
        })
    }
  }

  return { apiActions }
})

export { useLookUpStore }
