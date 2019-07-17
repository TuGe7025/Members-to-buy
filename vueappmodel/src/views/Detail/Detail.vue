<template>
  <div class="detail" id="detail" ref="detail">
    <Header ref="header" :solTop="solTop">
      <span @click="onClickLeft" slot="nav-left" class="nav-left"></span>
      <span slot="sop" @click="SopscrollTop" :class="active1 ? 'active':''">商品</span>
      <span slot="comet" @click="CometscrollTop" :class="active2 ? 'active':''">讨论</span>
      <span slot="deta" @click="DetascrollTop" :class="active3 ? 'active':''">详情</span>
      <span @click="onClickRight" slot="nav-right" class="nav-right"></span>
    </Header>
    <van-nav-bar
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <i slot="right" class="iconfont iconhuiyuangoux"></i>
    </van-nav-bar>
    <div class="detail-wrapper">
      <div class="contatiner">
        <div style="transition: transform 0.5s ease 0s;">
          <div class="detail-img-wrapper">
            <div class="img-box">
              <van-swipe @change="onChange" >
                <van-swipe-item v-for="(items, inde) of deta.imageUrls" :key="inde"><img :src="items"></van-swipe-item>

                <div class="custom-indicator" slot="indicator">
                  {{ current + 1 }}/{{index}}
                </div>
              </van-swipe>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="front-money">
        <div class="price">
          <span class="price-left">
            <span class="price-label">预售定金</span>
          </span>
          <span class="price-right">
            <span class="type">￥</span>
            <span>14</span>
            <span class="price-decimal">
              <span class="visibility-hidden">.85</span>
              <span class="doubule-size">.85</span>
            </span>
          </span>
        </div>
        <div class="time">
          <div class="remain-tips">定金截止：</div>
          <div class="remain-time">
            <van-count-down
              :time="time"
              format="HH 时 mm 分 ss 秒"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="panel">
      <div class="main-title">{{deta.title}}</div>
      <div class="simple-desc"><div>{{deta.brief}}</div></div>
      <div class="simple-wrapper" style="height: 20px;">
        <div class="detail-price">
          <span class="price-type">{{name}}</span>
          <span class="price-value">
            <span class="currency-type">{{deta.priceSymbol}}</span>
            <span style="display: inline-block;" v-for="(pre, index) of deta.priceDesc" :key="index">{{pre}}</span>
          </span>
        </div>
      </div>
    </div>
    <van-cell title="品牌" label="TAITO" value="查看更多" :center="true" is-link to="/home" />
    <van-cell title="作品" :label="deta.title" value="查看更多" :center="true" is-link to="/home" />
    <div class="procedure-wrapper">
      <div class="procedure-header">
        <div class="panel-inner-title">预售流程</div>
        <span>详细说明</span>
      </div>
      <div class="procedure-content">
        <div class="procedure-item-wrapper">
          <div class="procedure-item is-first procedure-active">
            <div class="time-wrapper">
              <div class="year">2019.</div>
              <div class="month">07.03</div>
            </div>
            <div class="procedure-item-line"></div>
            <div class="procedure-process">预售开始，支付定金，完成预定</div>
          </div>
        </div>
        <div class="procedure-item-wrapper">
          <div class="procedure-item">
            <div class="time-wrapper">
              <div class="year">2019.</div>
              <div class="month">10</div>
            </div>
            <div class="procedure-item-line"></div>
            <div class="procedure-process">商品出荷，等待补款通知</div>
          </div>
        </div>
        <div class="procedure-item-wrapper" style="height:12px;">
          <div class="procedure-item">
            <div class="time-wrapper">
              <div class="year"></div>
              <div class="month">时间待定</div>
            </div>
            <div class="procedure-item-line" style="height: 6px;"></div>
            <div class="procedure-process">补款发货，填写收货地址</div>
          </div>
        </div>
      </div>
    </div>
    <div class="ensure-img-wrapper">
      <img src="//s1.hdslb.com/bfs/static/mall-c/static/img/inform.bea9019.png" class="ensure-img" />
    </div>
  </div>
