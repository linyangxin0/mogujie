<template>
  <div>
    <cart-nav-bar class="nav-bar"/>
    <cart-bottom-bar/>
    <cart-goods :goodsList="goodsList"/>
  </div>
</template>

<script>
  import CartNavBar from "./childComponents/CartNavBar";
  import CartBottomBar from "./childComponents/CartBottomBar";
  import CartGoods from "./childComponents/CartGoods";


  export default {
    name: "cart",
    components:{
      CartGoods,
      CartNavBar,
      CartBottomBar
    },
    data(){
      return{
        goodsList:[]
      }
    },
    created() {
      this.goodsList=this.$store.state.cartList
    }
  }
</script>

<style scoped>

  .nav-bar{
    background-color: var(--color-tint);
    color: white;
    font-weight: 700;
  }
</style>
