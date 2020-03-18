<template>
  <div id="detail">
    <detail-nav-bar class="nav-bar"></detail-nav-bar>
    <scroll class="content">
      <detail-swiper :topImages="topImages"/>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detailInfo="detailInfo"/>
      <detail-param-info :paramInfo="paramInfo"/>
      <detail-common-info :commentInfo="commentInfo"/>
      <detail-recommon-info :recommendList="recommendList"/>
    </scroll>
    <detail-bottom-bar class="detail-bottom-bar"/>
  </div>
</template>

<script>
  import DetailNavBar from "./childComponents/DetailNavBar";
  import DetailSwiper from "./childComponents/DetailSwiper";
  import DetailBaseInfo from "./childComponents/DetailBaseInfo";
  import DetailShopInfo from "./childComponents/DetailShopInfo";
  import Scroll from "components/common/scroll/Scroll";
  import DetailGoodsInfo from "./childComponents/DetailGoodsInfo";
  import DetailParamInfo from "./childComponents/DetailParamInfo";
  import DetailCommonInfo from "./childComponents/DetailCommonInfo";
  import DetailRecommonInfo from "./childComponents/DetailRecommonInfo";
  import DetailBottomBar from "./childComponents/DetailBottomBar";

  import {getGoodsDetail, Goods, Shop,GoodsParam,getRecommend} from "network/detail";

  export default {
    name: "detail",
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      Scroll,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommonInfo,
      DetailRecommonInfo,
      DetailBottomBar
    },
    data(){
      return{
        iid:null,
        topImages:[],
        goods:{},
        shop:{},
        detailInfo:{},
        paramInfo:{},
        commentInfo:{},
        recommendList:[]
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

        // 2.5.获取商品信息
        this.detailInfo = data.detailInfo

        // 2.6.保存参数信息
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule);

        // 2.7.保存评论信息
        if (data.rate.list) {
          this.commentInfo = data.rate.list[0];
        }

      })

      getRecommend().then((res, error) => {
        if (error) return
        this.recommendList = res.data.list
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

    /*overflow: hidden;*/
    height: calc(100% - 44px - 58px);
  }

  .detail-bottom-bar{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9;
  }


</style>
