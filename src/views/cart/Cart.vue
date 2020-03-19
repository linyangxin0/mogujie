<template>
  <div class="cart">
    <cart-nav-bar class="nav-bar"/>
    <scroll :probe-type="3" class="scroll">
      <cart-goods :goodsList="goodsList"/>
    </scroll>
    <cart-bottom-bar/>
  </div>
</template>

<script>
  import CartNavBar from "./childComponents/CartNavBar";
  import CartBottomBar from "./childComponents/CartBottomBar";
  import CartGoods from "./childComponents/CartGoods";
  import Scroll from "../../components/common/scroll/Scroll";


  export default {
    name: "cart",
    components:{
      Scroll,
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
  .cart{
    height: 100vh;
  }

  .nav-bar{
    background-color: var(--color-tint);
    color: white;
    font-weight: 700;
  }

  .scroll{
    height: calc(100% - 44px - 89px);
    overflow: hidden;
  }
</style>
