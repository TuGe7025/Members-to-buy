<template>
  <div class="home">
    <header class="home-header">
      <div class="home-header-cont">
        会员购
      </div>
    </header>
    <div class="wrapper">
      <nav class="home-nav">会员购头部</nav>
      <div class="home-content">会员购内容</div>
    </div>
  </div>
</template>
<style lang="scss">
@import '@/lib/reset.scss';
  .home-header {
    width: 100%;
    position: fixed;
    @include background-color(#fb7299);
    .home-header-cont {
      height: 44px;
      font: 16px/44px "";
      text-align: center;
      color: #fff;
    }
  }
  .wrapper {
    @include rect(100%, 100%);
    padding-top: 44px;
  }
</style>
