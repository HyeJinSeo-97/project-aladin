import { createRouter, createWebHistory } from 'vue-router'

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

export default router
