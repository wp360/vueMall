<template>
  <div id="app">
    <!--
    <img src="./assets/logo.png">
    <router-view class="main"></router-view>
    <router-view class="left" name="title"></router-view>
    <router-view class="right" name="img"></router-view>
    -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
