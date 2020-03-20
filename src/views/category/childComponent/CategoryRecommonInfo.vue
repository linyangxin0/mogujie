<template>
  <div class="detail-content" v-if="Object.keys(recommendList).length!==0">
    <div class="content">
      <div v-for="item in recommendList" class="good-item">
        <category-recommon-info-item :goodsItem="item"/>
      </div>
    </div>
  </div>
</template>

<script>
  import CategoryRecommonInfoItem from "./CategoryRecommonInfoItem";

  export default {
    name: "CategoryRecommonInfo",
    components:{
      CategoryRecommonInfoItem
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
