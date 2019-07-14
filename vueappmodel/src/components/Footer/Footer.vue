<template>
  <footer class="footer">
    <router-link to="/home" tag="div">
      <i class="iconfont iconshouye1"></i>
      <p>会员购</p>
    </router-link>
    <router-link to="/kind" tag="div">
      <i class="iconfont iconlihe"></i>
      <p>分类</p>
    </router-link>
    <router-link to="/cart" tag="div">
      <i class="iconfont icondianshangfuwu"></i>
      <p>购物车</p>
    </router-link>
    <router-link to="/order" tag="div">
      <i class="iconfont iconbiaoqian"></i>
      <p>订单</p>
    </router-link>
  </footer>
</template>
<style lang="scss">
@import '@/lib/reset.scss';
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  @include rect(100%, .49rem);
  @include flexbox();
  text-align: center;
  padding-top: 7px;
  border-top:1px solid #e7e7e7;
  div {
    &.router-link-active {
      @include color(#fb7299);
      }
    @include flex();
    i {
      font: 18px/18px "";
    }
    p {
      font-size: 12px;
    }
  }
}
</style>
