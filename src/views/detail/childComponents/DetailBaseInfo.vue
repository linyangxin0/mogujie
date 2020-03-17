<template>
  <div v-if="Object.keys(goods).length!==0" class="content">
    <div class="title"><span>{{goods.title}}</span></div>
    <div class="price">
      <span class="new-price">{{goods.newPrice}}</span>
      <span class="old-price">{{goods.oldPrice}}</span>
      <span class="discount">{{goods.discount}}</span>
    </div>
    <div class="columns">
      <span class="sell">{{goods.columns[0]}}</span>
      <span class="cafv">{{goods.columns[1]}}</span>
      <span class="send">{{goods.services[3].name}}</span>
    </div>
    <div class="services">
      <div>
        <img :src="goods.services[0].icon">
        <span>{{goods.services[0].name}}</span>
      </div>
      <div class="center">
        <img :src="goods.services[1].icon">
        <span>{{goods.services[1].name}}</span>
      </div>
      <div class="right">
        <img :src="goods.services[2].icon">
        <span>{{goods.services[2].name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBaseInfo",
    props:{
      goods:{
        type:Object,
        default(){
          return{}
        }
      }
    }
  }
</script>

<style scoped>

  .content{
    margin-top: 15px;
    padding: 0 8px;
    border-bottom: 5px solid #f2f5f8;
  }

  .title{
    color: #222;
    font-size: 16px;
  }

  .price{
    margin-top: 10px;
  }

  .price .new-price{
    color: var(--color-high-text);
    font-size: 24px;
  }

  .price .old-price{
    font-size: 13px;
    text-decoration: line-through;
    color: #999;
    margin-left: 5px;
  }

  .price .discount{
    color: white;
    background-color: var(--color-high-text);
    border-radius: 8px;
    font-size: 12px;
    margin-left: 5px;
    padding: 2px 5px;
  }

  .columns{
    position: relative;

    margin-top: 15px;
    font-size: 13px;
    color: #999;
    height: 30px;
    line-height: 30px;

    border-bottom: 1px solid rgba(100,100,100,.1);
  }

  .columns .sell{
    position: absolute;
    left: 0;
  }

  .columns .cafv{
    position: absolute;
    width: 70px;
    left: 0;
    right: 0;
    margin: 0 auto;
  }

  .columns .send{
    position: absolute;
    right: 0;
  }

  .services{
    display: flex;

    height: 60px;
    line-height: 60px;
  }

  .services div{
    flex: 1;
  }

  .services span{
    font-size: 13px;
    color: #333;
  }

  .services img{
    width: 14px;
    height: 14px;

    position: relative;
    top: 2px;
  }

  .services .right{
    text-align: right;
  }

  .services .center{
    text-align: center;
  }

</style>
