<template>
  <div>
    <category-recommon-info :recommend-list="categoryDetail"/>
  </div>
</template>

<script>
  import CategoryRecommonInfo from "./CategoryRecommonInfo";

  export default {
    name: "CartgoryItemDetail",
    components:{
      CategoryRecommonInfo
    },
    props:{
      categoryDetail:{
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
