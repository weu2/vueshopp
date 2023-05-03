import axios from "axios";
import requests from "@/api/request";
import ajaxMock from "@/api/ajaxMock";

//获取三级目录数据
export const getBaseCategoryList=()=> {
   return requests({
        url:"/product/getBaseCategoryList",
        method: 'GET'
    })
}

//获取轮播图数据，本地接口
export const getBannerList=()=>ajaxMock.get('/banners')

//获取底部数据
export const getFloors=()=>ajaxMock.get('/floors')

//获取search模块数据
export const getSearchList=(params)=>{
    return requests({
        url:'/list',
        method:'post',
        data:params
    })
}

//获取详情信息
export const getDetailList=(skuId)=>{
    return requests({
        url:'/item/'+skuId,
        method:'get',
    })
}

export const addshopcart=(skuId,skuNum)=>{
    return requests({
        url:`/cart/addToCart/${skuId}/${skuNum}`,
        method:'POST',
    })
}

export const getshopcart=()=>{
    return requests({
        url:'/cart/cartList',
        method:'get',
    })
}

export const getmail=(phone)=>{
    return requests({
        url:`/user/passport/sendCode/${phone}`,
        method:'get',
    })
}

export const getregister=(params)=>{
    return requests({
        url:'/user/passport/register',
        method:'post',
        data:params
    })
}

export const getlogin=(params)=>{
    return requests({
        url:'/user/passport/login',
        method:'post',
        data:params
    })
}

export const gettoken=()=>{
    return requests({
        url:'/user/passport/auth/getUserInfo',
        method:'get',
    })
}

export const loginout=()=>{
    return requests({
        url:'/user/passport/logout',
        method:'get'
})
}





