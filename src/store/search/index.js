//准备actions对象——响应组件中用户的动作
import {getSearchList} from "@/api";

const actions = {
   async searchList({commit},params){
        let res=await getSearchList(params)
        // console.log('params',res)
        commit('SEARCHLIST',res.data)
    }
}
//准备mutations对象——修改state中的数据
const mutations = {
    SEARCHLIST(state,value){
        state.searchList=value.data;
        // console.log('commit',state.searchList)

    }
}

const getters ={
    goodsList(){
        return state.searchList.goodsList
    },
    attrsList(){
        return state.searchList.attrsList
    },
    trademarkList(){
        return state.searchList.trademarkList
    }
}
//准备state对象——保存具体的数据
const state = {
    searchList:{}
}

export default {
    actions,
    mutations,
    state,
    getters
}