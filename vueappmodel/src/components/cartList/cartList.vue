<template>
  <div class="shop" v-show ='disnone'>
    <div class="item-title">
      <van-icon name="wap-home" />
      <span class="info">昆山仓</span>
    </div>
    <div class="item" >
      <van-radio-group v-model="radio">
        <van-radio name="1" >
        </van-radio>
      </van-radio-group>
      <div class="item-img">
            <img
              src="//i0.hdslb.com/bfs/mall/mall/91/0d/910dd9dcb31fb5224f463d961a994a28.png@160w_160h.jpg"
              width="80px"
              height="80px"
            />
          </div>
          <div class="info-container">
            <div class="item-name">万代 DX假面骑士</div>
            <div class="item-info">2222</div>
            <div class="item-pric">
              <div class="price-cart">
                <span class="mini">¥</span>
                <span class="now-price">219</span>
              </div>
              <van-stepper v-model="value" />
            </div>
          </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { RadioGroup, Radio, Icon, Stepper } from 'vant'

Vue.use(RadioGroup)
Vue.use(Radio)
Vue.use(Icon)
Vue.use(Stepper)
export default {
  data () {
    return {
      radio: '',
      value: '',
      disnone: false
    }
  }
}
</script>
<style lang="scss">
@import "@/lib/reset.scss";
.shop {
  @include flexbox();
  @include flex-direction(column);
  @include rect(100%, 1.4rem);
  margin-top: 0.1rem;
  padding: 0.09rem;
  background: #ffffff;
  .item-title {
    @include rect(100%, 0.36rem);
    line-height: 0.2rem;
    position: relative;
    .info {
      position: absolute;
      left: 0.2rem;
      top: -0.01rem;
    }
    .van-icon-wap-home {
      color: #ff6666;
    }
  }
  .item {
    @include flexbox();
    .van-radio-group{
      padding-top: 0.3rem;
    }
    .item-img {
      @include rect(0.8rem, 0.8rem);
      margin: 0 0.1rem;
    }
    .info-container {
      @include rect(2.31rem, 0.86rem);
      .item-name {
        font-size: 14px;
        line-height: 18px;
        text-overflow: ellipsis;
        overflow: hidden;
        margin-bottom: 0.1rem;
      }
      .item-pric {
        @include flexbox();
        .price-cart {
        line-height: 35px;
        margin-right: 0.5rem;
        }
      }
    }
  }
}
</style>
