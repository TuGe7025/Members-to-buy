<template>
  <div class="contaiter">
    <div class="order">
      <header class="order-header">
        <van-nav-bar title="我的订单" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
          <span class="iconfont iconhuiyuangoux" slot="right" />
        </van-nav-bar>
      </header>
      <router-view></router-view>
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
  },
  watch: {
    $route (newval, oldval) {
      const { $store: { state: { loginState } } } = this
      if (newval.name === 'order') {
        if (loginState === 'ok') {
          this.$router.replace('/order/login')
        } else {
          this.$router.replace('/order/nologin')
        }
      }
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      const { $store: { state: { loginSation } } } = vm
      if (to.name === 'order') {
        if (loginSation === 'ok') {
          vm.$router.replace('/order/login')
        } else {
          vm.$router.replace('/order/nologin')
        }
      } else {
        next()
      }
    })
  }
}
</script>
<style lang="scss" scoped>
@import "@/lib/reset.scss";
#app,
.contaiter {
  @include flexbox();
  @include flex-direction(column);
}
.contaiter {
  @include flex();
  @include rect(100%, 100%);
}
.order {
  @include flex();
  @include rect(100%, 100%);
  @include flexbox();
  @include flex-direction(column);
}
.van-hairline--bottom {
  @include rect(100%, 0.44rem);
}
 .van-icon.van-icon-arrow-left{
  @include font-size(20px);
  @include color(#ffff)
}
.van-nav-bar__title {
  color: #fff;
  font-size: 16px;
}
.van-nav-bar__right {
  span {
    @include font-size(20px);
    color: #fff;
  }
}
.order-header {
  .van-nav-bar{
    background: #fb7299;
  }
}
</style>
