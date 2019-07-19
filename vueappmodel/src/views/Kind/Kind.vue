<template>
  <div class="contaiter">
    <div class="kind">
      <header class="kind-header">
        <van-icon name="arrow-left" size="20" color="#ffffff" @click="back" />
        <van-search
          v-model="value"
          left-icon="search"
          placeholder="请输入搜索关键词"
          background="#fb7299"
          shape="round"
        />
      </header>
      <div class="main">
        <nav class="kind-nav">
          <van-sidebar v-model="activeKey" >
            <van-sidebar-item :title="item.typeName" v-for="(item,index) of vo" :key="index" />
            <!-- {{item}} -->
          </van-sidebar>
        </nav>
        <div class="kind-content" ref="side">
          <div class="category-part" v-for="(item,index) of vo" :key="index">
            <!-- {{item}} -->
            <h5 class="category-title">{{item.typeName}}</h5>
            <ul class="category-ul">
              <router-link to="/garage" tag='li' class="category-item" v-for="(ite,ind) of item.categoryLogicVOList" :key="ind">
                <img  :alt='ite.name' v-lazy='ite.img' />
                <p class="desc">{{ite.name}}</p>
                <!-- {{activeKey}} -->
              </router-link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { Search, Icon, Sidebar, SidebarItem } from 'vant'

Vue.use(Search)
Vue.use(Icon)
Vue.use(Sidebar)
Vue.use(SidebarItem)
// Vue.use(Lazyload)
export default {
  data () {
    return {
      value: '',
      activeKey: 0,
      vo: ''
      // img: []
    }
  },
  watch: {
    activeKey (newval, oldval) {
      // const content = document.querySelector('.kind-content')
      let content = this.$refs.side
      if (newval === 0) {
        content.scrollTop = 0
      }
      if (newval === 1) {
        content.scrollTop = 425
      }
      if (newval === 2) {
        content.scrollTop = 732
      }
      if (newval === 3) {
        content.scrollTop = 927
      }
      if (newval === 4) {
        content.scrollTop = 1220
      }
      if (newval === 5) {
        content.scrollTop = 1434
      }
      if (newval === 6) {
        content.scrollTop = 2022
      }
    }
  },
  methods: {
    back () {
      this.$router.back()
    },
    scrollFn () {
      if (event.target.scrollTop > 0 & event.target.scrollTop < 425) {
        this.activeKey = 0
      }
      if (event.target.scrollTop > 425 & event.target.scrollTop < 732) {
        this.activeKey = 1
      }
      if (event.target.scrollTop > 732 & event.target.scrollTop < 927) {
        this.activeKey = 2
      }
      if (event.target.scrollTop > 927 & event.target.scrollTop < 1220) {
        this.activeKey = 3
      }
      if (event.target.scrollTop > 1220 & event.target.scrollTop < 1434) {
        this.activeKey = 4
      }
      if (event.target.scrollTop > 1434 & event.target.scrollTop < 2022) {
        this.activeKey = 5
      }
      if (event.target.scrollTop > 2025) {
        this.activeKey = 6
      }
    }
  },
  mounted () {
    fetch('api/kinddata')
      .then(res => res.json())
      .then(data => {
        // let a = data[0].data.vo
        this.vo = data[0].data.vo
        // console.log(data[0].data)
      })
    const content = document.querySelector('.kind-content')
    content.addEventListener('scroll', this.scrollFn)
  }
}
</script>
<style lang="scss" scoped>
@import "@/lib/reset.scss";
#app,
.contaiter {
  @include flexbox();
  @include flex-direction(column);
}
.van-sidebar-item__text,.van-hairline {
  color:#999;
}
.contaiter {
  @include flex();
  overflow: hidden;
  @include flexbox();
  @include rect(100%, 100%);
  @include flex-direction(column);
  .kind {
    @include flex();
    @include flexbox();
    @include flex-direction(column);
    @include rect(100%, 100%);
    .kind-header {
      @include flexbox();
      @include padding(0 0.12rem 0 0.46rem);
      opacity: 1;
      @include rect(100%, 0.44rem);
      position: relative;
      @include background-color(#fb7299);
      .van-icon-arrow-left {
        position: absolute;
        background-size: 100%;
        top: 0.11rem;
        left: 0.12rem;
        width: 0.22rem;
        height: 0.22rem;
      }
      .van-search {
        @include flex();
      }
    }
    .main {
      @include flexbox();
      @include flex();
      @include rect(100%, auto);
      .kind-content {
        @include rect(100%, 100%);
        overflow: auto;
        @include background-color(#ffffff);
        .category-part {
          @include rect(100%, auto);
          overflow: auto;
          @include padding(0 0.12rem 0.2rem);
          .category-title {
            font-size: 14px;
            line-height: 0.12rem;
            padding: 0.18rem 0;
            font-weight: 400;
          }
          .category-ul {
            .category-item {
              @include rect(33.3%, auto);
              margin-bottom: 8%;
              float: left;
              img {
                @include rect(95%, 0.78rem);
                display: block;
                margin: 0 auto;
              }
              .desc {
                margin: 0.06rem 0;
                text-align: center;
                font-size: 12px;
                line-height: 0.14rem;
                height: 0.14rem;
                color: #999;
              }
            }
          }
        }
      }
    }
  }
  .van-search__content--round {
    background: #ffffff;
  }
}
</style>
