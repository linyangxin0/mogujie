<template>
  <div class="home-content">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control :titles="['流行','新款','精选']"
                 @tabClick="tabClick"
                 ref="tabControl2"
                 v-show="isTabConrolShow"
                 :class="{tabControlShow:isTabConrolShow}"></tab-control>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            :pull-up-load="true"
            @pullingUp="pullingUp">
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view/>
      <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl1"></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isBackTopShow"></back-top>
  </div>
</template>

<script>
  import HomeSwiper from "./childCompinents/HomeSwiper";
  import NavBar from "components/common/navbar/NavBar";
  import RecommendView from "./childCompinents/RecommendView";
  import FeatureView from "./childCompinents/FeatureView";
  import TabControl from "components/content/TabControl/TabControl";
  import GoodsList from "components/content/GooList/GoodsList";
  import BackTop from "components/content/BackTop/BackTop";

  import {getHomeMultidata,getHomeGoods} from "../../network/home";
  import Scroll from "components/common/scroll/Scroll";
  import {debounce} from "common/utils";

  export default {
    name: "Home",
    components: {
      GoodsList,
      TabControl,
      RecommendView,
      HomeSwiper,
      NavBar,
      FeatureView,
      Scroll,
      BackTop
    },
    data(){
      return{
        banners: [],
        recommends:[],
        curretType:'pop',
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]}
        },
        isBackTopShow:false,
        offsetTop:0,
        isTabConrolShow:false,
        saveY:0
      }
    },
    methods:{
      getHomeMultidata(){
        getHomeMultidata().then(res=>{
          this.banners=res.data.banner.list
          this.recommends=res.data.recommend.list
        })
      },
      getHomeGoods(type){
        const page=this.goods[type].page+1
        getHomeGoods(type,page).then(res=>{
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page+=1

          //完成上拉加载更多
          this.$refs.scroll.finishPullUp()
        })
      },
      tabClick(index){
        switch (index) {
          case 0:
            this.curretType='pop'
            break
          case 1:
            this.curretType='new'
            break
          case 2:
            this.curretType='sell'
            break
        }
        this.$refs.tabControl1.currentIndex=index
        this.$refs.tabControl2.currentIndex=index
      },
      backClick(){
        this.$refs.scroll.scrollTo(0, 0)
      },
      contentScroll(position){
        //back-top的显示与隐藏
        this.isBackTopShow=(-position.y)>1000

      //  tabcontrol的吸顶效果
        this.isTabConrolShow=(-position.y)>this.offsetTop
      },
      pullingUp(){
        this.getHomeGoods(this.curretType)
      },
      swiperImageLoad(){
        this.offsetTop = this.$refs.tabControl1.$el.offsetTop
      }
    },
    created() {
      //请求多个数据
      this.getHomeMultidata()

      //请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')

    },
    mounted() {
      this.$bus.$on('itemImgLoad',()=>{
        debounce(this.$refs.scroll.refresh(),500)
      })
    },
    computed:{
      showGoods(){
        return  this.goods[this.curretType].list
      }
    },
    activated() {
      this.$refs.scroll.scrollTo(0,this.saveY,0)
      this.$refs.scroll.refresh()
    },
    deactivated() {
      this.saveY=this.$refs.scroll.getScrollY()
    }
  }
</script>

<style scoped>

  .home-content{
    height: 100vh;
    position: relative;
    background-color: white;
  }

  .home-nav{
    background-color: var(--color-tint);
    color: white;
  }

  .content{
    position: absolute;
    top: 44px;
    bottom: 49px;
    right: 0px;
    left: 0px;

    overflow: hidden;
  }

  .tabControlShow{
    position: relative;
    z-index: 9;
    background-color: white;
  }
</style>
