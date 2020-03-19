<template>
  <div class="check-botton" :class="{active:isActive}" @click="bottonClick">
    <img src="~assets/img/cart/tick.svg">
  </div>
</template>

<script>
  export default {
    name: "CheckBotton",
    data(){
      return{
      }
    },
    props:{
      isActive:{
        type:Boolean,
        default:true
      }
    },
    methods:{
      bottonClick(){
        this.isActive=!this.isActive
        let isChecked=this.isActive
        this.$emit('isChecked',isChecked)
      }
    }
  }
</script>

<style scoped>

  .check-botton{
    border-radius: 50%;
    border: 2px solid #aaa;
  }

  .check-botton img{
    width: 100%;
    position: relative;
    /*bottom: 10px;*/
  }

  .active{
    border-color: red;
    background-color: red;
  }
</style>
