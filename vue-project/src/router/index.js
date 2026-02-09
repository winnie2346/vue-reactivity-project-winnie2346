import { createRouter, createWebHistory } from 'vue-router'
import one from '@/views/one.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: one,
    },
  ],
})

export default router
