# 知识点梳理

## 【路由篇】
1. 动态路由
```js
export default new Router({
    routes: [
        {
            path: '/goods/:goodsId',
            name: 'GoodsList',
            component: GoodsList
        }
    ]
})
```
```html
展示信息：
<span>{{$route.params.goodsId}}</span>
```
#### 注：
mode参数设置

默认：
    mode: 'hash', // 会有#
    mode: 'history', //没有#

2. 嵌套路由
```js
  routes: [
    {
      path: '/goods',
      name: 'GoodsList',
      component: GoodsList,
      children: [
        {
          path: 'title',
          name: 'title',
          component: Title
        },
        {
          path: 'img',
          name: 'img',
          component: Image
        }
      ]
    }
```
```html
展示信息：
    <router-link to="/goods/title">显示商品标题</router-link>
    <router-link to="/goods/img">显示商品图片</router-link>
    <div>
        <router-view></router-view>
    </div>
```
3. 编程式路由
```js
//this.$router.push("/cart");
//this.$router.push({path: '/cart'});
//this.$router.push({path: '/cart?goodsId=123'});
this.$router.go(-1);
```
4. 命名路由和命名视图
<router-link :to="{name:'cart'，params: {cardId: 123}}">购物车页面</router-link>
```html
App.vue >>>
    ...省略
    <router-view/>
    <router-view name="title"></router-view>
    <router-view name="img"></router-view>
```
```js
router/index.js >>>
  ...省略
  routes: [
    {
      path: '/goods',
      name: 'GoodsList',
      //component: GoodsList,
      components: {
          default:  GoodsList,
          title: Title,
          img: Image
      }
```
> 命名视图很少用到，因为直接在组件模板中就会切分了。

#### 注：
路由之间的参数: params
页面之间的参数: query

## 【Vue-Resource篇】
### 说明
Vue可以构建一个完全不依赖后端服务的应用，同时也可以与服务端进行数据交互来同步界面的动态更新。

Vue通过插件的形式实现了基于AJAX，JSONP等技术的服务端通信。

vue-resource是一个通过XMLHttpRequrest或JSONP技术实现异步加载服务端数据的Vue插件

提供了一般的 HTTP请求接口和RESTful架构请求接口，并且提供了全局方法和VUe组件实例方法。

[参考链接](http://www.cnblogs.com/yuzhengbo/p/6714355.html)

[处理跨域方式](http://www.cnblogs.com/starof/p/6434745.html)
#### 首先，安装依赖 `npm install vue-resource -save`
1. Get请求

2. Post请求

3. JSONP请求

4. 全局拦截器使用

### 使用说明：
#### 首先，安装依赖 `npm install http-server -g`
vue-resource.html本地测试时，先启动服务“http-server”
http://127.0.0.1:8083/vue-resource.html 这样就可以正常运行了
#### 注：
vue-resource发送post请求报405错误或是404（json文件找不到）
可以使用wamp开启服务，在localhost下运行，不会报错。当然，需要在localhost下，新建一个post对应的json文件。
或者直接在webstorm下，浏览器打开即可。
此外，vue-resource不再推荐使用，以后都用axios。

## 【axios篇】
```js
全局拦截器
    //请求
    mounted: function () {
      axios.interceptors.request.use(function(config){
          console.log("request init");
          return config;
      })
      // 响应
      axios.interceptors.response.use(function(response){
          console.log("response init");
          return response;
      })
    },
```
#### 注：
http方法>> 当使用get时，userId之类参数由params定义而post使用data定义。