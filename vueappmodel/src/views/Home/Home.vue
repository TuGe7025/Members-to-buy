<template>
  <div class="home">
    <header class="home-header">
      <div class="home-header-cont">
        会员购
      </div>
    </header>
    <div class="wrapper">
      <nav class="home-nav">
        <div class="nav-box" v-for="(tabs, index) of nav" :key="index" >
          <router-link to="/garage" tag="div" class="home-nav-box" v-if="index === 0">
            <div class="home-nav-img">
              <img :src="tabs.imageUrl">
            </div>
            <p>{{tabs.name}}</p>
          </router-link>
          <div class="home-nav-box" v-if="index === 1">
            <div class="home-nav-img">
              <img :src="tabs.imageUrl">
            </div>
            <p>{{tabs.name}}</p>
          </div>
          <div class="home-nav-box" v-if="index === 2">
            <div class="home-nav-img">
              <img :src="tabs.imageUrl">
            </div>
            <p>{{tabs.name}}</p>
          </div>
          <div class="home-nav-box" v-if="index === 3">
            <div class="home-nav-img">
              <img :src="tabs.imageUrl">
            </div>
            <p>{{tabs.name}}</p>
          </div>
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
        <Goods :feeds="feeds" />
      </div>
    </div>
  </div>
</template>
<script>
import Goods from '@/components/home-goods/goods.vue'
export default {
  data () {
    return {
      nav: '', // 头部导航数据
      feeds: [] // 列表数据
    }
  },
  components: {
    Goods
  },
  mounted () {
    fetch('/api/data/datalist')
      .then(res => res.json()).then(data => {
        this.nav = data[0].data.vo.tabs
        this.feeds = data[0].data.vo.feeds.list
        console.log(this.feeds)
      })
  }
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';
.nav-box {
  @include rect(100%, 100%);
}
  .home-header {
    width: 100%;
    position: fixed;
    z-index: 1000;
    @include background-color(#fb7299);
    .home-header-cont {
      height: .44rem;
      font: .16rem/.44rem "";
      text-align: center;
      color: #fff;
    }
  }
  .wrapper {
    padding-bottom: .3rem;
    position: relative;
    @include rect(100%, 100%);
    padding-top: .44rem;
    @include overflow(auto);
    .home-nav {
      @include flexbox();
      box-sizing: border-box;
      @include margin(.15rem auto .2rem);
      @include padding(0 .2rem);
      text-align: center;
      .home-nav-box {
        @include flex();
        width: 100%;
        height: .8rem;
        .home-nav-img {
          overflow:hidden;
          @include rect(.72rem, .72rem);
          @include margin(0 auto);
          img {
            @include display(block);
            @include rect(100%, 100%);
            @include border(none);
          }
        }
        p {
          margin-top: -.06rem;
          font-size: .12rem;
        }
      }
    }
    .home-content {
      @include rect(100%, 100%);
      @include padding(0 .12rem);
      .home-content-goods {
        @include flexbox();
        @include rect(100%, 1.52rem);
        margin-bottom: .12rem;
        border-radius: .08rem;
        @include background-color(#fff);
        box-shadow: 0 .01rem .02rem 0 rgba(0,0,0,.1);
        .goods-img {
          @include rect(1.42rem, 1.42rem);
          @include margin(.05rem 0 0 .05rem);
          padding-top: 0;
          border-radius: .04rem;
          .goods-img-box {
            @include overflow(hidden);
            @include rect(100%, 1.42rem);
            @include background-color(rgb(255, 255, 255));
            img {
              @include display(block);
              @include rect(100%, 100%);
            }
          }
        }
      }
      .home-content-expo {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        margin-bottom: .1rem;
        @include padding(0 .1rem);
        border-radius: .08rem;
        background-color: #fff;
        box-shadow: 0 .01rem .02rem 0 rgba(0,0,0,.1);
        .expo-head {
          @include rect(100%, .32rem);
          .expo-head-title {
            padding-left: .02rem;
            font: .12rem/.32rem "";
            color: #757575;
          }
          i {
            display: inline-block;
            vertical-align: middle;
            @include rect(.18rem, .18rem);
            background-size: 100%;
          }
        }
        .expo-main {
          @include padding(0 0 .15rem);
          .expo-main-img {
            position: relative;
            width: 100%;
            padding-top: 62%;
            margin-bottom: .12rem;
            border-radius: .04rem;
            overflow: hidden;
            .box {
              @include rect(100%, 1.71rem);
              @include background-color(rgb(255, 255, 255));
              position: absolute;
              top: 0;
              left: 0;
              img {
                @include display(block);
                @include rect(100%, 100%);
              }
            }
          }
          .expo-main-name {
            margin-bottom: .05rem;
            font: .16rem/.24rem "";
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .expo-main-info {
            margin-bottom: .1rem;
            font: .12rem/.17rem "";
            color: #999;
            @include ellipsis(100%, 2);
          }
          .expo-main-price {
            height: .18rem;
            color: #ff5687;
            font: 0px/.18rem;
            letter-spacing: 0;
            .symbol {
              font-size: .14rem;
            }
            .number {
              font-size: .18rem;
            }
            .qi {
              margin-left: .1rem;
              font-size: .10rem;
              color: #999;
            }
          }
        }
      }
      .home-content-info {
        box-sizing: border-box;
        @include flex(1);
        height: 100%;
        padding-top: .13rem;
        position: relative;
        .info-desc {
          @include margin(0 .11rem 0 .08rem);
          .desc {
            margin-bottom: .1rem;
            font: .16rem/.22rem "";
            @include ellipsis(100%, 2);
          }
          .brief {
            @include ellipsis();
            height: .12rem;
            font: .12rem/.12rem "";
          }
        }
        .price {
          position: absolute;
          bottom: .12rem;
          left: .08rem;
          height: 18px;
          font: 0px/.12rem "";
          letter-spacing: 0;
          color:#ff5687;
          .symbol {
            font-size: .14rem;
          }
          .number {
            font-size: .18rem;
          }
        }
        .like {
          position: absolute;
          bottom: .12rem;
          right: .1rem;
          height: .12rem;
          font: .12rem/.12rem "";
          color:#ff5687;
        }
      }
    }
  }
</style>
