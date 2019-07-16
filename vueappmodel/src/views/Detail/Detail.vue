<template>
  <div>
    <header>{{deta.title}}</header>
  </div>
</template>
<script>
export default {
  data () {
    return {
      deta: ''
    }
  },
  mounted () {
    const { id } = this.$route.params
    console.log(id)
    fetch('/api/data/detail?itemsId=' + id).then(res => res.json()).then(data => {
      console.log(data) // 请求成功
      this.deta = data
    })
  }
}
</script>
