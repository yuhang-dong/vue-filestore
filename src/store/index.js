import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    urls: 'home/dir1/dir2',
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
