import router from './index'
import { verifyToken } from '@/api/auth'

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

router.beforeEach((to, from, next) => {
  if (to.path === '/admin') {
    if (window.sessionStorage.token) {
      if (verifyToken(window.sessionStorage.token)) {
        next()
      } else {
        next('login')
      }
    } else {
      next('/login')
    }
  } else {
    next()
  }
})
