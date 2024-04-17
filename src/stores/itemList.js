import { defineStore } from 'pinia'
import { getItemListApi } from '@/module/itemList.js'
import swal from '@/plugins/swal.js'
import { reactive } from 'vue'

const useItemListStore = defineStore('itemList', () => {
  const itemTypes = reactive({
    editor_choice: {},
    event: {
      item: [
        {
          itemId: '1',
          img: '240415_april_w.jpg'
        },
        {
          itemId: '2',
          img: '240410_hwang_w.jpg'
        },
        {
          itemId: '3',
          img: '2404011_being_w.jpg'
        }
      ]
    },
    week: {},
    new_book: {},
    blog: {},
    standout: {},
    ebook: {}
  })

  const getItemList = params => {
    getItemListApi(params)
      .then(res => {
        if (res) {
          itemTypes[params.type] = res
        }
      })
      .catch(err => {
        swal.notice({
          type: 'error',
          text: err.errorMessage
        })
        console.error('[ getItemListApi ]', err)
      })
  }

  return { itemTypes, getItemList }
})

export { useItemListStore }
