<template>
  <div class="garage">
    <!-- <header class="g-header">
      <div class="main-head">
        <i></i>
        <div class="title">手办</div>
        <i></i>
        <i></i>
      </div>
    </header> -->
    <van-nav-bar
        title="手办"
        left-arrow
        @click-left="onClickLeft"
      />
    <div class="main-goods">
      <div class="main-filter-bar">
        <div class="bar">
          <ul>
            <li @click="comp" :class="zh ? 'active':''">综合</li>
            <li @click="sales" :class="xl ? 'active':''">人气</li>
            <li @click="maxPrice" :class="max ? 'price active':'price'">
              <span>价格</span>
              <div class="icon-box">
                <i></i>
                <i></i>
              </div>
            </li>
            <!-- <li class="in-stock">
              <div class="area"></div>
              <div class="bar"></div>
              <div class="word">现货</div>
            </li>
            <li class="filter">
              筛选
              <i></i>
            </li> -->
          </ul>
        </div>
      </div>
      <List :garagelist="garagelist" />
    </div>
  </div>
</template>
<script>
import List from '@/components/Garage-list/list.vue'
import Vue from 'vue'
import { NavBar, Toast } from 'vant'
Vue.use(NavBar).use(Toast)
export default {
  data () {
    return {
      goodsList: [],
      garagelist: [],
      zh: false,
      xl: false,
      max: false
    }
  },
  components: {
    List
  },
  mounted () {
    fetch('/api/garage')
      .then(res => res.json()).then(data => {
        this.garagelist = data
        console.log(data)
      })
  },
  methods: {
    onClickLeft () {
      this.$router.back()
    },
    maxPrice () {
      this.zh = false
      this.xl = false
      this.max = true
      fetch('/api/garage/maxprice')
        .then(res => res.json()).then(data => {
          console.log(data)
          this.garagelist = data
        })
    },
    sales () {
      this.max = false
      this.zh = false
      this.xl = true
      fetch('/api/garage/sale')
        .then(res => res.json()).then(data => {
          this.garagelist = data
        })
    },
    comp () {
      this.max = false
      this.xl = false
      this.zh = true
      fetch('/api/garage')
        .then(res => res.json()).then(data => {
          console.log(data)
          this.garagelist = data
        })
    }
  }
}
</script>

<style lang="scss" >
@import '@/lib/reset.scss';
.main-goods {
  padding-top: .44rem;
}
.van-nav-bar {
  color:#fff;
  position: fixed;
  width: 100%;
  z-index: 1000;
  @include background-color(#fb7299);
  .van-icon-arrow-left {
    color:#fff;
  }
  .van-nav-bar__arrow {
    font-size: .22rem;
  }
}
.van-nav-bar__title {
  color:#fff;
}
.g-header {
  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;
  width: 100%;
  background-color: #fb7299;
  font-size: .16rem;
  color: #fff;
  letter-spacing: 0;
  .main-head {
    position: relative;
    overflow: hidden;
    height: .44rem;
    @include padding(0 .46rem);
    opacity: 1;
    .title {
      margin: 0 .24rem;
      height: .44rem;
      font: .16rem/.44rem "";
      color:#fff;
      text-align: center;
      letter-spacing: 0;
    }
  }
}
.main-filter-bar {
  width: 100%;
  box-shadow: 0 .02rem .06rem rgba(0,0,0,.1);
  position: sticky;
  z-index: 1;
  top: .44rem;
  ul {
    position: relative;
    @include rect(100%, .44rem);
    background-color:#fff;
    @include flexbox();
    li {
      @include flex();
      height: .44rem;
      text-align: center;
      font: .14rem/.44rem "";
      color: #999;
      &.active{
        color: #fb7299;
      }
      &.price {
        position: relative;
        span {
          display: inline-block;
          font-size: .14rem;
        }
        .icon-box {
          position: absolute;
          top: 0;
          left: 50%;
          @include rect(.19rem, .44rem);
          margin-left: .15rem;
          line-height: 0;
          vertical-align: -webkit-baseline-middle;
          vertical-align: middle;
          i {
            display: inline-block;
            @include rect(.07rem, .04rem);
            background-origin: content-box;
            background-clip: content-box;
            background-size: 100%;
          }
        }
      }
      &.in-stock {
        position: relative;
        .area {
          @include rect(.15rem, .44rem);
        }
        .bar {
          position: absolute;
          top: .1rem;
          left: .15rem;
          height: .24rem;
          border-right: .01rem solid #e7e7e7;
        }
        .word {
          position: absolute;
          top: 0;
          right: .1rem;
        }
      }
      &.filter {
        height: .24rem;
        @include padding(.1rem 0);
        line-height: .24rem;
        i {
          display:inline-block;
          @include rect(.12rem, .12rem);
          @include margin(0 0 -.01rem .02rem);
          background-size: 100%;
        }
      }
    }
  }
}
.add-padding-top {
  .goods {
    width: 100%;
    .preload-wrapper {
      margin-top: .1rem;
      .goods-item {
        position: relative;
        float: left;
        width: 45.9%;
        @include margin(0 0 .07rem 3.2%);
        border-radius: .06rem;
        background-color:#fff;
        .item-top {
          position: relative;
          .item-top-img {
            // position: absolute;
            width: 100%;
            padding-top: 100%;
            border-radius: .06rem .06rem 0 0;
            overflow: hidden;
            .img-box {
              height: 1.46rem;
              background: rgb(255, 255, 255);
              position: absolute;
              top: 0;
              left: 0;
              overflow: hidden;
              width: 100%;
              img {
                display: block;
                @include rect(100%, 100%);
              }
            }
          }
        }
        .item-info {
          position: relative;
          overflow: hidden;
          height: .94rem;
          border-radius: .06rem;
          .desc {
            position: relative;
            @include margin(.06rem .1rem 0);
            .name {
              height: .36rem;
              font: .14rem/.18rem "";
              @include ellipsis(100%, 2);
            }
          }
          .tag-list {
            overflow: hidden;
            height: .16rem;
            @include margin(.04rem .04rem 0 .01rem);
            font-size: 0;
            vertical-align: middle;
            .tag {
              margin-left: .06rem;
              width: .5rem;
              border: .01rem solid #fb7299;
              color: #fb7299;
              overflow: hidden;
              display: inline-block;
              height: .16rem;
              border-radius: .01rem;
              text-align: center;
              span {
                width:.8rem;
                display: inline-block;
                white-space: normal;
                padding-left: .08rem;
                font: .2rem/.3rem "";
                transform: scale(.5);
                transform-origin: left top;
              }
            }
          }
          .item-info-b {
            position: absolute;
            bottom: .1rem;
            left: 0;
            width: 100%;
            .price {
              display: inline-block;
              height: 18px;
              padding-left: .01rem;
              // font-size: 0;
              letter-spacing: 0;
              color: #fb7299;
              .bili-price {
                width: 100%;
                height: 100%;
                // font-size: 0;
                color: rgb(251, 114, 153);
              }
                .integer {
                  position: relative;
                font-size: 0;
                color: rgb(251, 114, 153);
                  font: .18rem/.18rem "";
                  margin-left: .02rem;
                }
              .link {
                position:absolute;
                bottom: 0;
                right: .1rem;
                font-size: .12rem;
                color:#999;
              }
            }
          }
        }
      }
    }
  }
}
</style>
