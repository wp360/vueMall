<template>
  <div>
     {{ msg }}
     <span>{{ $route.query.goodsId }}</span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '这是购物车页面'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
