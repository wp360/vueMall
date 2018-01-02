// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading : '/static/loading-svg/loading-bars.svg'
})

//ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
/* 
// 第一种方法
// import {sum,minus} from '../demo/util'
// 第二种方法
// import * as util from '../demo/util'
*/
// 关闭生产模式下给出的提示
Vue.config.productionTip = false

/*
1.
console.log(`求和：${sum(1,6)}`);
console.log(`求差：${minus(10,5)}`);
2.
console.log(`求和：${util.sum(1,6)}`);
console.log(`求差：${util.minus(10,5)}`);
*/


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
