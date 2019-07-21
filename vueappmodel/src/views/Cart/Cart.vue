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
        <cartList v-if="disnone"/>
        <div class="cart-item" v-else>
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
import { mapState } from 'vuex'

Vue.use(NavBar)
export default {
  data () {
    return {
      // falg: true,
      disnone: false
    }
  },
  computed: {
    ...mapState({
      cartlist (state) {
        return state.cartlist
      }
    }),
    totalNum () {
      return this.$store.getters.totalNum
    },
    totalPrice () {
      return this.$store.getters.totalPrice
    }
  },
  components: {
    cartList
  },
  methods: {
    onClickLeft () {
      this.$router.back()
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (vm.cartlist.length > 0) {
        vm.disnone = true
      }
    })
  }
}
</script>
<style lang="scss" scoped>
@import "@/lib/reset.scss";
#app,.contaiter {
  @include flexbox();
  @include flex-direction(column);
}
.cart {
  overflow: hidden;
}
.contaiter {
  @include flex();
  @include rect(100%, 100%);
  @include flexbox();
  @include flex-direction(column);
  .cart-content {
    margin-top:44px;
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
  position: fixed;
  top:0;
  left:0;
  @include rect(100%, 0.44rem);
  background: #fb7299;
}
.van-icon-arrow-left {
  @include font-size(20px);
  color: #fff;
}
.van-nav-bar__title {
  color:#fff;
}
</style>
