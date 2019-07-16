<template>
  <div class="contaiter">
    <div class="cart">
      <header class="cart-header">
        <van-nav-bar
          title="会员购 的购物车"
          left-arrow
          @click-left="onClickLeft"
        />
      </header>
      <div class="cart-content" >
        <cartList />
        <div class="cart-item" v-show='falg'>
          <div class="cart-img"></div>
          <p class="cart-title">购物车里面空空如也</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { NavBar } from 'vant'
import cartList from '@/components/cartList/cartList'

Vue.use(NavBar)
export default {
  data () {
    return {
      falg: true
    }
  },
  components: {
    cartList
  },
  methods: {
    onClickLeft () {
      this.$router.back()
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/lib/reset.scss";
#app,.contaiter {
  @include flexbox();
  @include flex-direction(column);
}
.contaiter {
  @include flex();
  @include rect(100%, 100%);
  @include flexbox();
  @include flex-direction(column);
  .cart-content {
    @include flex();
    @include rect(100%, auto);
    .cart-item {
      position: fixed;
      width: 100%;
      top: 31%;
      .cart-img {
        margin: 0.2rem auto 0.06rem;
        width: 1.3rem;
        height: 1.3rem;
        background: url(//s1.hdslb.com/bfs/static/mall-c/static/img/empty@2x.b71ff83.png);
        background-size: 100%;
      }
      .cart-title {
        line-height: 0.14rem;
        font-size: 14px;
        color: #999;
        text-align: center;
      }
    }
  }
}
.cart-header,.van-hairline--bottom {
    @include rect(100%, 0.44rem);
}
.van-icon-arrow-left {
  @include font-size(20px);
  color: #858080;
}
</style>
