import { apiConfig } from '@/module/api.config.js'
import main from '@/config/main.js'

const BASE_URL = main.APIS.ITEM_LIST

export const getItemListApi = params => {
  return new Promise((resolve, reject) => {
    apiConfig
      .get(BASE_URL, params)
      .then(res => {
        const { errorCode } = res.data

        if (errorCode) reject(res.data)
        else resolve(res.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}