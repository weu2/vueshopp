//准备actions对象——响应组件中用户的动作
import '../../api/index'
import { getBannerList, getFloors, getBaseCategoryList} from "@/api";

const actions = {
    async categorylist(context){
        //调用commit方法
        //ministore在官网叫context
        let res=await getBaseCategoryList()
        // console.log(res)
        context.commit('CATEGORYLIST',res.data)
    },
      async bannerList(context){
          let res=await getBannerList()
          // console.log(res.data)
          context.commit("BANNERLIST",res.data)
      },
      async floorsList(context){
          let res=await getFloors()
          // console.log(res.data)
          context.commit("FLOORSLIST",res.data)
      },

}
//准备mutations对象——修改state中的数据
const mutations = {
    CATEGORYLIST(state,value){
        // console.log(value.data)
        state.categorylist=value.data
        // console.log(state)
    },
    BANNERLIST(state,value){
        state.bannerList=value.data
        // console.log(state)
    },
    FLOORSLIST(state,value){
        state.floorList=value.data
        // console.log(state)
    }
}
//准备state对象——保存具体的数据
const state = {
    categorylist:[],
    bannerList:[],
    floorList:[]
}

export default {
    actions,
    mutations,
    state
}