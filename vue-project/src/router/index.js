import { createRouter, createWebHistory } from 'vue-router'
import one from '@/views/one.vue'
import hello from '@/views/hello.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/hi',
      name: 'home',
      component: hello,
    },
    {
      path: '/game',
      name: 'game',
      component: one,
    },
  ],
})

export default router
