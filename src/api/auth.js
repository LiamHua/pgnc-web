import request from '@/utils/request'

export function loginWithCode (loginForm) {
  return request({
    url: 'auth/login',
    method: 'post',
    data: loginForm
  })
}

export function loginWithPass (loginForm) {
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
