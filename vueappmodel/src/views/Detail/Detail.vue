<template>
  <div class="detail" id="detail" ref="detail">
    <van-overlay
      :show="show"
      @click="show = false"
    />
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
                <van-swipe-item v-for="(items, inde) of deta.img" :key="inde"><img v-lazy="items"></van-swipe-item>

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
            <span>{{price}}</span>
            <!-- <span class="price-decimal">
              <span class="visibility-hidden">.85</span>
              <span class="doubule-size">.85</span>
            </span> -->
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
      <div class="main-title">{{deta.name}}</div>
      <div class="simple-desc"><div>{{deta.brief}}</div></div>
      <div class="simple-wrapper" style="height: 20px;">
        <div class="detail-price">
          <span class="price-type">全款</span>
          <span class="price-value">
            <span class="currency-type">￥</span>
            <span style="display: inline-block;">{{deta.price}}</span>
          </span>
        </div>
      </div>
    </div>
    <van-cell title="品牌" :label="deta.brandName" value="查看更多" :center="true" is-link to="/home" />
    <van-cell title="作品" :label="deta.ipRightName" value="查看更多" :center="true" is-link to="/home" />
    <div class="procedure-wrapper">
      <div class="procedure-header">
        <div class="panel-inner-title">预售流程</div>
        <span>详细说明</span>
      </div>
      <div class="procedure-content" v-for="(state, ind) of states" :key="ind">
        <div class="procedure-item-wrapper" v-if="ind === 0">
          <div class="procedure-item is-first procedure-active">
            <div class="time-wrapper">
              <div class="year">{{state.timeNode.year}}.</div>
              <div class="month">{{state.timeNode.day}}.{{state.timeNode.month}}</div>
            </div>
            <div class="procedure-item-line"></div>
            <div class="procedure-process">{{state.process}}</div>
          </div>
        </div>
        <div class="procedure-item-wrapper" v-if="ind === 2">
          <div class="procedure-item">
            <div class="time-wrapper">
              <div class="year">{{state.timeNode.year}}.</div>
              <div class="month">{{state.timeNode.month}}</div>
            </div>
            <div class="procedure-item-line"></div>
            <div class="procedure-process">{{state.process}}</div>
          </div>
        </div>
        <div class="procedure-item-wrapper" style="height:12px;" v-if="ind === 3">
          <div class="procedure-item">
            <div class="time-wrapper">
              <div class="year">{{state.timeNode.year === null ? "":state.timeNode.year}}</div>
              <div class="month">{{state.timeNode.month === null ? "时间待定" : state.timeNode.month}}</div>
            </div>
            <div class="procedure-item-line" style="height: 6px;"></div>
            <div class="procedure-process">{{state.process}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="ensure-img-wrapper">
      <img src="//s1.hdslb.com/bfs/static/mall-c/static/img/inform.bea9019.png" class="ensure-img" />
    </div>
    <div class="comments-wrapper no-tags to-hash">
      <div class="panel-inner-title">讨论区 {{totalCount}}</div>
      <div class="all-comment-button">全部讨论</div>
      <ul class="comments comments-item">
        <li class="comment" v-for="(cont, index) of ugcList" :key="index">
          <div class="flex-wrapper">
            <div class="comment-infor">
              <div class="user-info">
                <i class="user-avatar"><img v-lazy="cont.userInfo.avatar" ></i>
                <span class="user-name">{{cont.userInfo.name}}</span>
              </div>
              <div class="comment-content">{{cont.content}}</div>
            </div>
          </div>
        </li>
        <li class="all-comment">
          <div class="all-text">全部评论</div>
          <div class="all-count">{{totalCount}}条</div>
        </li>
      </ul>
    </div>
    <div class="shop-wrapper">
      <div class="shop-logo is-self"></div>
      <div class="shop-content">
        <div class="shop-name">会员购</div>
        <div class="shop-count">在售商品2725件</div>
      </div>
      <div class="follow-button"><b>+</b>关注</div>
    </div>
    <div class="to-hash">
      <div class="partner-detail">
        <div class="panel-inner-title">商品详情</div>
        <div class="fee-desc">
          <span>运费说明：</span>
          <span>不满足包邮条件的订单，江浙沪地区10元运费，其他地区15元。可配送区域为中国大陆地区(除特殊偏远地区)，收件地址在此之外的区域请勿下单。</span>
        </div>
          <van-collapse v-model="activeNames">
            <van-collapse-item title="商品参数" name="1">
              <div class="form-item" v-for="(attr, inde) of deta.attrList" :key="inde">
                <div class="form-item-label">{{attr.attrName}}</div>
                <div class="form-item-content">{{attr.attrValue}}</div>
              </div>
            </van-collapse-item>
          </van-collapse>
        </div>
        <div class="img-detail ql-editor" style="width: 100%;">
          <div class="desc-wrapper">
            <img v-for="(Desc, id) of deta.mobileDesc" :key="id" v-lazy="Desc">
          </div>
        </div>
    </div>
    <div class="mar-top">
      <div class="partner-package">
        <div class="panel-inner-title">包装介绍</div>
        <img class="package-item-url" src="//s1.hdslb.com/bfs/static/mall-c/static/img/1.4dde174.png">
        <img class="package-item-url" src="//s1.hdslb.com/bfs/static/mall-c/static/img/2.ce05a2c.png">
        <img class="package-item-url" src="//s1.hdslb.com/bfs/static/mall-c/static/img/3.8a69f1b.png">
        <div class="package-tips">注意：部分异形或者大件商品除外。</div>
      </div>
    </div>
    <div class="mar-top">
      <div class="partner-notes">
        <div class="panel-inner-title">购买须知</div>
        <div class="note">
          <h2>关于签收货：</h2>
          <div>
            1、在签收快件时，请本人亲自在不拆封商品包装的情况下，在快递前当面验货，确认无误后再签收。
            <br />
            2、商品的退换请参考商品售后条款。
          </div>
        </div>
        <div class="note">
          <h2>关于配送：</h2>
          <div>
            1、所有预售商品，如有邮费，需在补款时一并支付。
            <br />
            2、商品的可配送区域为中国大陆地区（除特殊偏远地区）。
            <br />
            3、平台统一采用高规格包装和配送，最大程度保护商品在配送过程中的安全。
            <br />
            4、为确保包裹配送成功，会员购会根据发货地和收件地址匹配合适的物流公司，合作物流可能为顺丰、申通、中通、EMS、邮政等。
            <br />
            5、江浙沪地区10元运费，其他地区15元。可配送区域为中国大陆地区（除特殊偏远地区)，收件地址在此之外的区域请勿下单。
          </div>
        </div>
      </div>
    </div>
    <div class="bottom bottom-typeundefined">
      <div>
        <div class="bottom-help">
          <div id="zhiCustomBtn" class="bottom-help-icon zhiCustomBtn"></div>
        </div>
        <router-link to="/cart" tag="div" class="bottom-cart">
          <div class="bottom-cart-icon"></div>
        </router-link>
        <div class="bottom-buy bottom-single">
          <div class="bottom-buy-button" @click="buy" >支付定金</div>
        </div>
      </div>
    </div>
    <div class="backTop" v-show="flag" @click="backTop">
        <van-icon size="30px" name="upgrade" color="red" />
    </div>
    <div class="sku" v-show='show'>
      <div class="popup-close" @click='shop'>
        <van-icon name="cross" />
      </div>
      <div class="popup-img">
        <img src='' alt="">
      </div>
      <div class="info">
        <div class="info-i">
          <span class="i-top">￥</span>
          <span class="i-buttom"></span>
        </div>
      </div>
      <div  class="spec-container">
        <h4 >规格</h4>
        <div class="spec">figure</div>
      </div>
      <div class="spec-container-info">
        <h4>数量确认</h4>
        <div class="spec-num">
          <span class="qian spec-num-info">-</span>
          <span class="num">1</span>
          <span class="add spec-num-info">+</span>
        </div>
      </div>
      <div  class="button-container">
        <div class="button">加入购物车</div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'Vue'
