<template>
  <div>
    <div v-for="item in goodsList">
      <cart-good-item :good-item="item"></cart-good-item>
    </div>
  </div>
</template>

<script>

  import CartGoodItem from "./CartGoodItem";
  export default {
    name: "CartGoods",
    components: {CartGoodItem},
    props:{
      goodsList:{
        type:Array,
        default(){
          return[]
        }
      }
    }
  }
</script>

<style scoped>

</style>
