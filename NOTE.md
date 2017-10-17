## 路由
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