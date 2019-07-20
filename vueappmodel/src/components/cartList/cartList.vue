<template>
  <div class="shop">
    <div class="item-title">
      <van-icon name="wap-home" />
      <span class="info">昆山仓</span>
    </div>
    <div class="item"  v-for='(item,index) of list' :key='index'>
      <div class="inp">
        <input type="checkbox" v-model="item.flag">
      </div>
      <div class="item-img">
            <img
              :src="item.imgs"
              width="80px"
              height="80px"
            />
          </div>
          <div class="info-container">
            <div class="item-name">{{item.names}}</div>
            <div class="item-info">{{item.brandname}}</div>
            <div class="item-pric">
              <div class="price-cart">
                <span class="mini">¥</span>
                <span class="now-price">{{item.prices}}</span>
              </div>
              <div class="spec-num">
                <span class="qian spec-num-info" @click="item.shop >= 2 ? item.shop -= 1 : item.shop = 1">-</span>
                <span class="num">{{item.shop}}</span>
                <span class="add spec-num-info" @click="item.shop += 1" >+</span>
              </div>
            </div>
          </div>
    </div>
    <div class="bay">
      <div class="bay-left">
        <div class="bay-info">
          <span class="info-top">商品金额总计：</span>
          <span class="info-content">￥</span>
          <span class="info-content">{{ totalPrice }}</span>
        </div>
        <span class="info-b">不含运费</span>
      </div>
      <div class="bay-right pay" >
        <span class="pay-num"  >结算({{ totalNum }})</span>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { RadioGroup, Radio, Icon, Stepper } from 'vant'
import { mapState } from 'vuex'

Vue.use(RadioGroup)
Vue.use(Radio)
Vue.use(Icon)
Vue.use(Stepper)
export default {
  data () {
    return {
      value: '',
      falg: false
    }
  },
  computed: {
    ...mapState({
      cartlist (state) {
        return state.cartlist
      }
    }),
    list () {
      return this.$store.getters.list
    },
    totalNum () {
      return this.$store.getters.totalNum
    },
    totalPrice () {
      return this.$store.getters.totalPrice
    }
  }
}
</script>
<style lang="scss">
@import "@/lib/reset.scss";
.shop {
  @include flexbox();
  @include flex-direction(column);
  @include rect(100%, auto);
  margin-top: 0.03rem;
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
    margin-bottom: 0.3rem;
    background: #ffffff;
    @include rect(100%, 0.86rem);
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
        justify-content: space-between;
        .price-cart {
        line-height: 35px;
        margin-right: 0.5rem;
        }
      }
    }
  }
}
.mini,.now-price {
  color: #ff6666;
}
.inp {
  // display: inline-block;
  @include rect(0.2rem, 0.2rem);
  border-radius: 50%;
  border: 1px solid #ccc;
  margin-top: 0.5rem;
  overflow: hidden;
  input {
    @include rect(0.23rem, 0.23rem);
    display: inline-block;
    border-radius: 50%;
    border: 1px solid #333;
    background: #ffffff;
  }
}
.spec-num-info {
  margin-right: 10px;
  margin-left:10px;
  color: #ccc;
  letter-spacing: 0;
  line-height: 32px;
  text-align: center;
  width: 32px;
  height: 32px;
  display: inline-block;
  font-size: 24px;
  border:1px solid #ccc;
  border-radius: 50%;
  font-weight: 100;
}
.bay {
  position: fixed;
  bottom: 0.5rem;
  width: 100%;
  height: 0.7rem;
  left: 0;
  padding: 0.1rem;
  background: #ffffff;
  display: flex;
}
.bay-left {
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .info-b {
    color: #999;
    font-size: 12px;
  }
  .info-top {
    font-size: 14px;
  }
  .info-content {
    color: #ff6666;
  }
}
.bay-right {
  width: 28%;
  height: 100%;
  color: #999;
  background-color: #e7e7e7;
  text-align: center;
  line-height: 0.5rem;
  border-radius: 100px;
  span {
    color: #ffffff;
  }
}
.pay {
  background-color: #ff6666;
}
</style>
