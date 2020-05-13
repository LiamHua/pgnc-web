const userRoutes = {
  path: '/user',
  component: () => import('@/views/UserInfo'),
  children: [
    {
      path: 'own-info',
      component: () => import('@/views/UserInfo.vue')
    }
  ]
}

export default userRoutes
