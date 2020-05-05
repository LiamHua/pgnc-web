import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('@/views/home'),
    meta: {
      title: '飞鸽校园'
    }
  },
  {
    path: '/login',
    component: () => import('@/views/login'),
    meta: {
      title: '登录-飞鸽校园'
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
