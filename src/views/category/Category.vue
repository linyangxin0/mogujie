<template>
  <div class="category">
    <category-nav-bar class="nav-bar"/>
    <div class="content">
      <scroll class="main-menu">
        <tab-content-category :category-list="categoryList"
                              @categoryItemClick="getCategoryIndex"
                              class="tab-content-category"/>
      </scroll>

      <scroll class="tab-content" ref="scroll">
        <div>
          <category-item-dsiaplay :subcategories="getSubcategoriesList"
                                  @componentUpdate="itemUpdate"
                                  class="category-item-dsiaplay"/>
          <tab-control :titles="['综合', '新品', '销量']"
                       class="tab-control"
                       @tabClick="tabClick"></tab-control>
          <cartgory-item-detail :category-detail="getTypeCategoryDetail"/>

        </div>
      </scroll>
    </div>
  </div>
</template>

<script>

  import CategoryNavBar from "./childComponent/CategoryNavBar";
  import TabContentCategory from "./childComponent/TabContentCategory";
  import TabControl from "components/content/TabControl/TabControl";

  import {getCategory,getSubcategory,getCategoryDetail} from "../../network/category";
  import CategoryItemDsiaplay from "./childComponent/CategoryItemDsiaplay";
  import Scroll from "components/common/scroll/Scroll";
  import CartgoryItemDetail from "./childComponent/CartgoryItemDetail";

  import {debounce} from "common/utils";


  export default {
    name: "Category",
    data(){
      return{
        categoryList:[],
        categoryIndex:-1,
        categoryData:{},
        currentType:'pop'
      }
    },
    components: {
      CartgoryItemDetail,
      Scroll,
      CategoryItemDsiaplay,
      CategoryNavBar,
      TabContentCategory,
      TabControl
    },
    created() {
      this._getCategory()
    },
    methods:{
      getCategoryIndex(index){
        this.categoryIndex=index
        this._getSubcategory(this.categoryIndex)
      },
      _getCategory(){
        getCategory().then(res=>{
          // 1.获取分类数据
          this.categoryList = res.data.category.list
          // 2.初始化每个类别的子数据
          for (let i = 0; i < this.categoryList.length; i++) {
            this.categoryData[i] = {
              subcategories: {},
              categoryDetail: {
                'pop': [],
                'new': [],
                'sell': []
              }
            }
          }
          this._getSubcategory(0)
        })
      },
      _getSubcategory(index){
        this.categoryIndex = index
        const mailKey = this.categoryList[index].maitKey;
        getSubcategory(mailKey).then(res=>{
          this.categoryData[index].subcategories = res.data
          this.categoryData = {...this.categoryData}
          this._getCategoryDetail('pop')
          this._getCategoryDetail('sell')
          this._getCategoryDetail('new')
        })
      },
      _getCategoryDetail(type){

        //获取请求的miniWallkey
        const miniWallkey = this.categoryList[this.categoryIndex].miniWallkey
        //  发送请求
        getCategoryDetail(miniWallkey,type).then(res=>{
          this.categoryData[this.categoryIndex].categoryDetail[type] = res
          this.categoryData = {...this.categoryData}
        })
      },
      itemUpdate(){
        this.$refs.scroll.refresh()
      },
      tabClick(index){
        switch (index) {
          case 0:
            this.currentType='pop'
            break
          case 1:
            this.currentType='new'
            break
          case 2:
            this.currentType='sell'
            break
        }
      }
    },
    computed:{
      getSubcategoriesList(){
        return this.categoryData[this.categoryIndex].subcategories.list
      },
      getTypeCategoryDetail(){
        return this.categoryData[this.categoryIndex].categoryDetail[this.currentType]
      }
    },
    mounted() {
      this.$bus.$on('itemImgLoad',()=>{
        debounce(this.$refs.scroll.refresh(),500)
      })
    }
  }
</script>

<style scoped>

  #category {
    height: 100vh;
  }

  .nav-bar{
    background-color: var(--color-tint);
    color: #fff;
    font-weight: 700;
  }

  .content {
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;

    display: flex;
  }

  .main-menu{
    overflow: hidden;
  }

  .tab-content {
    flex: 1;

    /*height: calc(100% - 0px - 49px);*/
    overflow: hidden;
  }

  .tab-control{
    margin-top: 20px;
  }




</style>
