import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    urls: 'home',
    logined: false
  },
  mutations: {
    loginSucessful() {
      this.state.logined = true;
    }
  },
  actions: {
  },
  modules: {
  }
})
