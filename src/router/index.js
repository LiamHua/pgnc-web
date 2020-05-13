import Vue from 'vue'
import VueRouter from 'vue-router'
import userRoutes from './modules/user'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    userRoutes,
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: () => import('@/views/Home'),
      meta: {
        title: '飞鸽校园'
      }
    },
    {
      path: '/login',
      component: () => import('@/views/Login'),
      meta: {
        title: '登录-飞鸽校园'
      }
    }
  ]
})

export default router
