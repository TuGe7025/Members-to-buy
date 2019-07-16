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
        <div class="shop">
          <div class="item-title">
            <span class="info">昆山仓</span>
          </div>
          <div class="item">
            <van-radio-group v-model="radio">
              <van-radio name="1">
                <div class="item-img">
                  <img src="//i0.hdslb.com/bfs/mall/mall/91/0d/910dd9dcb31fb5224f463d961a994a28.png@160w_160h.jpg" width="80px"
        height="80px">
                </div>
                <div class="info-container">
                  <div class="item-name two-line">万代 DX假面骑士 时空驱动器腰带 变身手表 成品模型</div>
                  <!---->
                  <div class="item-spec">盖茨复苏变身手表</div>
                  <!---->
                </div>
              </van-radio>
            </van-radio-group>
          </div>
        </div>
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
import { NavBar, RadioGroup, Radio } from 'vant'

Vue.use(NavBar)
Vue.use(RadioGroup)
Vue.use(Radio)
export default {
  data () {
    return {
      falg: true
    }
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
.van-icon-arrow-left {
  @include font-size(20px);
  color: #858080;
}
.van-radio>.van-radio__label {
  display: flex;
}
</style>
