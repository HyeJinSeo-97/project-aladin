import axios from 'axios'

const Axios = axios.create({
  baseURL: 'http://localhost:3000'
})

export const apiConfig = {
  get: (url, params) => {
    return Axios.get(url, { params })
  }
}
