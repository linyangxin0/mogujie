<template>
  <div class="content">
    <profile-nav-bar/>

    <user-info/>

    <!--2.没有单独封装: 不同的地方太多, 需要传过多的参数-->
    <section class="account">
      <div class="account-item">
        <div class="number">
          <span class="balance">0.00</span>元
        </div>
        <div class="account-info">我的余额</div>
      </div>
      <div class="account-item">
        <div class="number">
          <span class="balance">0</span>个
        </div>
        <div class="account-info">我的优惠</div>
      </div>
      <div class="account-item">
        <div class="number">
          <span class="balance">0</span>分
        </div>
        <div class="account-info">我的积分</div>
      </div>
    </section>


    <!--3.封装成一个整体-->
    <list-view :list-data="orderList" class="order-list"></list-view>
    <list-view :list-data="serviceList" class="service-list"></list-view>
  </div>
</template>

<script>
  import ProfileNavBar from "./childComponents/ProfileNavBar";
  import UserInfo from "./childComponents/UserInfo";
  import ListView from "./childComponents/ListView";
  export default {
    name: "Profile",
    components: {UserInfo, ProfileNavBar,ListView},
    data: function () {
      return {
        orderList: [
          {icon: 'order_unread', iconColor: '#ff8198', info: '我的消息'},
          {icon: 'mall', iconColor: '#fc7b53', info: '积分商城'},
          {icon: 'card', iconColor: '#ffc636', info: '会员卡'},
        ],
        serviceList: [
          {icon: 'cart', iconColor: '#ff8198', info: '我的购物车'},
          {icon: 'download', iconColor: '#ff8198', info: '下载购物APP'},
        ]
      }
    }
  }
</script>

<style scoped>

  .content{
    background-color: #f2f2f2;
  }

  .account {
    display: flex;
  }

  .account-item {
    width: 100%;
    background-color: #fff;
    margin-right: 1px;
    text-align: center;
  }

  .account-item:last-of-type {
    margin-right: 0;
  }

  .account-item {
    color: #666;
    font-size: 13px;
    padding: 18px;
  }

  .account-item .balance {
    font-size: 24px;
    font-weight: 700;
    color: #ff5f3e;
  }

  .account-info {
    margin-top: 6px;
  }

  .order-list, .service-list {
    margin-top: 12px;
  }
</style>
