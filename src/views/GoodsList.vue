<template>
    <div>
        这是一个商品列表页面<br />
        <span>{{$route.params.goodsId}}</span>
        <span>{{$route.params.name}}</span>
        <router-link to="/goods/title">显示商品标题</router-link>
        <router-link to="/goods/img">显示商品图片</router-link>
        <div>
            <router-view></router-view>
        </div>
        <!--<router-link to="/cart">购物车页面</router-link>-->
        <button @click="jump">跳转到购物车页面</button>
        <router-link :to="{name:'cart'}">购物车页面</router-link>
    </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
      jump () {
          //this.$router.push("/cart");
          //this.$router.push({path: '/cart'});
          //this.$router.push({path: '/cart?goodsId=123'});
          this.$router.go(-1);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    button{
        display:block;
        margin:1% auto;
        cursor: pointer;
    }
</style>
