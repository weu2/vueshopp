// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
// import About from '../components/About'
import Layout from "@/views/Layout";
import Login from "../views/Login";
import Home from '../views/home/index'
import Search from '../views/search/index'
import detail from '../views/detail/index';
import ShopCart from '../views/ShopCart/index'

//创建并暴露一个路由器
const router =new VueRouter({
    modes:'history',
    routes:[
        {
            path:'/layout',
            name:'Layout',
            component:Layout,
            // children:[]
            meta:{
                show:false
            }
        },
        {
            path:'/login',
            name:'login',
            component:Login,
            meta:{
                show:false,

            }
        },
        {
            path:'/',
            name:'home',
            component:Home,
            // children:[]
            meta:{
                show:true
            }
        },
        {
            path:'/search',
            name:'search',
            component:Search,
            // children:[]
            meta:{
                show:true
            }
        },
        {
            path:'/detail/:id',
            name:'detail',
            component:detail,
            // children:[]
            meta:{
                show:false
            }
        },
        {
            path:'/ShopCart/:skuID/:skuNum',
            name:'ShopCart',
            component:ShopCart,
            // children:[]
            meta:{
                show:false
            }
        }
    ]
})

export default router