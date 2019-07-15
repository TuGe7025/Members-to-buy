<template>
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
        <!-- @search="onSearch"后面再添加事件 -->
    </header>
    <nav class="kind-nav">
      <van-sidebar v-model="activeKey">
        <van-sidebar-item title="标签名称" />
        <van-sidebar-item title="标签名称" />
        <van-sidebar-item title="标签名称" />
      </van-sidebar>
    </nav>
    <div class="kind-content">分类内容</div>
  </div>
</template>
<script>
import Vue from 'vue'
import { Search, Icon, Sidebar, SidebarItem } from 'vant'

Vue.use(Search)
Vue.use(Icon)
Vue.use(Sidebar)
Vue.use(SidebarItem)
export default {
  data () {
    return {
      value: ''
    }
  },
  methods: {
    back () {
      this.$router.back()
    }
  }
}
</script>
<style lang="scss" scope>
@import '@/lib/reset.scss';
.kind {
  .kind-header {
    @include flexbox();
    @include padding(0 0.12rem 0 0.46rem);
    opacity: 1;
    @include rect(100%,0.44rem);
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
}
</style>
