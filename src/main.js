import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import './plugins/iview.js'
import '@/styles/common.css'
import animate from 'animate.css'
import './router/navigation-guards'

Vue.config.productionTip = false
Vue.use(animate)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
