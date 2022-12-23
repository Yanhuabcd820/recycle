import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Works',
    component: () => import('@/views/Chart.vue')
  },
  {
      path: '/Chart',
      name: 'Chart',
      component: () => import('@/views/Chart.vue')

  },
  {
      path: '/Chart2',
      name: 'Chart2',
      component: () => import('@/views/Chart2.vue')

  },
  {
      path: '/Chart-line',
      name: 'Chart-line',
      component: () => import('@/views/Chart-line.vue')

  },
  {
      path: '/Chart-bar',
      name: 'Chart-bar',
      component: () => import('@/views/Chart-bar.vue')

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
