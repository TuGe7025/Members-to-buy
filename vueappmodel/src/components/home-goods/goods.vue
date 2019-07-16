<template>
<div class="box">
  <div v-for="(list, index) of feeds" :key="index">
    <div v-if="list.templateId === 4">
      <div class="home-content-goods">
        <div class="goods-img">
          <div class="goods-img-box">
            <img :src="list.imageUrls" :alt="list.title"/>
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
          <p class="like">{{list.like}}人想要</p>
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
              <img :src="list.imageUrls" />
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
              <img :src="list.imageUrls" />
            </div>
          </div>
          <p class="expo-main-name">{{list.title}}</p>
          <p class="expo-main-info">{{list.summary}}</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  props: {
    feeds: {
      type: Array
    }
  },
  mounted () {

  }
}
</script>
<style lang="scss">
@import '@/lib/reset.scss';
.box {
  @include rect(100%, 100%);
}
</style>
