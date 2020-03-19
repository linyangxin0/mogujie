<template>
  <div id="detail">
    <detail-nav-bar class="nav-bar" @titleClick="titleClick" :current-index="currentIndex"></detail-nav-bar>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll">
      <detail-swiper :topImages="topImages"/>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detailInfo="detailInfo"/>
      <detail-param-info :paramInfo="paramInfo" ref="param"/>
      <detail-common-info :commentInfo="commentInfo" ref="common"/>
      <detail-recommon-info :recommendList="recommendList" ref="recommend"/>
    </scroll>
    <detail-bottom-bar class="detail-bottom-bar" @addCart="addCart"/>
    <back-top @click.native="backTopClick" v-show="isBackTopShow"/>
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
  import BackTop from "components/content/BackTop/BackTop";

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
      DetailBottomBar,
      BackTop
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
        recommendList:[],
        isBackTopShow:false,
        navBarOffsetTop:[],
        currentIndex:0,
        addToCartGood:{}
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
    },
    updated() {
      this._getOffsetTops()
    },
    methods:{
      backTopClick(){
        this.$refs.scroll.scrollTo(0,0,500)
      },
      contentScroll(position){
        //backtop显示与隐藏
        this.isBackTopShow=(-position.y)>1000

        // nav-bar的高亮指示
        for (var i=1;i<5;i++){
          if(this.navBarOffsetTop[i]>-position.y){
            this.currentIndex=i-1
            break
          }
        }


      },
      titleClick(index){
        this.$refs.scroll.scrollTo(0,-this.navBarOffsetTop[index],500)
      },
      _getOffsetTops(){
        this.navBarOffsetTop=[]
        this.navBarOffsetTop.push(0)
        this.navBarOffsetTop.push(this.$refs.param.$el.offsetTop)
        this.navBarOffsetTop.push(this.$refs.common.$el.offsetTop)
        this.navBarOffsetTop.push(this.$refs.recommend.$el.offsetTop)
        this.navBarOffsetTop.push(Number.MAX_VALUE)
      },
      addCart(){
        //获取商品信息对象
        const product={}
        product.image=this.topImages[0]
        product.title=this.goods.title
        product.desc=this.goods.desc
        product.price=this.goods.realPrice
        product.iid=this.iid
        product.isActive=true

      //将商品添加至购物车
        this.$store.commit('addCart',product)

      }
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
