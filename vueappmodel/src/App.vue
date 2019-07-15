<template>
  <div id="app">
    <router-view/>
    <router-view name="footer"></router-view>
  </div>
</template>

<style lang="scss">
@import '@/lib/reset.scss';
html, body, #app {
  @include rect(100%, 100%);
}
body {
  color: #212121;
  @include background-color(#f4f4f4);
}
</style>
