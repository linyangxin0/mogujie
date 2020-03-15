<template>
  <div>
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
  </div>
</template>

<script>
  import HomeSwiper from "./childCompinents/HomeSwiper";
  import NavBar from "components/common/navbar/NavBar";
  import RecommendView from "./childCompinents/RecommendView";

  import {getHomeMultidata} from "../../network/home";

  export default {
    name: "Home",
    components: {
      RecommendView,
      HomeSwiper,
      NavBar
    },
    data(){
      return{
        banners: [],
        recommends:[],
      }
    },
    methods:{
      getHomeMultidata(){
        getHomeMultidata().then(res=>{
          this.banners=res.data.banner.list
          this.recommends=res.data.recommend.list
        })
      }
    },
    created() {
      //请求多个数据
      this.getHomeMultidata()
      // console.log(this.banners)
      // console.log(this.recommends)
    }
  }
</script>

<style scoped>

  .home-nav{
    background-color: var(--color-tint);
    color: white;
  }
</style>
