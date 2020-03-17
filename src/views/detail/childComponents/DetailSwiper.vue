<template>

  <swiper>
    <swiper-item v-for="item in topImages" class="detail-swiper-item">
      <img :src="item">
    </swiper-item>
  </swiper>

</template>

<script>
  import SwiperItem from "components/common/swiper/SwiperItem";
  import Swiper from "components/common/swiper/Swiper";

  export default {
    name: "DetailSwiper",
    components:{
      SwiperItem,
      Swiper
    },
    props:{
      topImages:{
        type:Array,
        default(){
          return[]
        }
      }
    }
  }
</script>

<style scoped>
  .detail-swiper-item{
    height: 300px;
    text-align: center;
  }
</style>
