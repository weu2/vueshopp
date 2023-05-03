//准备actions对象——响应组件中用户的动作
import {addshopcart,getshopcart} from "@/api";

const actions = {
    async addshopcartList({commit},params){
        // console.log(params.skuID,params.skuNum)
        let res=await addshopcart(params.skuID,params.skuNum)
        // console.log('detail',res.data)
        commit('ADDSHOPCARTLIST',res.data)
    },
    async getshopcartList({commit}){
        // console.log(params.skuID,params.skuNum)
        let res=await getshopcart()
        console.log('detail',res.data)
        commit('GETSHOPCARTLIST',res.data)
    },
}
//准备mutations对象——修改state中的数据
const mutations = {
    ADDSHOPCARTLIST(state,value){
        // state.shopcartlist=value.data;
        // console.log("购物车",state.shopcartlist)
        // console.log('commit',state.searchList)
    },
    GETSHOPCARTLIST(state,value){
        state.shopcartlist=value.data;
        // console.log("购物车",state.shopcartlist)
        // console.log('commit',state.searchList)
    }
}


//准备state对象——保存具体的数据
const state = {
    shopcartlist:{}
}

export default {
    actions,
    mutations,
    state,
}