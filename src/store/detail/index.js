//准备actions对象——响应组件中用户的动作
import {getDetailList} from "@/api";

const actions = {
    async detailList({commit},params){
        let res=await getDetailList(params)
        // console.log('detail',res.data)
        commit('DETAILLIST',res.data)
    }
}
//准备mutations对象——修改state中的数据
const mutations = {
    DETAILLIST(state,value){
        state.detailList=value.data;
        console.log("详情展示",state.detailList)
        // console.log('commit',state.searchList)
    }
}


//准备state对象——保存具体的数据
const state = {
    detailList:{}
}

export default {
    actions,
    mutations,
    state,
}