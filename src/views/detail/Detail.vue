<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :topImages="topImages"/>
  </div>
</template>

<script>
  import DetailNavBar from "./childComponents/DetailNavBar";
  import DetailSwiper from "./childComponents/DetailSwiper";

  import {getGoodsDetail} from "network/detail";

  export default {
    name: "detail",
    components: {
      DetailNavBar,
      DetailSwiper
    },
    data(){
      return{
        iid:null,
        topImages:[]
      }
    },
    created() {
      this.iid = this.$route.params.iid

      getGoodsDetail(this.iid).then(res=>{
        console.log(res)
        this.topImages=res.result.itemInfo.topImages
      })
    }
  }
</script>

<style scoped>

</style>
