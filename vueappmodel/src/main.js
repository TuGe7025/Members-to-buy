import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  preLoad: 1.3, // 预压高度的比例
  error: '../assets/img/no-pic.png', // 图像的加载失败时 显示的error图标
  loading: 'http://s1.hdslb.com/bfs/static/mall-c/static/img/picture-loading.4e2a7fb.svg', // 图像正常加载时 显示的loading图标
  attempt: 1 // 图像尝试加载 次数

})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
