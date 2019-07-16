<template>
  <div class="garage">
    <header class="g-header">
      <div class="main-head">
        <i></i>
        <div class="title">手办</div>
        <i></i>
        <i></i>
      </div>
    </header>
    <div class="main-goods">
      <div class="main-filter-bar">
        <div class="bar">
          <ul>
            <li class="active">综合</li>
            <li>销量</li>
            <li class="price">
              <span>价格</span>
              <div class="icon-box">
                <i></i>
                <i></i>
              </div>
            </li>
            <li class="in-stock">
              <div class="area"></div>
              <div class="bar"></div>
              <div class="word">现货</div>
            </li>
            <li class="filter">
              筛选
              <i></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import '@/lib/reset.scss';
.g-header {
  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;
  width: 100%;
  background-color: #fb7299;
  font-size: .16rem;
  color: #fff;
  letter-spacing: 0;
  .main-head {
    position: relative;
    overflow: hidden;
    height: .44rem;
    @include padding(0 .46rem);
    opacity: 1;
    .title {
      margin: 0 .24rem;
      height: .44rem;
      font: .16rem/.44rem "";
      color:#fff;
      text-align: center;
      letter-spacing: 0;
    }
  }
}
.main-filter-bar {
  width: 100%;
  box-shadow: 0 .02rem .06rem rgba(0,0,0,.1);
  position: fixed;
  z-index: 1;
  top: .44rem;
  left: 0;
  ul {
    position: relative;
    @include rect(100%, .44rem);
    background-color:#fff;
    @include flexbox();
    li {
      @include flex();
      height: .44rem;
      text-align: center;
      font: .14rem/.44rem "";
      color: #999;
      &.active{
        color: #fb7299;
      }
      &.price {
        position: relative;
        span {
          display: inline-block;
          font-size: .14rem;
        }
        .icon-box {
          position: absolute;
          top: 0;
          left: 50%;
          @include rect(.19rem, .44rem);
          margin-left: .15rem;
          line-height: 0;
          vertical-align: -webkit-baseline-middle;
          vertical-align: middle;
          i {
            display: inline-block;
            @include rect(.07rem, .04rem);
            background-origin: content-box;
            background-clip: content-box;
            background-size: 100%;
          }
        }
      }
      &.in-stock {
        position: relative;
        .area {
          @include rect(.15rem, .44rem);
        }
        .bar {
          position: absolute;
          top: .1rem;
          left: .15rem;
          height: .24rem;
          border-right: .01rem solid #e7e7e7;
        }
        .word {
          position: absolute;
          top: 0;
          right: .1rem;
        }
      }
      &.filter {
        height: .24rem;
        @include padding(.1rem 0);
        line-height: .24rem;
        i {
          display:inline-block;
          @include rect(.12rem, .12rem);
          @include margin(0 0 -.01rem .02rem);
          background-size: 100%;
        }
      }
    }
  }
}
</style>
