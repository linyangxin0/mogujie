<template>
  <div class="content" v-if="Object.keys(commentInfo).length!==0">
    <div class="title">
      <span class="title-left">用户评论</span>
      <span class="title-right">更多&gt;</span>
    </div>
    <div class="user">
      <img :src="commentInfo.user.avatar">
      <span>{{commentInfo.user.uname}}</span>
    </div>
    <div class="comment-content">
      {{commentInfo.content}}
    </div>
    <div class="data-style">
      <span class="data">{{commentInfo.created|showDate}}</span>
      <span>{{commentInfo.style}}</span>
    </div>
    <div class="comment-image">
      <div v-if="commentInfo.images.length!==0" v-for="item in commentInfo.images" class="img">
        <img :src="item">
      </div>
    </div>
  </div>
</template>

<script>

  import {formatDate} from "@/common/utils";

  export default {
    name: "DetailCommonInfo",
    props:{
      commentInfo:{
        type:Object,
        default(){
          return{}
        }
      }
    },
    filters: {
      showDate: function (value) {
        let date = new Date(value*1000);
        return formatDate(date, 'yyyy-MM-dd')
      }
    }
  }
</script>

<style scoped>

  .content{
    padding: 5px 12px;
  }

  .title{
    height: 50px;
    line-height: 50px;
    position: relative;
  }

  .title .title-left{
    font-size: 14px;
    color: #333;
  }

  .title .title-right{
    position: absolute;
    right: 0;

    font-size: 13px;
  }

  .user{
    padding: 10px 0 5px;
    height: 61px;
    position: relative;
  }

  .user img{
    width: 42px;
    height: 42px;
    border-radius: 50%;
  }

  .user span{
    font-size: 15px;
    margin-left: 10px;
    display: inline-block;
    position: absolute;
    top: 20px;
  }

  .comment-content{
    font-size: 14px;
    color: #777;
    line-height: 1.5;
  }

  .data-style{
    font-size: 12px;
    color: #999;
    margin-top: 10px;
  }

  .data-style .data{
    margin-right: 8px;
  }

  .comment-image{
    display: flex;
    margin-top: 10px;
  }

  .comment-image .img{
    width: 20%;
    margin-right: 5px;
  }

  .comment-image .img img{
    width: 70px;
    height: 70px;
  }
</style>
