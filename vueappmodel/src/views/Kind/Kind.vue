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
          <van-sidebar v-model="activeKey" @click="chang(activKey)">
            <van-sidebar-item :title="item.typeName" v-for="(item,index) of vo" :key="index" />
          </van-sidebar>
        </nav>
        <div class="kind-content">
          <div class="category-part" v-for="(item,index) of vo" :key="index">
            <h5 class="category-title">{{item.typeName}}</h5>
            <ul class="category-ul">
              <li class="category-item" v-for="(ite,ind) of item.categoryLogicVOList" :key="ind">
                <img  :alt='ite.name' v-lazy='ite.img' />
                <p class="desc">{{ite.name}}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { Search, Icon, Sidebar, SidebarItem, Lazyload} from 'vant'

Vue.use(Search)
Vue.use(Icon)
Vue.use(Sidebar)
Vue.use(SidebarItem)
Vue.use(Lazyload)
export default {
  data () {
    return {
      value: '',
      activeKey: 0,
      vo: '',
      // img: []
    }
  },
  methods: {
    back () {
      this.$router.back()
    },
    scrollFn () {
      console.log(event.target.scrollTop)
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
      //   let arr = []
      //   let arry = []
      //   a.map((item,index) => {
      //     arr.push(item.categoryLogicVOList)
      //   })
      //   let b = arry.concat(...arr)
      //   b.map((item,index) => {
      //     this.img = item.img
      //   })
      })
    const content = document.querySelector('.kind-content')
    // 开启监听滚动条的滚动事件
    content.addEventListener('scroll', this.scrollFn)
  }
}
</script>
<style lang="scss">
@import "@/lib/reset.scss";
#app,
.contaiter {
  @include flexbox();
  @include flex-direction(column);
}
.contaiter {
  @include flex();
  @include rect(100%, auto);
  @include flexbox();
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
