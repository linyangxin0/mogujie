<template>
  <div class="home-content">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view/>
    <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick"></tab-control>
    <goods-list :goods="showGoods"></goods-list>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
      <li>11</li>
      <li>12</li>
      <li>13</li>
      <li>14</li>
      <li>15</li>
      <li>16</li>
      <li>17</li>
      <li>18</li>
      <li>19</li>
      <li>20</li>
      <li>21</li>
      <li>22</li>
      <li>23</li>
      <li>24</li>
      <li>25</li>
      <li>26</li>
      <li>27</li>
      <li>28</li>
      <li>29</li>
      <li>30</li>
      <li>31</li>
      <li>32</li>
      <li>33</li>
      <li>34</li>
      <li>35</li>
      <li>36</li>
      <li>37</li>
      <li>38</li>
      <li>39</li>
      <li>40</li>
      <li>41</li>
      <li>42</li>
      <li>43</li>
      <li>44</li>
      <li>45</li>
      <li>46</li>
      <li>47</li>
      <li>48</li>
      <li>49</li>
      <li>50</li>
    </ul>
  </div>
</template>

<script>
  import HomeSwiper from "./childCompinents/HomeSwiper";
  import NavBar from "components/common/navbar/NavBar";
  import RecommendView from "./childCompinents/RecommendView";
  import FeatureView from "./childCompinents/FeatureView";
  import TabControl from "components/content/TabControl/TabControl";
  import GoodsList from "components/content/GooList/GoodsList";

  import {getHomeMultidata,getHomeGoods} from "../../network/home";

  export default {
    name: "Home",
    components: {
      GoodsList,
      TabControl,
      RecommendView,
      HomeSwiper,
      NavBar,
      FeatureView
    },
    data(){
      return{
        banners: [],
        recommends:[],
        curretType:'pop',
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]}
        }
      }
    },
    methods:{
      getHomeMultidata(){
        getHomeMultidata().then(res=>{
          this.banners=res.data.banner.list
          this.recommends=res.data.recommend.list
        })
      },
      getHomeGoods(type){
        const page=this.goods[type].page+1
        getHomeGoods(type,page).then(res=>{
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page+=1
        })
      },
      tabClick(index){
        switch (index) {
          case 0:
            this.curretType='pop'
            break
          case 1:
            this.curretType='new'
            break
          case 2:
            this.curretType='sell'
            break
        }
      }
    },
    created() {
      //请求多个数据
      this.getHomeMultidata()

      //请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')

    },
    computed:{
      showGoods(){
        return  this.goods[this.curretType].list
      }
    }
  }
</script>

<style scoped>

  .home-content{

  }

  .home-nav{
    background-color: var(--color-tint);
    color: white;
  }
</style>
