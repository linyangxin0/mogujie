<template>
  <div class="detail-content" v-if="Object.keys(recommendList).length!==0">
    <div class="title">
      热门推荐
    </div>
    <div class="content">
      <div v-for="item in recommendList" class="good-item">
        <detail-recommon-info-item :goodsItem="item"/>
      </div>
    </div>
  </div>
</template>

<script>

  import DetailRecommonInfoItem from "./DetailRecommonInfoItem";
  export default {
    name: "DetailRecommonInfo",
    components:{
      DetailRecommonInfoItem
    },
    props:{
      recommendList:{
        type:Array,
        default(){
          return[]
        }
      }
    }
  }
</script>

<style scoped>

  .detail-content{
    padding: 5px;
    border-top: 5px solid #f2f5f8;
  }

  .title{
    font-size: 14px;
    line-height: 40px;
    color: #333;
    padding-left: 8px;
  }

  .content{
    padding: 10px 0px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

  }

  .good-item{
    width: 48%;
  }
</style>