import { Tab, Tabs, Icon, NavBar, Swipe, SwipeItem, ImagePreview, CountDown, Cell, CellGroup, Collapse, CollapseItem, Overlay } from 'vant'
import Header from '@/components/Header/Header.vue'
// import Sku from '@/components/sku/sku.vue'
Vue.use(Collapse).use(CollapseItem)
Vue.use(Cell).use(CellGroup)
Vue.use(CountDown)
Vue.use(Tab).use(Tabs).use(Icon)
Vue.use(NavBar)
Vue.use(Swipe).use(SwipeItem)
Vue.use(ImagePreview)
Vue.use(Overlay)
// Vue.use(Sku)
export default {
  data () {
    return {
      activeNames: ['1'],
      deta: [],
      totalCount: '',
      states: [],
      ugcList: [],
      price: '',
      index: '',
      name: '',
      solTop: '' * 1,
      active1: true,
      active2: false,
      active3: false,
      current: 0,
      time: 6 * 60 * 60 * 1000,
      flag: false,
      show: false
    }
  },
  components: {
    Header
  },
  mounted () {
    const { id } = this.$route.params
    fetch('/api/detail/items?itemsId=' + id).then(res => res.json()).then(data => {
      this.deta = data
      this.index = data.img.length
      this.name = data.name
      this.price = data.advState.deposit
      this.states = data.advState.state
      this.totalCount = data.ugcListVO.totalCount
      this.ugcList = data.ugcListVO.ugcList
    })
    this.$refs.detail.addEventListener('scroll', this.scrollToTop)
  },
  methods: {
    buy () {
      this.show = true
    },
    shop () {
      this.show = false
    },
    onChange (index) {
      this.current = index
    },
    backTop () {
      this.$refs.detail.scrollTop = 0
    },
    scrollToTop () {
      this.solTop = this.$refs.detail.scrollTop
      // console.log(this.solTop)
      if (this.solTop < 800) {
        this.active1 = true
        this.active2 = false
        this.active3 = false
      } else if (this.solTop >= 800 && this.solTop < 1000) {
        this.active1 = false
        this.active2 = true
        this.active3 = false
      } else if (this.solTop >= 1000) {
        this.active1 = false
        this.active2 = false
        this.active3 = true
      }
      if (this.solTop > 500) {
        // 显示回到顶部图标
        this.flag = true
      } else {
        // 隐藏回到顶部图标
        this.flag = false
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
      this.$refs.detail.scrollTop = 800
    },
    DetascrollTop () {
      this.$refs.detail.scrollTop = 1000
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

.shop-wrapper {
  @include flexbox();
  position: relative;
  padding: 0 12px;
  margin-top: 10px;
  height: 60px;
  background: #fff;
  .has-followed {
    border: 0;
    background-color: rgba(255,86,135, .1);
    position: absolute;
    top: 14px;
    right: 12px;
    width: 80px;
    height: 32px;
    border: 1px solid #fb7299;
    border-radius: 32px;
    box-sizing: border-box;
    text-align: center;
    font: 16px/28px "";
    color: #fb7299;
  }
  .follow-button {
    position: absolute;
    top: 14px;
    right: 12px;
    width: 80px;
    height: 32px;
    background-color: #fff;
    border: 1px solid #fb7299;
    border-radius: 32px;
    box-sizing: border-box;
    text-align: center;
    font: 16px/28px "";
    color: #fb7299;
  }
  .shop-content {
    margin-left: 10px;
    margin-right: 90px;
    overflow: hidden;
    white-space: nowrap;
    .shop-name {
      margin-top: 13px;
      font-size: 12px;
      overflow: hidden;
      text-overflow: ellipsis;
      color: #212121;
      letter-spacing: .4px;
    }
    .shop-count {
      margin-top: 3px;
      font-size: 12px;
      overflow: hidden;
      text-overflow: ellipsis;
      color: #999;
      letter-spacing: .4px;
    }
  }
  .is-self {
    background-image: url(//s1.hdslb.com/bfs/static/mall-c/static/img/detail-selfshop.a86239e.png);
  }
  .shop-logo {
    @include flex(none);
    margin-top: 13px;
    height: 35px;
    width: 35px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
    box-sizing: border-box;
    border-radius: 100px;
  }
}
.comments-wrapper {
  position: relative;
  margin-top: 10px;
  background: #fff;
  box-sizing: border-box;
  .all-comment {
    display: inline-block;
    height: 120px;
    width: 120px;
    background: url(//s1.hdslb.com/bfs/static/mall-c/static/img/all-comments.2f35f82.png) no-repeat;
    background-size: 100% 100%;
    vertical-align: top;
    .all-text {
      margin: 44px auto 0;
      box-sizing: border-box;
      width: 58px;
      padding-bottom: 7.5px;
      border-bottom: 1px solid #979797;
      color: #999;
      letter-spacing: 0;
      text-align: center;
      font: 14px/14px "";
    }
    .all-count {
      margin-top: 5.5px;
      font: 12px/12px "";
      color: #999;
      letter-spacing: 0;
      text-align: center;
    }
  }
  .comment-content {
    display: -webkit-box;
    margin-top: 10px;
    font: 12px/18px "";
    color: #212121;
    white-space: normal;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    word-break: break-all;
    overflow: hidden;
    @include ellipsis(100%, 3);
  }
  .user-avatar, .user-name {
    display:inline-block;
    font: 13px/24px "";
    color: #757575;
    vertical-align: top;
    margin-left: 4px;
  }
  .user-avatar {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    overflow: hidden;
  }
  .user-info {
    font-size: 0;
    white-space: nowrap;
  }
  .comment-infor {
    @include flex();
    padding: 10px;
  }
  .flex-wrapper {
    @include flexbox();
  }
  .comment {
    display: inline-block;
    height: 120px;
    width: 280px;
    margin-right: 10px;
    box-shadow: 0 0 5px 0 rgba(0,0,0,.2);
    border-radius: 7px;
    background: #fff;
    vertical-align: top;
  }
  .comments-item {
    margin-top: -2px;
  }
  .comments {
    padding: 6px 12px 12px;
    overflow: auto;
    overflow-y: hidden;
    white-space: nowrap;
    font-size: 0;
    @include transform(translateZ(0));
  }
  .all-comment-button {
    position: absolute;
    right: 12px;
    top: 16px;
    font: 12px/12px "";
    color: #fb7299;
    letter-spacing: 0;
  }
  .panel-inner-title {
    position: relative;
    padding: 16px 0 12px 12px!important;
    font: 700 14px/14px "";
    color: #212121;
  }
  .panel-inner-title:before {
    position: absolute;
    left: 0;
    top: 16px;
    display: block;
    width: 4px;
    height: 14px;
    content: "";
    background: #fb7299;
    border-radius:0 2px 2px 0;
  }
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
.to-hash {
  position: relative;
  margin-top: 10px;
  background-color: #fff;
  .fee-desc {
    position: relative;
    margin: 0 12px 16px;
    padding: 6px 10px;
    span {
      font: 12px/18px "";
      color: #999;
    }
  }
  .fee-desc:before {
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    content: "";
    height: 200%;
    width: 200%;
    border: 1px solid #e7e7e7;
    border-radius: 8px;
    -webkit-transform: scale(.5);
    transform: scale(.5);
    -webkit-transform-origin: left top;
    transform-origin: left top;
  }
  .ql-editor {
    box-sizing: border-box;
    line-height: 1.42;
    outline: none;
    overflow-y: auto;
    tab-size: 4;
    -moz-tab-size: 4;
    text-align: left;
    white-space: pre-wrap;
    word-wrap: break-word;
    padding-bottom: 12px;
    padding-top: 12px;
  }
  .img-detail * {
    max-width: 100%;
    vertical-align: top;
  }
  .ql-editor > * {
    cursor: text;
  }
}
.panel-inner-title {
  position: relative;
  padding: 16px 0 12px 12px!important;
  color: #212121;
  font: 700 14px/14px "";
}
.panel-inner-title:before {
  position: absolute;
  left: 0;
  top: 16px;
  display: block;
  width: 4px;
  height: 14px;
  content: "";
  background: #fb7299;
  border-radius: 0 2px 2px 0;
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
.form-item {
  margin: 0 12px;
  position: relative;
  @include flexbox();
  font: 12px/28px "";
  color: #212121;
  background: #f9f9f9;
  border-top: 1px solid #fff;
  border-radius: 1px;
  .form-item-label {
    width: 80px;
    letter-spacing: 0;
    box-sizing: border-box;
    border-right: 1px solid #fff;
    text-overflow: ellipsis;
  }
  .form-item-content, .form-item-label {
    padding-left: 12px;
    white-space: nowrap;
    overflow: hidden;
  }
}
.mar-top {
  margin-top: 12px;
  padding-top:0px;
  position: relative;
  background-color: #fff;
  .partner-package {
    padding: 0 12px 10px;
    position: relative;
    font-size: 12px;
    color: #757575;
    letter-spacing: 0;
    line-height: 20px;
    .panel-inner-title {
      margin-left: -12px;
    }
    .package-item-url {
      display: block;
      width: 100%;
      margin-top: 10px;
    }
    .package-tips {
      margin-top: 10px;
      font: 12px/20px "";
      color: #757575;
      letter-spacing: 0;
    }
  }
}
.partner-notes {
  font-size: 12px;
  color: #757575;
  letter-spacing: .5px;
  position: relative;
  .note {
    padding:0 20px;
    font: 12px/20px "";
    color: #757575;
    letter-spacing: 0;
    h2 {
      font: 12px/12px "";
      color: #212121;
      letter-spacing: 0;
      margin:0 0 10px;
      position: relative;
    }
  }
  .note:nth-of-type(2) {
    margin-top: 4px;
  }
}
.bottom {
    position: fixed;
    padding-bottom: 12px;
    bottom: 0;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 -1px 0 0 rgba(0,0,0,.08);
    z-index: 100;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
}
.bottom>div {
  @include flexbox();
  height: 50px;
}
.bottom-cart, .bottom-help {
  position: relative;
  width: 54px;
}
.bottom-add, .bottom-buy {
  @include flex();
}
.bottom-buy {
  padding: 10px 12px 0 6px;
}
.bottom-single {
  padding-left: 18px;
}
.bottom-help-icon {
  left: 20px;
  background: url(//s1.hdslb.com/bfs/static/mall-c/static/img/icon-help.1b14df6.svg) no-repeat;
  background-size: 100%;
}
.bottom-cart-icon {
  left: 12px;
  background: url(//s1.hdslb.com/bfs/static/mall-c/static/img/icon-cart.3e1c645.svg) no-repeat;
  background-size: 100%;
}
.bottom-buy-button {
  white-space: nowrap;
  background-image: -webkit-linear-gradient(326deg,#fb7299,#fb7299);
  background-image: linear-gradient(-236deg,#fb7299,#fb7299);
  box-shadow: 0 2px 4px 0 rgba(255,100,145,.7);
  border-radius: 100px;
  font-size: 14px;
  color: #fff;
  line-height: 40px;
  text-align: center;
}
.bottom-cart-icon, .bottom-help-icon {
  position: absolute;
  top: 19px;
  width: 22px;
  height: 22px;
}
.sku {
  position: fixed;
  width: 95%;
  margin-left: 0.1rem;
  height: 2.8rem;
  bottom: 0;
  z-index: 999;
  background: #fff;
  .popup-close {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background-image: -webkit-linear-gradient(top,#fff 12%,#f5f5f5);
    background-image: linear-gradient(-180deg,#fff 12%,#f5f5f5);
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.08);
    position: absolute;
    top: -20px;
    right: 10px;
    z-index: 10002;
    text-align: center;
    line-height: 40px;
    i {
      font-size: 16px;
    }
  }
  .popup-img {
    position: absolute;
    top: -31px;
    left: 12px;
    width: 100px;
    height: 100px;
    background: #fff;
    box-shadow: 0 2px 6px 0 rgba(0,0,0,.3);
    border-radius: 4px;
    z-index: 10002;
    background-size: cover;
  }
  .info {
    margin-left: 1.26rem;
    height: 0.52rem;
    margin-top:0.2rem;
  }
}
.spec-container {
  width: 95%;
  height: 0.73rem;
  margin: 0.3rem auto 0;
}
.spec-container-info {
  overflow: hidden;
  width: 95%;
  height: 0.43rem;
  padding: 6px 0;
  margin: 0 auto;
  justify-content: space-between;
  display: flex;
}
.spec-num-info {
  margin-right: 10px;
  margin-left:10px;
  color: #212121;
  letter-spacing: 0;
  line-height: 32px;
  min-width: 20px;
  text-align: center;
  width: 32px;
  height: 32px;
  display: inline-block;
  font-size: 24px;
  border:1px solid #ccc;
  border-radius: 50%;
}
.button-container {
  box-sizing: border-box;
  padding: 12px;
  width: 100%;
  height: 64px;
  background-image: linear-gradient(180deg,#e7e7e7,#e7e7e7 50%,transparent 0);
  background-size: 100% 1px;
  background-repeat: no-repeat;
  .button {
    height: 100%;
    background-color: #fb7299;
    box-shadow: 0 2px 4px 0 rgba(255,100,145,.7);
    border-radius: 36px;
    color: #fff;
    font-size: 14px;
    text-align: center;
    line-height: 40px;
  }
}
</style>
