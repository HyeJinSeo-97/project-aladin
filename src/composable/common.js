// router 이동
import router from '@/router/index.js'

export function useRouterLink(name, params) {
  router
    .push({
      name,
      params: params || {}
    })
    .then(() => {})
}
