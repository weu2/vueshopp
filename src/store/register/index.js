//准备actions对象——响应组件中用户的动作
import {getmail,getlogin,gettoken,loginout} from "@/api";

const actions = {
    async getcode({commit},phone){
        // console.log(params.skuID,params.skuNum)
        let res=await getmail(phone)
        // console.log('CODE',res)
        commit('GETCODE',res.data)
    },

   async tologin({commit},params){
        let res=await getlogin(params)
       commit('TOLOGIN',res.data)
       console.log('tokenaction',res.data)
    },
    async tokenmsg({commit},params){
        try{
            let res=await gettoken();
            console.log("tokenaction",res.data)
            commit('TOKENMSG',res.data)
        }catch (e) {
            console.log('action错误')
        }
    },
    async layout({commit},params){
        try{
            let res=await loginout();
            console.log("layout",res.data)
            commit('LAYOUT',res.data)
        }catch (e) {
            console.log('action错误')
        }
    }

}
//准备mutations对象——修改state中的数据
const mutations = {
    GETCODE(state,value){
        state.statu=value
        // console.log("state",state)
    },
    TOLOGIN(state,value){
        state.token=value.data.token
        localStorage.setItem("token",state.token)
        console.log("tokenstate",state.token)
    },
    TOKENMSG(state,value){
       let token=localStorage.getItem('token')
        state.userInfo=value.data
        console.log("userInfo",state.userInfo)
    },
    LAYOUT(state){
        state.token=''
        state.userInfo={}
        localStorage.removeItem('token');
    },

}

const getters={
    token() {
        return state.token || {}
    },
    statu(){
        return state.statu || {}
    },
    userInfo(){
        return state.userInfo || {}
    },

}

//准备state对象——保存具体的数据
const state = {
    statu:{},
    token:'',
    userInfo:{},
    // layout:{}
}

export default {
    actions,
    mutations,
    state,
    getters
}