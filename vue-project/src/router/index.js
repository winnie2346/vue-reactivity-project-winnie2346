import { createRouter, createWebHistory } from 'vue-router'
import one from '@/views/one.vue'
import hello from '@/views/hello.vue'
import complete from '@/views/complete.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: hello,
    },
    {
      path: '/game',
      name: 'game',
      component: one,
    },
     {
      path: '/complete',
      name: 'buns',
      component:Complete ,
    },
  ],
})

export default router
