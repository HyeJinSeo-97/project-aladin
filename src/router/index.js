import { createRouter, createWebHistory } from 'vue-router'
import { getToken } from '@/utils/token.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/MainContainer.vue')
    },
    {
      path: '/login',
      component: () => import('@/views/LoginView.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const token = getToken()

  if (to.path === '/login') {
    if (token) {
      next(from.path)
    }
  }

  next()
})

export default router
