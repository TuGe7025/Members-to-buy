<template>
  <div class="login-wrapper">
    <div class="login-box">
      <div class="login-wrapper-img"></div>
      <p class="login-wrapper-title">你还没有登录哦～</p>
      <p class="login-wrapper-title login-wrapper-info">请先登录后查看订单</p>
      <div class="login-button" @click="login">登录</div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    login () {
      this.$router.push('/login')
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      const { $store: { state: { loginSation } } } = vm
      if (loginSation === 'ok') {
        next('/order/login')
      } else {
        next()
      }
    })
  }
}
</script>
<style lang="scss">
@import "@/lib/reset.scss";
.login-wrapper {
  @include flex();
  @include flexbox();
  @include flex-direction(column);
  @include rect(100%, 100%);
  position: relative;
  .login-box {
    position: absolute;
    top: 1.5rem;
    left: 0.5rem;
    .login-wrapper-img {
      background: url(//s1.hdslb.com/bfs/static/mall-c/static/img/login.5707d77.png) no-repeat;
      @include rect(2.8rem, 1.5rem);
      background-size: 100% 100%;
    }
    .login-wrapper-title {
      padding: 0;
      margin-top: 0.23rem;
      font-size: 16px;
      color: #999;
      letter-spacing: 0;
      text-align: center;
      line-height: 0.24rem;
    }
    .login-wrapper-info {
      margin-top: 0;
    }
    .login-button {
      margin-top: 25px;
      width: 141px;
      height: 40px;
      @include rect(1.4rem, 0.4rem);
      position: absolute;
      left: 0.6rem;
      text-align: center;
      color: #fff;
      background: #fb7299;
      box-shadow: 0 1px 4px 0 rgba(255,100,145,.7);
      border-radius: 0.4rem;
      line-height: 0.4rem;
    }
  }
}
</style>