</template>
<script>
import Vue from 'Vue'
import { Tab, Tabs, Icon, NavBar, Swipe, SwipeItem, ImagePreview, CountDown, Cell, CellGroup } from 'vant'
import Header from '@/components/Header/Header.vue'
Vue.use(Cell).use(CellGroup)
Vue.use(CountDown)
Vue.use(Tab).use(Tabs).use(Icon)
Vue.use(NavBar)
Vue.use(Swipe).use(SwipeItem)
Vue.use(ImagePreview)
export default {
  data () {
    return {
      deta: [],
      index: '',
      name: '',
      solTop: '' * 1,
      active1: true,
      active2: false,
      active3: false,
      current: 0,
      time: 6 * 60 * 60 * 1000
    }
  },
  components: {
    Header
  },
  mounted () {
    const { id } = this.$route.params
    fetch('/api/data/detail?itemsId=' + id).then(res => res.json()).then(data => {
      this.deta = data
      this.index = data.imageUrls.length
      this.name = data.tags.typeAndLimitTagName
    })
    this.$refs.detail.addEventListener('scroll', this.scrollToTop)
    // console.log(this.$refs.detail)
  },
  methods: {
    onChange (index) {
      this.current = index
    },
    scrollToTop () {
      this.solTop = this.$refs.detail.scrollTop
      // console.log(this.solTop)
      if (this.solTop < 200) {
        this.active1 = true
        this.active2 = false
        this.active3 = false
      } else if (this.solTop >= 200 && this.solTop < 400) {
        this.active1 = false
        this.active2 = true
        this.active3 = false
      } else if (this.solTop >= 400) {
        this.active1 = false
        this.active2 = false
        this.active3 = true
      }
    },
    onClickLeft () {
      this.$router.back()
    },
    onClickRight () {
      this.$router.push('/')
    },
    SopscrollTop () {
      this.$refs.detail.scrollTop = 0
    },
    CometscrollTop () {
      this.$refs.detail.scrollTop = 200
    },
    DetascrollTop () {
      this.$refs.detail.scrollTop = 450
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/lib/reset.scss';
img {
  display: block;
  @include rect(100%, 100%);
}
.van-swipe {
  @include rect(100%, 100%);
}
.procedure-wrapper {
  padding: 0 12px;
  background: #fff;
  position: relative;
  .procedure-header {
    padding: 4px 0 0;
    font-size: 14px;
    font-weight: 700;
    color: #212121;
    letter-spacing: 0;
    line-height: 14px;
    .panel-inner-title {
      position: relative;
      padding: 16px 0 12px 12px!important;
      font-size: 14px;
      font-weight: 700;
      color: #212121;
      line-height: 14px;
      margin-left: -12px;
      font-weight: 400;
    }
    span {
      position: absolute;
      right: 12px;
      top: 22px;
      font-size: 12px;
      font-weight: 400;
      color: #fb7299;
      letter-spacing: 0;
      line-height: 12px;
    }
  }
  .procedure-content {
    padding: 12px;
    border-radius: 2px;
    background: #fafafa;
    .procedure-item {
      position: relative;
      @include flexbox();
      font-size: 12px;
      color: #999;
      line-height: 12px;
      .time-wrapper {
        @include flexbox();
        width: 60px;
        margin-right: 32px;
        justify-content: flex-end;
        flex: none;
        white-space: nowrap;
      }
      .procedure-item-line {
        position: absolute;
        top: 7px;
        left: 76px;
        width: 1px;
        height: 100%;
        background: #d8d8d8;
      }
      .procedure-item-line:before {
        content: "";
        position: absolute;
        width: 7px;
        height: 7px;
        background: #fff;
        border: 1px solid #fb7299;
        border-radius: 100%;
        box-sizing: border-box;
        top: -3.5px;
        left: -3.5px;
      }
      .procedure-process {
        position: relative;
        display: inline-block;
        padding-bottom: 24px;
        padding-right: 16px;
      }
    }
    .procedure-active {
      font: 14px/14px "";
      color: #fb7299;
    }
  }
}
.ensure-img-wrapper {
  position: relative;
  padding-left: 13px;
  overflow: hidden;
  background: #fff;
  .ensure-img {
    margin: 16px 0;
    width: 100%;
    max-width: 326px;
  }
}
.procedure-wrapper:before {
  content: "";
  position: absolute;
  border-bottom: 1px solid #e7e7e7;
  -webkit-transform: scaleY(.5);
  transform: scaleY(.5);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  top: 0;
  left: 12px;
  right: 12px;
}
.panel {
  position: relative;
  margin:0;
  background-color: #fff;
  padding: 10px 12px 12px;
  .main-title {
    margin: 0;
    font: 16px/22px "";
    color: #212121;
    letter-spacing: .53px;
    @include ellipsis(100%, 2);
  }
  .simple-desc {
    position: relative;
    padding: 0;
    margin-top: 6px;
    font-size: 12px;
    color: #999;
    letter-spacing: 0;
    background-color: #fff;
    white-space: pre-line;
  }
  .simple-wrapper {
    position: relative;
    .detail-price {
      @include flexbox();
      width: 200%;
      position: relative;
      margin-top: 10px;
      letter-spacing: 0;
      font: 16px/40px "";
      color: #fb7299;
      height: 40px;
      box-sizing: border-box;
      -webkit-transform: scale(.5);
      transform: scale(.5);
      -webkit-transform-origin: left top;
      transform-origin: left top;
      -webkit-box-align: end;
      -webkit-align-items: flex-end;
      -ms-flex-align: end;
      align-items: flex-end;
      span {
        flex: none;
      }
      .price-value {
        margin-right: 6px;
        font: 40px/40px "";
        color: #fb7299;
        letter-spacing: 0;
        .currency-type {
          font: 24px/24px "";
          margin-right: 4px;
          position: relative;
          top: 0;
        }
      }
      .price-type {
        position: relative;
        top: -3px;
        display: inline-block;
        font: 28px/28px "";
        color: #757575;
        letter-spacing: 0;
        height: auto;
        margin-right: 8px;
      }
    }
  }
}
.custom-indicator {
  position: absolute;
  bottom: 0;
  left:0;
  right: 0;
  text-align: center;
  margin:0 auto;
  display: inline-block;
  vertical-align: top;
  height: 36px;
  width: 88px;
  border-radius: 60px;
  color: #212121;
  letter-spacing: .42px;
  font-size: 24px;
  line-height: 36px;
  background: #fff;
  -webkit-transform-origin: left top;
  transform-origin: left top;
  -webkit-transform: scale(.5) translateX(50%);
  transform: scale(.5) translateX(50%);
}
.front-money {
  @include flexbox();
  position: relative;
  height: 50px;
  .price {
    height: 100%;
    padding: 0 12px;
    background-image: linear-gradient(90deg,#ff6692,#ff80d0);
    background-image: -webkit-linear-gradient(left,#ff6692,#ff80d0);
    @include flex();
    @include flexbox();
    align-items: center;
    white-space: nowrap;
    font-size: 0;
    span {
      font-size: 20px;
      color:#fff;
      display: inline-block;
    }
    .price-right {
      height: 20px;
      font: 0/20px "";
      color:#fff;
      display: inline-block;
      letter-spacing: 0;
      .type {
        position: relative;
        bottom: 1px;
        font: 12px/12px "";
        margin-right: 2px;
      }
      .price-decimal {
        position: relative;
        .visibility-hidden {
          vertical-align: top;
          visibility: hidden;
          line-height: 12px!important;
        }
        .doubule-size {
          position:absolute;
          top: -1px;
          left: 0;
          display: block;
          font: 24px/24px "";
          -webkit-transform: scale(.5);
          transform: scale(.5);
          -webkit-transform-origin: left top;
          transform-origin: left top;
        }
      }
    }
    .price-left {
      height: 14px;
      font: 0/14px "";
      color:#fff;
      display: inline-block;
      letter-spacing: 0;
      .price-label {
        margin-right: 8px;
        font: 14px/14px "";
        display: inline-block;
      }
    }
  }
  .time {
    @include rect(140px, 100%);
    @include background-color(#fff6fc);
    @include padding(8px 0);
    box-sizing: border-box;
    .remain-tips {
      font: 12px/12px "";
      color: #fb7299;
      text-align: center;
      letter-spacing: 0;
    }
    .remain-time {
      text-align: center;
      margin-top: 6px;
      color: #fb7299;
      letter-spacing: 0;
      font: 700 16px/16px "";
      span {
        letter-spacing: 0;
        font: 400 12px/12px "";
      }
    }
  }
}
.detail-wrapper {
  .contatiner {
    @include rect(100%, 100%);
    overflow: auto;
    transform: translateZ(0);
    .detail-img-wrapper {
      @include rect(100%, 320px);
      position: relative;
      overflow: hidden;
      .img-box {
        @include rect(100%, 320px);
        position: relative;
        overflow: hidden;
      }
    }
  }

}
.detail {
  position:relative;
  @include rect(100%, 100%);
  overflow: auto;
}
.nav-left {
  display:block;
  @include rect(.44rem, .44rem);
}
.nav-right {
  display:block;
  @include rect(.44rem, .44rem);
}
.van-nav-bar {
  position:fixed;
  top:0;
  left:0;
}
.van-nav-bar__right {
  position:relative;
}
.iconhuiyuangoux {
  position: absolute;
  border-radius: 50%;
  color: #000;
  background-color: #fff;
  display: inline-block;
  width: .3rem;
  height: .3rem;
  font: .24rem/.3rem "";
  top:6px;
  right:-5px;
}
.van-nav-bar {
  @include rect(100%, .44rem);
  background-color: rgba(255, 255, 255, 0.062);
}
.van-nav-bar .van-icon {
  // font: .22rem/.30rem "";
  font-size: 28px;
  left:-5px;
  border-radius: 50%;
  background-color: #fff;
  color: #000;
}
</style>
