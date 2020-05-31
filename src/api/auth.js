import request from '@/utils/request'

export function loginWithSMS (loginForm) {
  return request({
    url: 'auth/login',
    method: 'post',
    data: loginForm
  })
}

export function loginWithPassword (loginForm) {
  return request({
    url: 'auth/login',
    method: 'post',
    data: loginForm
  })
}

export function getCode (tel) {
  return request({
    url: 'auth/getCode',
    method: 'post',
    data: { tel }
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
