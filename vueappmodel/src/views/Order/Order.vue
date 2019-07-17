<template>
  <div class="contaiter">
    <div class="order">
      <header class="order-header">
        <van-nav-bar title="我的订单" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
          <span class="iconfont iconshouye1" slot="right" />
        </van-nav-bar>
      </header>
      <nav class="order-nav">订单导航</nav>
      <div class="order-list">订单列表</div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { NavBar, Icon } from 'vant'

Vue.use(NavBar)
Vue.use(Icon)
export default {
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
<style lang="scss">
@import "@/lib/reset.scss";
#app,
.contaiter {
  @include flexbox();
  @include flex-direction(column);
}
.contaiter {
  @include flex();
  @include rect(100%, 100%);
  @include flexbox();
  @include flex-direction(column);
}
.van-hairline--bottom {
  @include rect(100%, 0.44rem);
}
 .van-icon.van-icon-arrow-left {
  @include font-size(20px);
  @include color(#858080)
}
.van-nav-bar__right {
  span {
    @include font-size(18px);
    color: #858080;
  }
}
</style>
