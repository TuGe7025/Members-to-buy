<template>
  <div id="app">
    <router-view/>
    <router-view name="footer"></router-view>
  </div>
</template>

<style lang="scss">
@import '@/lib/reset.scss';
html, body, #app {
  @include rect(100%, 100%)
}
</style>
