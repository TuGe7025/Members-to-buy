<template>
  <div class="contaiter">
    <header class="newaval">
      <van-nav-bar
        title="今日上新"
        left-arrow
        @click-left="onClickLeft"
      />
    </header>
    <!-- <div class="date-fixed">7月18日 周四</div> -->
    <div class="content">
      <div class="content-data" v-for='(item,index) of days' :key='index'>
        <div class='content-day' >{{item.dayNO}} {{item.weekDay}}</div>
        <div class="content-info" @click='goDetail(itm.itemsId)'  v-for='(itm,ind) of item.presaleItems' :key='ind'>
          <div class="content-info-left">
            <img v-lazy="itm.img" alt="">
          </div>
          <div class="content-info-right">
            <div class="brief">
              <p class="brief-top">{{itm.name}}</p>
              <p class="brief-buttom">{{itm.brief}}</p>
            </div>
            <div class="tet" v-if='itm.preSaleTagName'>{{itm.preSaleTagName}}</div>
            <div class="buttom">
              <span class="buttom-top">￥</span>
              <span class="buttom-b">{{itm.price}}</span>
              <span class="button-r" v-if="itm.like">{{itm.like}}想要</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { NavBar } from 'vant'

Vue.use(NavBar)
export default {
  data () {
    return {
      days: ''
    }
  },
  methods: {
    onClickLeft () {
      this.$router.back()
    },
    goDetail (id) {
      this.$router.push({ path: '/detail/' + id })
    }
  },
  mounted () {
    fetch('api/news').then(res => res.json()).then(data => {
      let date = data[0].data.vo.days
      console.log(date)
      this.days = date
    })
  }
}
</script>
<style lang="scss" scoped>
@import "@/lib/reset.scss";
header {
  height: 0.44rem;
}
.van-hairline--bottom {
  @include rect(100%, 0.44rem);
  @include background-color(#fb7299);
  .van-nav-bar__left {
    .van-icon-arrow-left {
      color:#fff;
    }
  }
  .van-ellipsis {
    color:#fff;
  }
}
.date-fixed {
  box-sizing: border-box;
  width: 100%;
  height: 0.2rem;
  padding-left: 12px;
  background-color: #f4f4f4;
  font-size: 12px;
  color: #999;
  line-height: 0.2rem;
  position: fixed;
  z-index: 1;
}
.contaiter {
  @include rect(100%, 100%);
}
.content {
    @include rect(100%, 100%);
    overflow: auto;
  .content-data {
    .content-day {
      box-sizing: border-box;
      width: 100%;
      height: 0.2rem;
      padding-left: 12px;
      background-color: #f4f4f4;
      font-size: 12px;
      color: #999;
      line-height: 0.2rem;
    }
    .content-info {
      display: flex;
      @include rect(100%, 1.37rem);
      background-color: #fff;
      .content-info-left {
        @include rect(1.16rem, 1.27rem);
        margin: 0.1rem 0 0 0.12rem;
        img {
          @include rect(1.16rem, 1.16rem);
        }
      }
      .content-info-right {
        flex: 1;
        display: flex;
        flex-direction: column;
        .brief {
          margin: 0 0.12rem 0.15rem 0.1rem;
          padding-top: 0.18rem;
          .brief-top {
            font-weight: 700;
            font-size: 14px;
            line-height: 0.18rem;
            overflow: hidden;
            text-overflow: ellipsis;
            display:-webkit-box;
            -webkit-box-orient:vertical;
            -webkit-line-clamp: 2;
          }
          .brief-buttom {
            overflow: hidden;
            height: 0.12rem;
            margin-top: 0.04rem;
            text-overflow: ellipsis;
            font-size: 12px;
            color: #999;
            line-height: 0.12rem;
          }
        }
        .tet {
          width: 0.28rem;
          height: 0.16rem;
          border: 1px solid pink;
          font-size: 12px;
          font-weight: 200;
        }
        .buttom {
          .buttom-top, .buttom-b {
            color: #fb7299;
          }
          .button-r {
            font-size: 12px;
            font-weight: 200;
            margin-left:1rem;
            color: #999;
          }
        }
      }
    }
  }
}
</style>
