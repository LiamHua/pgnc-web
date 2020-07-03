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
      component: () => import('@/views/UserInit'),
      meta: {
        title: '登录-飞鸽校园'
      }
    },
    {
      path: '/publish',
      component: () => import('@/views/PublishCommodity'),
      meta: {
        title: '发布商品'
      }
    },
    {
      path: '/demand',
      component: () => import('@/views/Demand'),
      meta: {
        title: '求购商品'
      }
    },
    {
      path: '/product-info',
      component: () => import('@/views/ProductInfo'),
      meta: {
        title: '商品详情'
      }
    },
    {
      path: '/need',
      component: () => import('@/views/BuyMessage'),
      meta: {
        title: '物品求购'
      }
    }
  ]
})

export default router
