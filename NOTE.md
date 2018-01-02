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

## 商品列表
```html
    <ul>
        <li>
        <div class="pic">
            <a href="#"><img src="static/1.jpg" alt=""></a>
        </div>
        <div class="main">
            <div class="name">XX</div>
            <div class="price">999</div>
            <div class="btn-area">
            <a href="javascript:;" class="btn btn--m">加入购物车</a>
            </div>
        </div>
        </li>
        <li>
        <div class="pic">
            <a href="#"><img src="static/2.jpg" alt=""></a>
        </div>
        <div class="main">
            <div class="name">XX</div>
            <div class="price">1000</div>
            <div class="btn-area">
            <a href="javascript:;" class="btn btn--m">加入购物车</a>
            </div>
        </div>
        </li>
        <li>
        <div class="pic">
            <a href="#"><img src="static/3.jpg" alt=""></a>
        </div>
        <div class="main">
            <div class="name">XX</div>
            <div class="price">500</div>
            <div class="btn-area">
            <a href="javascript:;" class="btn btn--m">加入购物车</a>
            </div>
        </div>
        </li>
        <li>
        <div class="pic">
            <a href="#"><img src="static/4.jpg" alt=""></a>
        </div>
        <div class="main">
            <div class="name">XX</div>
            <div class="price">2499</div>
            <div class="btn-area">
            <a href="javascript:;" class="btn btn--m">加入购物车</a>
            </div>
        </div>
        </li>
    </ul>
```
> li遍历替换v-for

## v-if生成对应内容
```js
// mock下添加数据type.json
{
    "status": "0",
    "msg": "",
    "result": [
        {
            "name": "名称",
            "type": "1"
        },
        {
            "name": "名称",
            "type": "2"
        },
        {
            "name": "名称",
            "type": "3"
        },
        {
            "name": "名称",
            "type": "4"
        }
    ]
}
```
```html
    <!-- 添加数据展示 -->
    <el-form ref="form" :model="form" label-width="80px">
        <el-form-item v-for="(item,index) in typeList" :key="index" :label="item.name">
            <div v-if="item.type == '1'">
                <el-input v-model="form.name"></el-input>
            </div>
            <div v-if="item.type == '2'">
                <el-select v-model="form.region" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </div>
            <div v-if="item.type == '3'">
                <el-col :span="11">
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                </el-col>
            </div>
            <div v-if="item.type == '4'">
                <el-switch v-model="form.delivery"></el-switch>
            </div>
        </el-form-item>
    </el-form>
```
```js
// 获取数据
export default {
        data () {
            return {
                form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
                },
                typeList: []
            }
        },
        components: {
            // 省略
        },
        mounted: function(){
          this.getType();
        },
        methods: {
          getType(){
            Axios.get('/type')
            .then((result)=>{
              const res = result.data;
              this.typeList = res.result;
              this.typeList.forEach(({
                    type,
                }) => {
                  return type;
                });
            })
            .catch((error)=>{
              console.log(error);
            })
          }
        }
    }
```
## 图片懒加载
### vue-lazyload
1. 安装依赖 `npm i vue-lazyload --save`
2. 导入插件 import VueLazyLoad from 'vue-lazyload' 》 main.js里

```js
// Node.js在linux下安装和环境搭建

wget : https://npm.taobao.org/mirrors/node/v6.10.3/node-v6.10.3-linux-x64.tar.gz
或者
wget : https://npm.taobao.org/mirrors/node/v6.10.3/node-v6.10.3-linux-x64.tar.xz
解压：
tar -xzvf node-v6.10.3-linux-x86.tar.gz 或者 xz -d node-v6.10.3-linux-x86.tar.xz
ls -la // 查看一下
再解压：
tar -xvf node-v6.10.3-linux-x64.tar
ls -l // 再查看一下
ln -s /node-v6.10.3-linux-x64/bin/node /usr/local/bin/node
ln -s /node-x6.10.3-linux-x64/bin/npm /usr/loacl/bin/npm
```
[https://boominy.github.io/2017/09/25/vueBattle/](https://boominy.github.io/2017/09/25/vueBattle/)

## 【MongoDB篇】
### windows32位系统 安装MongoDB
[https://www.imooc.com/article/18438](https://www.imooc.com/article/18438)
### MongoDB操作
1. 开启服务 —— `K:\MongoDB\mongodb\bin>mongod --dbpath K:\MongoDB\mongodb\data` // 前面是mongodb文件路径 后面是对应数据库路径
2. 查看数据库 先启动`mongo` > 然后，`show dbs`
3. 生成数据库 `use db_goods` (数据库名称)
4. 生成集合数据 `db.goods.insert({"productId":"10001","productName":"小米6","productPrice":"2499","productImg":"mi6.jpg"})`  // goods集合名称
5. 查询数据 `db.goods.find()`
6. 新建集合 `db.createCollection("users")`
7. 导入数据 `mongoimport -d db_goods -c users --file` (-d 数据库名称 -c 集合名称 --file 数据文件路径)
8. 使用工具导入数据

## 【Express篇】
1. 设置引擎后缀
```js
// view engine setup 模板引擎设置
app.set('views', path.join(__dirname, 'views'));
// 新增设置
app.engine('.html', ejs.__express);
//app.set('view engine', 'jade');
app.set('view engine', 'html');
```
## 基于Express开发商品列表查询接口
1. 安装Mongoose
2. 创建Model
3. 创建路由
4. 基于mongoose，实现商品列表的查询功能

## 参考源码：
[https://github.com/dick3741/ImoocMall](https://github.com/dick3741/ImoocMall)