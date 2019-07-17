import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginSation: ''
  },
  mutations: {
    changeLoginState (state, data) {
      state.loginSation = data
    }
  },
  actions: {

  }
})
