import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    cartList:[]
  },
  mutations:{
    addCart(state,payload){
      let oldProduct = null
      for(let item of state.cartList){
        if(item.iid === payload.iid){
          item.count++
          oldProduct=payload
        }
      }

      if (!oldProduct){
        payload.count = 1
        state.cartList.push(payload)

      }
      console.log(state.cartList)
    }
  }
})


export default store
