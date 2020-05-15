const userRoutes = {
  path: '/user',
  // 进入父路由时，默认显示的子路由
  redirect: '/user/my-info',
  component: () => import('@/views/UserInfo/index'),
  meta: {
    title: '个人中心'
  },
  children: [
    {
      path: 'my-info',
      component: () => import('@/views/UserInfo/my-info'),
      meta: {
        title: '个人信息'
      }
    },
    {
      path: 'my-commodities',
      component: () => import('@/views/UserInfo/my-commodities'),
      meta: {
        title: '我的商品'
      }
    },
    {
      path: 'shopping-cart',
      component: () => import('@/views/UserInfo/shopping-cart'),
      meta: {
        title: '我的求购'
      }
    },
    {
      path: 'my-collections',
      component: () => import('@/views/UserInfo/my-collections'),
      meta: {
        title: '我的收藏'
      }
    },
    {
      path: 'my-authentication',
      component: () => import('@/views/UserInfo/my-authentication'),
      meta: {
        title: '身份认证'
      }
    }
  ]
}

export default userRoutes
