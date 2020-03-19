<template>
  <nav-bar>
    <div slot="center">
      购物车({{goodsItemNum}})
    </div>
  </nav-bar>



</template>

<script>
  import NavBar from "components/common/navbar/NavBar";

  export default {
    name: "CartNavBar",
    components: {
      NavBar
    },
    computed:{
      goodsItemNum(){
        return this.$store.state.cartList.length
      }
    }
  }
</script>

<style scoped>

</style>
