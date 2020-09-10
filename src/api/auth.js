import request from '@/utils/request'

export function register (registerForm) {
  return request({
    url: '/auth/register',
    method: 'post',
    data: registerForm
  })
}

export function loginWithSMS (loginForm) {
  return request({
    url: '/auth/loginWithSMS',
    method: 'post',
    data: loginForm
  })
}

export function loginWithPassword (loginForm) {
  return request({
    url: '/auth/loginWithPassword',
    method: 'post',
    data: loginForm
  })
}

export function getSMS (tel) {
  return request({
    url: 'auth/getSMS/' + tel,
    method: 'get',
    data: {}
  })
}

export function verifyToken (token) {
  return request({
    url: 'auth/verifyToken',
    method: 'post',
    data: { token }
  })
}

export function gerUserInfo () {
  return request({
    url: 'auth/getUserInfo',
    method: 'get',
    data: {}
  })
}

export function saveUserInfo (user) {
  return request({
    url: 'auth/saveUserInfo',
    method: 'put',
    data: { user }
  })
}
