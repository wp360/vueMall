<template>
    <div>
      <nav-header></nav-header>
      <nav-bread>
        <span>商品</span>
        <!--<span slot="goods">商品列表</span>-->
      </nav-bread>
      <div class="accessory-result-page accessory-page">
        <div class="container">
          <div class="filter-nav">
            <span class="sortby">Sort by:</span>
            <a href="javascript:void(0)" class="default cur">Default</a>
            <a href="javascript:void(0)" class="price">Price <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
            <a href="javascript:void(0)" class="filterby stopPop" @click="showFilterPop">Filter by</a>
          </div>
          <div class="accessory-result">
            <!-- filter -->
            <div class="filter stopPop" id="filter" :class="{'filterby-show':filterBy}">
              <dl class="filter-price">
                <dt>Price:</dt>
                <dd><a href="javascript:void(0)" :class="{'cur':priceChecked == 'all'}" @click="priceChecked='all'">All</a></dd>
                <dd v-for="(price,index) in priceFilter" :key="index">
                  <a href="javascript:void(0)" @click="setPriceFilter(index)" :class="{'cur':priceChecked == index}">{{price.startPrice}} - {{price.endPrice}}</a>
                </dd>
              </dl>
            </div>

            <!-- search result accessories list -->
            <div class="accessory-list-wrap">
              <div class="accessory-list col-4">
                <ul>
                  <li v-for="(item,index) in goodsList" :key="index">
                    <div class="pic">
                      <a href="#"><img v-lazy="'/static/'+item.productImg" alt="item.productName"></a>
                    </div>
                    <div class="main">
                      <div class="name">{{item.productName}}</div>
                      <div class="price">{{item.productPrice}}</div>
                      <div class="btn-area">
                        <a href="javascript:;" class="btn btn--m">加入购物车</a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="md-overlay" v-show="overLayFlag" @click="closePop"></div>
      <nav-footer></nav-footer>
    </div>
</template>
<script>
    import '@/assets/css/base.css'
    import '@/assets/css/login.css'
    import '@/assets/css/product.css'
    import NavHeader from '@/components/Header'
    import NavFooter from '@/components/Footer'
    import NavBread from '@/components/NavBread'
    import Axios from 'axios'

    export default {
        data () {
            return {
              goodsList: [],
              priceFilter: [
                {
                  startPrice: '0',
                  endPrice: '100'
                },
                {
                  startPrice: '100',
                  endPrice: '500'
                },
                {
                  startPrice: '500',
                  endPrice: '1000'
                },
                {
                  startPrice: '1000',
                  endPrice: '2000'
                }
              ],
              priceChecked: 'all',
              filterBy: false, // 价格样式
              overLayFlag: false // 遮罩
            }
        },
        components: {
            NavHeader,
            NavFooter,
            NavBread
        },
        mounted: function(){
          this.getGoodsList();
        },
        methods: {
          getGoodsList(){
            Axios.get('/goods')
            .then((result)=>{
              const res = result.data;
              this.goodsList = res.result;
            })
            .catch((error)=>{
              console.log(error);
            })
          },
          showFilterPop () {
            this.filterBy = true;
            this.overLayFlag = true
          },
          setPriceFilter (index) {
            this.priceChecked = index;
            this.closePop();
          },
          closePop () {
            this.filterBy = false;
            this.overLayFlag = false
          }
        }
    }
</script>
