import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginSation: '',
    cartlist: []
  },
  getters: {
    totalNum (state) {
      let totalNum = 0
      state.cartlist.map(item => {
        item.flag ? totalNum += item.shop : totalNum += 0
      })
      return totalNum
    },
    totalPrice (state) {
      let totalPrice = 0
      state.cartlist.map(item => {
        item.flag ? totalPrice += item.shop * item.prices : totalPrice += 0
      })
      return totalPrice
    },
    list (state) {
      let arr = state.cartlist
      for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
          if (arr[i].id === arr[j].id) {
            arr.splice(j, 1)
            j = j - 1
          }
        }
      }
      return arr
    }
  },
  mutations: {
    changeLoginState (state, data) {
      state.loginSation = data
    },
    changeCartList (state, data) {
      state.cartlist.push(data)
    }
  },
  actions: {

  }
})
