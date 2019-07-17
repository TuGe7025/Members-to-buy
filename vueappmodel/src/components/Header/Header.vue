<template>
  <header ref="header" class="header">
      <ul>
        <li>
          <slot name="nav-left"></slot>
        </li>
        <li class="header-nav">
          <slot name="sop"></slot>
          <slot name="comet"></slot>
          <slot name="deta"></slot>
        </li>
        <li>
          <slot name="nav-right"></slot>
        </li>
      </ul>
    </header>
</template>
<script>
export default {
  props: {
    solTop: {
      type: Number
    }
  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';

.header {
  position:fixed;
  z-index: 98;
  opacity: 0.7;
  @include rect(100%, .44rem);
  // width: 70%;
  background-color:#fff;
  // left:15%;
  ul {
  @include rect(100%, .44rem);
  @include flexbox();
  @include justify-content(center);
  @include align-items(center);
  // @include flex-direction(column);
    li {
      @include rect(100%, .44rem);
      @include align-items(center);
      @include flexbox();
      @include flex(1);
      @include justify-content(center);
      @include align-self(center);
      &.header-nav {
        @include flexbox();
        @include justify-content(center);
        @include align-items(center);
        @include flex(3);
        span {
          position: relative;
          // @include rect(100%, .44rem);
          @include flexbox();
          @include justify-content(center);
          @include flex();
          color:#999;
          &.active {
            font: 700 14px/1 "";
            color:#000;
          }
          &.active:before {
            content: "";
            position:absolute;
            top:13px;
            width:20px;
            height:3px;
            border-radius: 4px;
            background-color:#fb7299;
          }
        }
      }
    }
  }
}

</style>
