<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Scroll",
    data(){
      return{
        scroll:null,
        probeType:3
      }
    },
    mounted() {
      this.scroll=new BScroll(this.$refs.wrapper,{
        click:true,
        probeType:this.probeType
      })
      this.scroll.on('scroll',(position)=>{
        this.$emit('scroll',position)
      })
    },
    methods:{
      scrollTo(x,y,time=500) {
        this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x,y,time)
      },
    }
  }
</script>

<style scoped>

</style>
