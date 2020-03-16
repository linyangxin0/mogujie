<template>
  <div class="home-content">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <scroll class="content"  ref="scroll">
      <home-swiper :banners="banners"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view/>
      <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick"></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backClick"></back-top>
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
        }
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
      },
      backClick(){
        this.$refs.scroll.scroll.scrollTo(0, 0, 500)
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
    computed:{
      showGoods(){
        return  this.goods[this.curretType].list
      }
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
</style>
