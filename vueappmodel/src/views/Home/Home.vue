<template>
  <div class="home">
    <header class="home-header">
      <div class="home-header-cont">
        会员购
      </div>
    </header>
    <div class="wrapper">
      <nav class="home-nav">
        <div class="home-nav-box" >
          <div class="home-nav-img">
            <img>
          </div>
          <p>手办模玩</p>
        </div>
        <div class="home-nav-box" >
          <div class="home-nav-img">
            <img>
          </div>
          <p>漫展购票</p>
        </div>
        <div class="home-nav-box" >
          <div class="home-nav-img">
            <img>
          </div>
          <p>新品上架</p>
        </div>
        <div class="home-nav-box" >
          <div class="home-nav-img">
            <img>
          </div>
          <p>商品分类</p>
        </div>
      </nav>
      <div class="home-content">
        <div class="home-content-goods">
          <div class="goods-img">
            <div class="goods-img-box">
              <img/>
            </div>
          </div>
          <div class="home-content-info">
            <div class="info-desc">
              <p class="desc">BANPRESTO（眼镜厂）Qposkettttt</p>
              <p class="brief">灭鬼小分队第二弹出售啦</p>
            </div>
            <p class="price">
              <span class="symbol">￥</span>
              <span class="number">72</span>
            </p>
            <p class="like">431人想要</p>
          </div>
        </div>
      </div>
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
    .home-nav {
      @include flexbox();
      box-sizing: border-box;
      @include margin(15px auto 20px);
      @include padding(0 20px);
      text-align: center;
      .home-nav-box {
        @include flex();
        height: 80px;
        .home-nav-img {
          @include rect(72px, 72px);
          @include margin(0 auto);
          img {
            @include display(block);
            @include rect(100%, 100%);
            @include border(none);
          }
        }
        p {
          margin-top: -6px;
          font-size: 12px;
        }
      }
    }
    .home-content {
      @include padding(0 12px);
      .home-content-goods {
        @include flexbox();
        @include rect(100%, 152px);
        margin-bottom: 12px;
        border-radius: 8px;
        @include background-color(#fff);
        box-shadow: 0 1px 2px 0 rgba(0,0,0,.1);
        @include overflow(hidden);
        .goods-img {
          @include rect(142px, 142px);
          @include margin(5px 0 0 5px);
          padding-top: 0;
          border-radius: 4px;
          .goods-img-box {
            @include overflow(hidden);
            @include rect(100%, 142px);
            @include background-color(rgb(255, 255, 255));
            img {
              @include display(block);
              @include rect(100%, 100%);
            }
          }
        }
      }
      .home-content-info {
        box-sizing: border-box;
        @include flex();
        height: 100%;
        padding-top: 13px;
        position: relative;
        .info-desc {
          @include margin(0 11px 0 8px);
          .desc {
            margin-bottom: 10px;
            font: 16px/22px "";
            @include ellipsis(100%, 2);
          }
          .brief {
            @include ellipsis();
            height: 12px;
            font: 12px/12px "";
          }
        }
        .price {
          position: absolute;
          bottom: 12px;
          left: 8px;
          height: 18px;
          font: 0px/12px "";
          letter-spacing: 0;
          color:#ff5687;
          .symbol {
            font-size: 14px;
          }
          .number {
            font-size: 18px;
          }
        }
        .like {
          position: absolute;
          bottom: 12px;
          right: 10px;
          height: 12px;
          font: 12px/12px "";
          color:#ff5687;
        }
      }
    }
  }
</style>
