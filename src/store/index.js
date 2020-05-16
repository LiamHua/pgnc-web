import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 控制登陆与注册组件的显示状态
    showRegister: false
  },
  mutations: {
    // 切换登陆与注册
    switchLoginOrRegister (state) {
      state.showRegister = !state.showRegister
    }
  },
  actions: {
  },
  modules: {
  }
})
