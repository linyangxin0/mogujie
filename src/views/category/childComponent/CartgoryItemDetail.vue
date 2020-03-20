<template>
  <div>
    <category-recommon-info :recommend-list="categoryDetail"/>
  </div>
</template>

<script>
  import CategoryRecommonInfo from "./CategoryRecommonInfo";
  // import DetailRecommonInfo from "../../detail/childComponents/DetailRecommonInfo";

  export default {
    name: "CartgoryItemDetail",
    components:{
      CategoryRecommonInfo,
      // DetailRecommonInfo
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
