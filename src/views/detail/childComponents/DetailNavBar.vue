<template>
  <NavBar>
    <div slot="center" class="center">
      <div v-for="(item,index) in title" class="nav-bar-title" :class="{active:index===currentIndex}" @click="titleClick(index)">
        {{item}}
      </div>
    </div>
  </NavBar>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";

  export default {
    name: "DetailNavBar",
    components:{
      NavBar
    },
    data(){
      return{
        title:['商品','参数','评论','推荐'],
        currentIndex:0
      }
    },
    methods:{
      titleClick(index){
        this.currentIndex=index
      }
    }
  }
</script>

<style scoped>

  .center{
    display: flex;
  }

  .nav-bar-title{
    flex: 1;
    font-size: 14px;
  }

  .active{
    color: var(--color-high-text)
  }
</style>
