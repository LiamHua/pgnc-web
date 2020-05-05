import axios from 'axios'
import Config from '@/settings'

const service = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? process.env.VUE_APP_BASE_API : '/',
  timeout: Config.timeout
})

service.interceptors.request.use(
  config => {
    // 让每个请求头携带token
    if (window.sessionStorage.token) {
      config.headers.Authorization = window.sessionStorage.token
    }
    config.headers['Content-Type'] = 'application/json'
    return config
  },
  error => {
    console.log(error)
    Promise.reject(error)
  }
)

service.interceptors.response.use(

)

export default service
