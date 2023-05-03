<template>
    <div class="outer">
    <header class="header">
        <!-- 头部的第一行 -->
        <div class="top">
            <div class="container">
                <div class="loginList">
                    <p>尚品汇欢迎您！</p>
                    <p v-if="!userInfo.name">
                        <span>请</span>
                        <router-link to="/login" class="login">登录</router-link>
                        <router-link to="/register">免费注册</router-link>
                    </p>
                    <p v-else>
                        <span>你好，{{userInfo.name}}</span>
                        <a href="#" class="login" @click="layout">退出登录</a>
                    </p>
                </div>
                <div class="typeList">
                    <a href="###">我的订单</a>
                    <a href="###">我的购物车</a>
                    <a href="###">我的尚品汇</a>
                    <a href="###">尚品汇会员</a>
                    <a href="###">企业采购</a>
                    <a href="###">关注尚品汇</a>
                    <a href="###">合作招商</a>
                    <a href="###">商家后台</a>
                </div>
            </div>
        </div>
        <!--头部第二行 搜索区域-->
        <div class="bottom">
            <h1 class="logoArea">
                <router-link to="/home?value=" class="logo" title="尚品汇" target="_blank">
                    <img src="../../assets/home/imges/logo.png" alt="">
                </router-link>
            </h1>
            <div class="searchArea">
                <form action="###" class="searchForm">
                    <input v-model="keyword" type="text" id="autocomplete" class="input-error input-xxlarge" />
                    <button
                            class="sui-btn btn-xlarge btn-danger"
                            type="button"
                            @click="onbutton"
                    >搜索</button>
                </form>
            </div>
        </div>
    </header>
        </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        data(){
            return{
                keyword:''
            }
        },
        methods:{
            //获取token数据
           async getToken(){
              await this.$store.dispatch('tokenmsg')
                console.log(this.userInfo)
            },
            onbutton(){
                // this.$router.push('/search/'+this.keyword)
                this.$router.push('/search?keyword='+this.keyword)
            },

            //退出登录
            layout(){
               console.log(this.userInfo)
                this.$store.dispatch('layout')

            }
        },
        watch:{
            $route(){
                if(this.$route.path=='/'){
                    // this.initData();
                    this.getToken();
                }
                // console.log(this.$route.query)
            },
        },
        computed:{
            ...mapGetters(['userInfo'])
        }

    }

</script>

<style lang="less">
    .outer .header > .top {
        background-color: #eaeaea;
        height: 30px;
        line-height: 30px;
    }
    .outer .header > .top .container {
        width: 1200px;
        margin: 0 auto;
        overflow: hidden;
    }
    .outer .header > .top .container .loginList {
        float: left;
        margin-top: 0px;
    }
    .outer .header > .top .container .loginList p {
        float: left;
        margin-right: 10px;
    }
    .outer .header > .top .container .loginList p .register {
        border-left: 1px solid #b3aeae;
        padding: 0 5px;
        margin-left: 5px;
    }
    .outer .header > .top .container .typeList {
        float: right;
    }
    .outer .header > .top .container .typeList a {
        padding: 0 10px;
    }
    .outer .header > .top .container .typeList a + a {
        border-left: 1px solid #b3aeae;
    }
    .outer .header > .bottom {
        width: 1200px;
        height: 100px;
        margin: 0 auto;
        overflow: hidden;
    }
    .outer .header > .bottom .logoArea {
        float: left;
    }
    .outer .header > .bottom .logoArea .logo img {
        width: 175px;
        margin: 0px 45px;
    }
    .outer .header > .bottom .searchArea {
        float: right;
        margin-top: 35px;
    }
    .outer .header > .bottom .searchArea .searchForm {
        overflow: hidden;
    }
    .outer .header > .bottom .searchArea .searchForm input {
        box-sizing: border-box;
        width: 490px;
        height: 32px;
        padding: 0px 4px;
        border: 2px solid #ea4a36;
        float: left;
    }
    .outer .header > .bottom .searchArea .searchForm input:focus {
        outline: none;
    }
    .outer .header > .bottom .searchArea .searchForm button {
        height: 32px;
        width: 68px;
        background-color: #ea4a36;
        border: none;
        color: #fff;
        float: left;
        cursor: pointer;
    }
    .outer .header > .bottom .searchArea .searchForm button:focus {
        outline: none;
    }
    .login{
        margin-right: 10px;
    }
    p span{
        display: inline-block;
        padding-right: 10px;
    }
</style>