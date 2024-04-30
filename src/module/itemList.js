import { apiConfig } from '@/module/api.config.js'

export const getItemListApi = (queryType, params) => {
  const URL = `/list/${queryType}`

  return new Promise((resolve, reject) => {
    apiConfig
      .get(URL, params)
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
