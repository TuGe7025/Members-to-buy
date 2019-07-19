<template>
  <div class="add-padding-top">
    <div class="goods">
      <div class="goods-list">
        <router-link tag="div" :to="{ name: 'detail', params: { id: items.data.itemsId } }" class="preload-wrapper"  v-for="(items, index) of garagelist" :key="index">
          <div class="goods-item">
            <div class="item-top">
              <div class="item-top-img">
                <div class="img-box">
                  <img v-lazy="items.data.itemsImg"/>
                </div>
              </div>
            </div>
            <div class="item-info">
              <div class="desc">
                <p class="name">
                  {{items.data.name}}
                </p>
              </div>
              <div class="tag-list">
                <div class="tag" v-if="items.data.tag == '0_7'"><span style="width: 88px;">余量预售</span></div>
                <div class="tag" v-if="items.data.tag == '0_3'"><span style="width: 88px;">预售</span></div>
                <div class="tag" v-if="items.data.recommendTag == '0_1'"><span style="width: 88px;">新品</span></div>
                <div class="tag" v-if="items.data.saleType == 4"><span style="width: 88px;">预售</span></div>
              </div>
              <div class="item-info-b">
                <div class="price">
                  <span class="bili-price">￥</span>
                  <span class="integer">{{items.data.price}}</span>
                  <span class="link" v-if="items.data.like >= 10000">
                    {{(items.data.like / 10000).toFixed(1)}}万人想要
                  </span>
                  <span class="link" v-if="items.data.like < 10000">
                    {{items.data.like}}人想要
                  </span>
                </div>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { Lazyload } from 'vant'
Vue.use(Lazyload)
export default {
  props: {
    garagelist: {
      type: Array
    }
  }
}
</script>
<style lang="scss">
.garage {
  width: 100%;
  height: 100%;
  overflow: auto;
}
</style>
