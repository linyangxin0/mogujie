<template>
  <div class="category">
      <div class="content">
        <div v-for="(item,index) in categoryList"
             class="item"
             :class="{actived:index===currentIndex}" @click="categoryItemClick(index)">
          {{item .title}}
        </div>
      </div>
  </div>

</template>

<script>
  import Scroll from "components/common/scroll/Scroll";
  export default {
    name: "TabContentCategory",
    components: {Scroll},
    props:{
      categoryList:{
        type:Array,
        default(){
          return[]
        }
      }
    },
    data(){
      return{
        isActived:false,
        currentIndex:0
      }
    },
    methods:{
      categoryItemClick(index){
        this.currentIndex=index
        this.$emit('categoryItemClick',index)
      }
    }
  }
</script>

<style scoped>
  .category{
    display: inline-block;
    width: 100px;
  }

  /*.tab-menu{*/
  /*  width: 100px;*/
  /*  box-sizing: border-box;*/
  /*  height: calc(100% - 44px - 49px);*/
  /*  overflow: hidden;*/
  /*}*/

  .content{
    font-size: 14px;
  }

  .item{
    height: 45px;
    line-height: 45px;
    text-align: center;
    background-color: #f6f6f6;
    color: #666;
    box-sizing: border-box;
  }

  .actived{
    color: var(--color-high-text);
    background-color: #fff;
    border-left: 2px solid var(--color-high-text);
    font-weight: 700;
  }
</style>
