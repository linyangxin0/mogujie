<template>
  <div class="cart-bottom-bar">
    <div class="left">
      <check-botton class="check-botton" :isActive="getAllSellectd" @isChecked="isChecked"/>
      <span>全选</span>
    </div>
    <div class="center">
      <span>合计:￥{{getTotalPrice}}</span>
    </div>
    <div class="right">
      结算({{getCount}})
    </div>
  </div>
</template>

<script>
  import CheckBotton from "components/content/CheckButton/CheckBotton";

  export default {
    name: "CartBottomBar",
    components:{
      CheckBotton
    },
    methods:{
      isChecked(){
        let isTrue = true
        for(let item of this.$store.state.cartList){
          if (!item.isActive){
            isTrue=false
            break
          }
        }
        if (isTrue){
          for(let item of this.$store.state.cartList){
            item.isActive = false
          }
        }else {
          for(let item of this.$store.state.cartList){
            item.isActive = true
          }
        }
      }
    },
    computed:{
      getCount(){
        let count=0
        for(let item of this.$store.state.cartList){
          if (item.isActive){
            count+=item.count
          }
        }
        return count
      },
      getTotalPrice(){
        let totalPrice = 0
        for (let item of this.$store.state.cartList){
          if (item.isActive){
            totalPrice+=(item.price*item.count)
          }
        }
        return totalPrice
      },
      getAllSellectd(){
        let isSelectAll = true
        for(let item of this.$store.state.cartList){
          if (!item.isActive)
            isSelectAll=false
        }
        return isSelectAll
      }
    }
  }
</script>

<style scoped>
  .cart-bottom-bar{
    display: flex;
    height: 40px;
    line-height: 40px;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 49px;

    font-size: 14px;
  }

  .left{
    text-align: center;
    height: 40px;
    line-height: 40px;
  }

  .left,.right{
    flex: 1;
  }

  .center{
    flex: 3;
  }

  .left,.center{
    background-color: #eee;
  }

  .right{
    background-color: #f00;
    color: #fff;
    text-align: center;
  }

  .check-botton{
    display: inline-block;
    width: 20px;
    height: 20px;
    line-height: 20px;
    margin-right:5px;
  }

</style>
