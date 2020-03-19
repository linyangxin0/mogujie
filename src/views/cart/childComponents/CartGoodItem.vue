<template>
  <div class="good-item">
    <div class="left">
      <check-botton class="check-botton" @isChecked="isChecked" :is-active="goodItem.isActive"/>
    </div>
    <div class="center">
      <img :src="goodItem.image">
    </div>
    <div class="right">
      <div class="title">{{goodItem.title}}</div>
      <div class="desc">{{goodItem.desc}}</div>
      <div class="info-bottom">
        <div class="item-price">¥{{goodItem.price}}</div>
        <div class="item-count">x{{goodItem.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import CheckBotton from "components/content/CheckButton/CheckBotton";

  export default {
    name: "CartGoodItem",
    components: {CheckBotton},
    props:{
      goodItem:{
        type:Object,
        default(){
          return{}
        }
      }
    },
    methods:{
      isChecked(isChecked){
        this.goodItem.isActive=isChecked
      }
    }
  }
</script>

<style scoped>
  .good-item{
    width: 100%;
    display: flex;
    border-bottom: 1px solid #333333;
    padding: 5px;
  }

  .left{
    width: 14%;
    display: flex;
    justify-content: center;
    align-items: center;
  }


  .center{
    padding: 5px;
  }

  .center img{
    width: 80px;
    height: 100px;
    display: block;
    border-radius: 5px;
  }

  .right{
    font-size: 17px;
    color: #333;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
  }

  .title,.desc{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .desc{
    margin-top: 15px;
    color: #666;
    font-size: 13px;
  }

  .info-bottom{
    padding-top: 15px;
  }

  .item-price{
    float: left;
    color: orangered;
  }

  .item-count{
    float: right;
  }

  .check-botton{
    width: 20px;
    height: 20px;
  }

</style>
