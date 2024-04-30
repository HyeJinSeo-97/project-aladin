import { defineStore } from 'pinia'
import { getSearchItemApi } from '@/module/search.js'
import swal from '@/plugins/swal.js'

const useSearchStore = defineStore('search', () => {
  const actions = {
    getSearchItem: params => {
      return getSearchItemApi(params)
        .then(res => {
          return res
        })
        .catch(err => {
          swal.notice({
            type: 'error',
            text: err.errorMessage || err.message
          })
        })
    }
  }

  return { actions }
})

export { useSearchStore }