import { defineStore } from 'pinia'
import { getItemListApi } from '@/module/itemList.js'
import swal from '@/plugins/swal.js'
import { reactive, ref } from 'vue'

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
    ebook: {},
    foreign: {},
    goods: {
      item: [
        {
          itemId: '1',
          img: 'g182431910.jpg',
          title: '피너츠 피규어 만년 달력',
          subTitle: '피너츠와 함께하는 매일의 즐거움'
        },
        {
          itemId: '2',
          img: 'g742431311_1.jpg',
          title: '나전칠기 용 문양 머그',
          subTitle: '빛에 따라 반짝이는 용'
        },
        {
          itemId: '3',
          img: 'g772431318.jpg',
          title: '인형 키링',
          subTitle: '블루그레이, 치즈고양이'
        }
      ]
    }
  })

  const getItemList = params => {
    return getItemListApi(params)
      .then(res => {
        if (params.type) itemTypes[params.type] = res

        return res
      })
      .catch(err => {
        swal.notice({
          type: 'error',
          text: err.errorMessage || err.message
        })
        console.error('[ getItemListApi ]', err)
      })
  }

  return { itemTypes, getItemList }
})

export { useItemListStore }
