import { createRouter, createWebHistory } from 'vue-router'
import { getToken } from '@/utils/token.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/welcome',
      component: () => import('@/MainContainer.vue'),
      children: [
        {
          path: 'welcome',
          component: () => import('@/views/WelcomeView.vue')
        },
        {
          path: 'product/:isbn13',
          name: 'Product',
          props: true,
          component: () => import('@/views/ProductView.vue')
        }
      ]
    },
    {
      path: '/login',
      component: () => import('@/views/LoginView.vue')
    }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
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
