<template>
  <div class="home">
    <header class="home-header">
      <div class="home-header-cont">
        会员购
      </div>
    </header>
    <div class="wrapper">
      <nav class="home-nav">
        <div class="home-nav-box" v-for="(tabs, index) of nav" :key="index" >
          <div class="home-nav-img">
            <img :src="tabs.imageUrl">
          </div>
          <p>{{tabs.name}}</p>
        </div>
        <!-- <div class="home-nav-box" >
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
        </div> -->
      </nav>
      <div class="home-content">
        <div class="home-content-goods" :v-if="list.templateId === '4'" v-for="(list, index) of feeds" :key="index">
          <div class="goods-img">
            <div class="goods-img-box">
              <img :src="list.imageUrls"/>
            </div>
          </div>
          <div class="home-content-info">
            <div class="info-desc">
              <p class="desc">{{list.title}}</p>
              <p class="brief">{{list.brief}}</p>
            </div>
            <p class="price">
              <span class="symbol">￥</span>
              <span class="number" v-for="(pre, idx) of list.priceDesc" :key="idx">{{pre}}</span>
            </p>
            <p class="like">{{list.like}}人想要</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      nav: '', // 头部导航数据
      feeds: '' // 列表数据
    }
  },
  mounted () {
    fetch('/api/data/datalist')
      .then(res => res.json()).then(data => {
        this.nav = data[0].data.vo.tabs
        this.feeds = data[0].data.vo.feeds.list
        console.log(data[0].data.vo)
        console.log(data[0].data.vo.feeds.list)
        console.log(this.nav)
      })
  }
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';
  .home-header {
    width: 100%;
    position: fixed;
    z-index: 1000;
    @include background-color(#fb7299);
    .home-header-cont {
      height: 44px;
      font: 16px/44px "";
      text-align: center;
      color: #fff;
    }
  }
  .wrapper {
    position: relative;
    @include rect(100%, 100%);
    padding-top: 44px;
    @include overflow(auto);
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
          @include rect(.72rem, .72rem);
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
      @include rect(100%, 100%);
      @include padding(0 .12rem);
      .home-content-goods {
        @include flexbox();
        @include rect(100%, 1.52rem);
        margin-bottom: 12px;
        border-radius: 8px;
        @include background-color(#fff);
        box-shadow: 0 1px 2px 0 rgba(0,0,0,.1);
        .goods-img {
          @include rect(1.42rem, 1.42rem);
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
        @include flex(1);
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
