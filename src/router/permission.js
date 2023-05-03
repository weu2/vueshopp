import router from "./index";

router.beforeEach((to,from,next)=>{
    // console.log(to)
    if(to.meta.isLogin){ //判断当前路由是否需要进行权限控制
        let token=false;
        if(token){ //权限控制的具体规则
            next() //放行
        }else{
            next({
                name:'login'
            })
        }
    }else{
        next() //放行
    }
})