import axios from "axios";
import nprogress from 'nprogress'//加载的进度条
// import "nprogress/nprogress.css";
import store from 'vuex'

const requests=axios.create({
    baseURL:'/api',
    timeout:5000
})
//
//请求拦截器
requests.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    if (token) {
        config.headers.token =`${token}`
    }
    return config
}, error => {
    return Promise.reject(error)
})

// 导出实例

export default requests;