//引入Vue核心库
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//应用Vuex插件
Vue.use(Vuex)
import home from './home/index'
import search from './search/index'
import detail from './detail/index'
import ShopCart from './ShopCart/index'
import register from './register/index'

//创建并暴露store
export default new Vuex.Store({
    //modules表示模块化开发
    modules:{
        home,
        search,
        detail,
        ShopCart,
        register
    }
})