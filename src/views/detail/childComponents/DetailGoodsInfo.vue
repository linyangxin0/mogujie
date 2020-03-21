<template>
  <div class="content" v-if="Object.keys(detailInfo).length!==0">
    <div class="star"><span></span></div>
    <div class="detail-desc">{{detailInfo.desc}}</div>
    <div class="end"><span></span></div>
    <div class="detail-key">{{detailInfo.detailImage[0].key}}</div>
    <div v-for="item in detailInfo.detailImage[0].list" class="detail-img">
      <img :src="item" @load="itemImgLoad">
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailGoodsInfo",
    props:{
      detailInfo:{
        type:Object,
        default(){
          return{}
        }
      }
    },
    methods:{
      itemImgLoad(){
        this.$bus.$emit('itemImgLoad')
      }
    }
  }
</script>

<style scoped>

  .content{
    padding: 20px 0;
    border-bottom: 5px solid #f2f5f8;
  }

  .star{
    height: 2px;
    width: 90px;
    background-color: #a3a3a5;
    margin-left: 15px;

    position: relative;
  }

  .star span{
    display: inline-block;
    width: 5px;
    height: 5px;
    background-color: #333;
    position: absolute;
    top: -3px;
  }

  .detail-desc{
    padding: 15px;
    font-size: 14px;
    color: var(--color-text);
  }

  .detail-key{
    margin: 10px 0 10px 15px;
    color: #333;
    font-size: 15px;
  }

  .detail-img img{
    width: 100%;
  }

  .end{
    height: 2px;
    width: 90px;
    background-color: #a3a3a5;
    margin-left: 15px;

    position: relative;
    float: right;
    margin-right: 15px;
  }

  .end span{
    display: inline-block;
    width: 5px;
    height: 5px;
    background-color: #333;
    position: relative;
    top: -13px;
    right: -85px;
  }
</style>
