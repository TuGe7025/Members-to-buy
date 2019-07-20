<template>
  <div id="app">
    <router-view/>
    <router-view name="footer"></router-view>
  </div>
</template>
<script>
export default {
  mounted () {
    window.addEventListener('beforeunload', () => {
      localStorage.setItem('messageStore', JSON.stringify(this.$store.state))
    })
    localStorage.getItem('messageStore') && this.$store.replaceState(Object.assign(this.$store.state, JSON.parse(localStorage.getItem('messageStore'))))
  }
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';
html, body, #app {
  @include rect(100%, 100%);
}
body {
  color: #212121;
  @include background-color(#f4f4f4);
}
.home {
  @include rect(100%, 100%);
}
</style>
