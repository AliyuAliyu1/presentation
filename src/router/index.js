import { createRouter, createWebHistory } from 'vue-router'
import home from '@/views/landingPage.vue'
import login from '@/views/login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    }
  ],
})

export default router
