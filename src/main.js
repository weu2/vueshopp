import Vue from 'vue'
// import store from 'vuex'
import App from './App.vue'
import './plugins/element.js'
import store from "./store/index"
import router from './router/index'
import './assets/css/common.css'
import VueRouter from 'vue-router'
import './router/permission'
import typenav from './views/home/typenav/index'
import '../src/api/index'
import {getBannerList, getBaseCategoryList,
        getFloors,getSearchList,getDetailList,
        addshopcart,getshopcart,getmail,getregister,
        getlogin,gettoken,loginout
} from "@/api";
import './mock/mockServer';
import mockServer from './mock/mockServer';
import 'swiper/css/swiper.css'


Vue.component(typenav.name,typenav);//全局组件,其他组件可以直接引用
Vue.config.productionTip = false;
Vue.use(VueRouter);

//调用api的函数
getBaseCategoryList();
getBannerList();
getFloors();
getSearchList();
getDetailList();
addshopcart();
getshopcart();
getmail();
getregister();
getlogin();
gettoken();
loginout()


new Vue({
  beforeCreate(){
    Vue.prototype.$bus = this
  },
  render: h => h(App),
  store,
  router,
}).$mount('#app')
