<template>
  <div class="detail-shop-info">
    <div class="shop">
      <img :src="shop.logo">
      <span>{{shop.name}}</span>
    </div>

    <div class="shop-info">
      <div class="shop-base-info">
        <div class="shop-sell">
          <div class="sell-account">
            {{shop.sells|sellCountFilter}}
          </div>
          <div class="sell-text">
            总销量
          </div>
        </div>
        <div class="shop-count">
          <div class="goods-account">
            {{shop.goodsCount}}
          </div>
          <div class="goods-text">
            全部宝贝
          </div>
        </div>
      </div>
      <div class="shop-score">
        <div v-for="item in shop.score">
          <span>{{item.name}}</span>
          <span :class="{isBetterScore:item.isBetter,notIsBetterScore:!item.isBetter}">{{item.score}}</span>
          <span v-if="item.isBetter" class="isBetterText">高</span>
          <span v-else class="notIsBetterText">低</span>
        </div>
      </div>
    </div>
    <div class="enter">
      <span class="enter-icon">进店逛逛</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailShopInfo",
    props:{
      shop:{
        type:Object
      }
    },
    data(){
      return{
      }
    },
    filters: {
      sellCountFilter: function (value) {
        if (value < 10000) return value;
        return (value/10000).toFixed(1) + '万'
      }
    }
  }
</script>

<style scoped>

  .detail-shop-info{
    padding: 25px 8px;
    border-bottom: 5px solid #f2f5f8;
  }

  .detail-shop-info .shop{
    display: flex;
  }

  .detail-shop-info .shop img{
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 1px solid rgba(0,0,0,.1);
  }

  .detail-shop-info .shop span{
    margin-left: 15px;
    color: #666;
    line-height: 45px;
  }

  .shop-info{
    display: flex;
    margin-top: 10px;
  }

  .shop-base-info{
    display: flex;
    border-right: 1px solid rgba(0,0,0,.1);
  }

  .shop-base-info,.shop-score{
    flex: 1;

    text-align: center;
  }

  .shop-sell,.shop-count{
    flex: 1;
  }

  .shop-score div{
    display: flex;
    font-size: 13px;
    padding: 5px 0;
    margin-left: 10px;
  }

  .shop-score div span{
    flex: 1;
  }

  .sell-text,.goods-text{
    font-size: 12px;
    margin-top: 5px;
  }

  .goods-account,.sell-account{
    font-size: 18px;
    margin-top: 15px;
  }

  .isBetterText{
    /*background-color: #f13e3a;*/
    color: #f13e3a;
  }

  .notIsBetterText{
    /*background-color: #5ea732;*/
    color: #5ea732;
  }

  .isBetterScore{
    color: #f13e3a;
  }
  .notIsBetterScore{
    color: #5ea732;
  }

  .enter{
    text-align: center;
    margin-top: 10px;
    font-size: 14px;
  }

  .enter-icon{
    display: inline-block;
    background-color: #f2f5f8;
    width: 150px;
    height: 30px;
    line-height: 30px;
    border-radius: 10px;
  }

</style>
