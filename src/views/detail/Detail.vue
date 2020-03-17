<template>
  <div id="detail">
    <detail-nav-bar class="nav-bar"></detail-nav-bar>
    <scroll class="content">
      <detail-swiper :topImages="topImages"/>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"/>
    </scroll>
  </div>
</template>

<script>
  import DetailNavBar from "./childComponents/DetailNavBar";
  import DetailSwiper from "./childComponents/DetailSwiper";
  import DetailBaseInfo from "./childComponents/DetailBaseInfo";
  import DetailShopInfo from "./childComponents/DetailShopInfo";
  import Scroll from "components/common/scroll/Scroll";

  import {getGoodsDetail, Goods, Shop} from "network/detail";

  export default {
    name: "detail",
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      Scroll
    },
    data(){
      return{
        iid:null,
        topImages:[],
        goods:{},
        shop:{}
      }
    },
    created() {
      this.iid = this.$route.params.iid

      getGoodsDetail(this.iid).then(res=>{
        console.log(res)

        const data=res.result
        //轮播图数据
        this.topImages=data.itemInfo.topImages

        //获取商品信息
        this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services)

        // 2.4.获取店铺信息
        this.shop = new Shop(data.shopInfo)
      })
    }
  }
</script>

<style scoped>
  #detail{
    height: 100vh;
    position: relative;

    background-color: white;
    z-index: 1;
  }

  .nav-bar{
    position: relative;
    background-color: white;
    z-index: 9;
  }

  .content{
    /*position: absolute;*/
    /*top: 44px;*/
    /*bottom: 58px;*/
    /*right: 0px;*/
    /*left: 0px;*/

    /*overflow: hidden;*/
    height: calc(100% - 44px);
  }


</style>
