<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles"
         class="title-item"
         :class="{active:currentIndex===index}"
         @click="tabControlClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    data(){
      return{
        currentIndex:0
      }
    },
    props:{
      titles:{
        type:Array,
        default(){
          return [];
        }
      }
    },
    methods:{
      tabControlClick(index){
        this.currentIndex=index;
        this.$emit('tabClick',index)
      }
    }
  }
</script>

<style scoped>

  .tab-control{
    display: flex;

    text-align: center;
    height: 40px;
    line-height: 40px;
  }

  .title-item{
    flex: 1;
  }

  .active{
    color: var(--color-high-text);
  }

  .active span{
    border-bottom: 3px solid var(--color-tint);
  }
</style>
