<template>
<div class="box">
  <router-link tag="div" :to = "{name: 'detail', params: {id: list.itemsId}}" v-for="(list, index) of feeds" :key="index">
    <div v-if="list.templateId === 4">
      <div class="home-content-goods">
        <div class="goods-img">
          <div class="goods-img-box">
            <img v-lazy="list.imageUrls[0]" :alt="list.title"/>
          </div>
        </div>
        <div class="home-content-info">
          <div class="info-desc">
            <p class="desc">{{list.title}}</p>
            <p class="brief">{{list.brief}}</p>
          </div>
          <p class="price">
            <span class="symbol">￥</span>
            <span class="number" v-for="(pre, idx) of list.price" :key="idx">
              <span v-if="idx === 1">{{pre}}</span></span>
          </p>
          <p class="like" v-if="list.like >= 10000">{{(list.like / 10000).toFixed(1)}}万人想要</p>
          <p class="like" v-if="list.like < 10000">{{list.like}}人想要</p>
        </div>
      </div>
    </div>
    <div v-else-if="list.templateId === 5">
      <div class="home-content-expo">
        <div class="expo-head">
          <i></i>
          <span class="expo-head-title">{{list.tagName}}</span>
        </div>
        <div class="expo-main">
          <div class="expo-main-img">
            <div class="box">
              <img v-lazy="list.imageUrls[0]" />
            </div>
          </div>
          <p class="expo-main-name">{{list.title}}</p>
          <p class="expo-main-info">{{list.provinceName}} {{list.venueName}}</p>
          <p class="expo-main-price">
            <span class="symbol">￥</span>
            <span class="number" v-for="(pre, indx) in list.price" :key="indx">
              <span v-if="indx == 0">{{pre}}</span>
            </span>
            <span class="qi">起</span>
          </p>
        </div>
      </div>
    </div>
    <div v-else-if="list.templateId === 1">
      <div class="home-content-expo">
        <div class="expo-head">
          <i></i>
          <span class="expo-head-title">{{list.tagName}}</span>
        </div>
        <div class="expo-main">
          <div class="expo-main-img">
            <div class="box">
              <img v-lazy="list.imageUrls[0]" />
            </div>
          </div>
          <p class="expo-main-name">{{list.title}}</p>
          <p class="expo-main-info">{{list.summary}}</p>
        </div>
      </div>
    </div>
  </router-link>
</div>
</template>
<script>
// import Vue from 'vue'
// import { Lazyload } from 'vant'
// // options 为可选参数，无则不传
// Vue.use(Lazyload)
export default {
  props: {
    feeds: {
      type: Array
    }
  }
}
</script>
<style lang="scss">
@import '@/lib/reset.scss';
.box {
  @include rect(100%, 100%);
}
</style>
