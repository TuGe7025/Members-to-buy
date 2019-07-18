<template>
  <div class="contaiter">
    <header>
      <van-nav-bar title="我的优惠卷" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
          <span class="iconfont iconhuiyuangoux" slot="right" />
      </van-nav-bar>
    </header>
    <van-tabs v-model="active"  animated  >
      <van-tab v-for="(item,index) of info" :title="item" :key='index'  >
        <div class="img"></div>
        <div class="img-info">暂无优惠卷</div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import Vue from 'vue'
import { NavBar, Icon, Tab, Tabs } from 'vant'

Vue.use(NavBar)
Vue.use(Icon)
Vue.use(Tab).use(Tabs)
export default {
  data () {
    return {
      info: [ '未使用', '已使用', '已失效' ],
      active: ''
    }
  },
  methods: {
    onClickLeft () {
      this.$router.back()
    },
    onClickRight () {
      this.$router.push('/home')
    }
  }
}
</script>
<style lang="scss" scoped>
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
.van-icon-arrow-left{
  font-size: 20px;
  color: #858080;
}
.van-nav-bar__right {
  span {
    font-size: 20px;
    color: #858080;
  }
}
</style>
