<template>
  <div class="content" v-if="Object.keys(paramInfo).length!==0">
    <table class="params-sizes">
      <tr v-for="y in paramInfo.sizes[0]">
        <td v-for="x in y">
          {{x}}
        </td>
      </tr>
    </table>

    <table class="params-info">
      <tr v-for="y in paramInfo.infos">
        <td class="params-info-key">
          {{y.key}}
        </td>
        <td class="params-info-value">
          {{y.value}}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: "DetailParamInfo",
    props:{
      paramInfo:{
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
    padding: 20px 15px;
    font-size: 14px;
    border-bottom: 5px solid #f2f5f8;
  }

  .params-sizes{
    color: #666;
    width: 100%;
  }

  .params-sizes tr{
    display: flex;
    border-bottom: 1px solid rgba(100,100,100,.1);
    padding: 10px 0;
  }

  .params-sizes tr td{
    flex: 1;
  }

  .params-info {
    width: 100%;
  }

  .params-info tr {
    display: flex;
    border-bottom: 1px solid rgba(100,100,100,.1);
    padding: 10px 0;
  }


  .params-info-key{
    color: #666;
    flex: 1;
  }

  .params-info-value{
    color: #eb4868;
    flex: 4;
  }


</style>
