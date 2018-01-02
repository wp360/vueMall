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