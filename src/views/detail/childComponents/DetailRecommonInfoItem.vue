<template>
  <div class="goods-list-item" @click="goodsItemClick">
    <img :src="goodsItem.image" @load="itemImgLoad">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailRecommonInfoItem",
    props:{
      goodsItem:{
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

  .goods-list-item{
    width: 100%;
    position: relative;
    padding-bottom: 40px;
  }

  .goods-list-item img{
    width: 100%;
    border-radius: 5px;
  }

  .goods-list-item .goods-info{
    font-size: 12px;
    text-align: center;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
  }

  .goods-list-item .goods-info p{
    margin-bottom: 3px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;

  }

  .goods-list-item .goods-info .price{
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-list-item .goods-info .collect{
    color: var(--color-high-text);
    position: relative;
  }

  .goods-list-item .goods-info span{
    color:var(--color-high-text)
  }

  .goods-list-item .goods-info .collect::before{
    content: "";
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
