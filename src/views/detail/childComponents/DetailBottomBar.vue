<template>
  <div class="bottom-bar">
    <div class="serve">
      <i></i>
      <span>客服</span>
    </div>
    <div class="shop">
      <i></i>
      <span>店铺</span>
    </div>
    <div class="cafv">
      <i></i>
      <span>收藏</span>
    </div>
    <div class="enter" @click="addCart">
      <span>加入购物车</span>
    </div>
    <div class="buy">
      <span>购买</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBottomBar",
    methods:{
      addCart(){
        this.$emit('addCart')
      }
    }
  }
</script>

<style scoped>

  .bottom-bar{
    display: flex;
    height: 58px;
    background-color: #FFF;
    text-align: center;
    background-color: #fff;
  }

  .serve,.shop,.cafv{
    flex: 2;
    font-size: 13px;
  }

  .enter,.buy{
    flex: 3;
    line-height: 58px;
  }

  .enter{
    background-color: #ffe817;
    color: #333;
  }

  .buy{
    background-color: #f69;
    color: #fff;
  }

  i{
    display: block;
    width: 22px;
    height: 22px;
    margin: 10px auto 3px;
    background: url('~assets/img/detail/detail_bottom.png') 0 0/100%;
  }

  .shop i{
    background-position:0 -98px;
  }

  .serve i{
    background-position:0 -54px;
  }

</style>
