import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
import VueLazyLoad from 'vue-lazyload'
import FastClick from 'fastclick'
import toast from 'components/common/toast'
import SvgIcon from "./components/SvgIcon";

Vue.component('SvgIcon', SvgIcon)

Vue.config.productionTip = false



new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')


Vue.use(VueLazyLoad, {
  // preLoad: 1,
  loading: require('./assets/img/common/placeholder.png')
})

//事件总线
Vue.prototype.$bus=new Vue()

//安装toast插件
Vue.use(toast)

FastClick.attach(document.body)
