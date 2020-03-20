<template>
  <div class="category-item-display">
    <div class="content">
      <div v-for="item in subcategories" class="item">
        <img :src="item.image">
        <div class="item-text">{{item.title}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CategoryItemDsiaplay",
    props:{
      subcategories:{
        type:Array,
        default(){
          return[]
        }
      }
    }
  }
</script>

<style scoped>

  .content{
    display: flex;
    flex-wrap: wrap;
  }

  .item{
    width: 33%;
    text-align: center;
    font-size: 12px;
    margin-top: 10px;
  }

  .item img{
    width: 80%;
  }

  .item-text{
    margin-top: 10px;
  }

</style>
