<template>
  <div class="toast" v-show="isShow">
    <div >
      {{message}}
    </div>
  </div>
</template>

<script>
  export default {
    name: "toast",
    props:{},
    data(){
      return{
        message:'',
        isShow:false
      }
    },
    methods:{
      show(message,duration=1500){
        this.isShow=true
        this.message=message

        setTimeout(()=>{
          this.isShow=false
          this.message=''
        },duration)
      }
    }
  }
</script>

<style scoped>
  .toast{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%);

    width: 200px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    border-radius: 25px;
    z-index: 999;

    color: white;
    background-color: rgba(0,0,0,.75);
  }
</style>
