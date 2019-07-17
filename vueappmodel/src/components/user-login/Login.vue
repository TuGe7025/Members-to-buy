<template>
  <van-tabs v-model="active"  animated>
    <van-tab v-for="(item,index) of info" :title="item" :key='index' >
      <div class="img"></div>
      <div class="img-info" v-if="active === 0">暂无订单</div>
      <div class="img-info" v-if="active === 1">暂无待付款订单</div>
      <div class="img-info" v-if="active === 2">暂无待收货订单</div>
      <div class="img-info" v-if="active === 3">暂无待评价订单</div>
    </van-tab>
  </van-tabs>
</template>
<script>
import Vue from 'vue'
import { Tab, Tabs } from 'vant'

Vue.use(Tab).use(Tabs)
export default {
  data () {
    return {
      info: ['全部', '待付款', '待收货', '待评价'],
      active: ''
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      const { $store: { state: { loginSation } } } = vm
      if (loginSation === 'ok') {
        next()
      } else {
        next('/order/nologin')
      }
    })
  }
}
</script>
<style lang="scss" >
.img {
  width: 2.8rem;
  height: 1.44rem;
  margin:1rem auto 0.3rem;
  background: url(//s1.hdslb.com/bfs/static/mall-c/static/img/empty.28e1bea.png) no-repeat ;
  background-size: 100% 100%;
}
.img-info {
  text-align: center;
  color: #999;
  font-size: 16px;
}
</style>
