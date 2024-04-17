import axios from 'axios'
import main from '@/config/main.js'

export const apiConfig = {
  get: (url, config) => {
    return axios.get(`${url}?ttbkey=${main.PRIVATE_KEY}`, {
      params: { ...config, Output: main.OUTPUT, Version: main.VERSION }
    })
  },
  post: (url, data) => {
    return axios.post(`${url}?ttbkey=${main.PRIVATE_KEY}`, data)
  }
}
