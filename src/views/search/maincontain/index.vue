<template>
    <div class="outer">
        <div class="main">
            <div class="py-container">
                <!--bread-->
                <div class="bread">
                    <ul class="fl sui-breadcrumb">
                        <li>
                            <a href="#">全部结果</a>
                        </li>
                    </ul>
                    <ul class="fl sui-tag" >
                        <li class="with-x" v-show="showbread">{{params.categoryName}}
                            <i @click="delbread">×</i>
                        </li>
<!--                        <li class="with-x">{{params.keyword}}<i>×</i></li>-->
                    </ul>
                </div>
                <!--selector-->
                <div class="clearfix selector">
                    <div class="type-wrap logo">
                        <div class="fl key brand">品牌</div>
                        <div class="value logos">
                            <ul class="logo-list" >
                                <li v-for="brand in trademarkList" :key="brand.tmId">
                                    {{brand.tmName}}
                                </li>
                            </ul>
                        </div>
                        <div class="ext">
                            <a href="javascript:void(0);" class="sui-btn">多选</a>
                            <a href="javascript:void(0);">更多</a>
                        </div>
                    </div>
                    <div class="type-wrap" v-for="cate in attrsList" :key="cate.attrId">
                        <div class="fl key">{{cate.attrName}}</div>
                        <div class="fl value">
                            <ul class="type-list">
                                <li v-for="catelist in cate.attrValueList" >
                                    <a>{{catelist}}</a>
                                </li>
                            </ul>
                        </div>
                        <div class="fl ext"></div>
                    </div>
                </div>
                <!--details-->
                <div class="details clearfix">
                    <div class="sui-navbar">
                        <div class="navbar-inner filter">
                            <ul class="sui-nav">
                                <li class="active" @click="getCompre">
                                    <a href="#">综合</a>
                                </li>
                                <li>
                                    <a href="#">销量</a>
                                </li>
                                <li>
                                    <a href="#">新品</a>
                                </li>
                                <li>
                                    <a href="#">评价</a>
                                </li>
                                <li @click="ascprice">
                                    <a href="#" >价格⬆</a>
                                </li>
                                <li @click="descprice">
                                    <a href="#">价格⬇</a>
                                </li>
                            </ul>
                        </div>
                    </div>

<!--                    goodList-->
                    <div class="goods-list">
                        <ul class="yui3-g">
                            <li class="yui3-u-1-5"
                                v-for="good in goodsList"
                                :key="good.id"
                                @click="navigatedetail"
                                :data-goodtip="good.id"
                            >
                                <div class="list-wrap"  >
                                    <div class="p-img">
                                        <a >
                                            <img :src="good.defaultImg" />
                                        </a>
                                    </div>
                                    <div class="price">
                                        <strong>
                                            <em>¥</em>
                                            <i>{{good.price}}</i>
                                        </strong>
                                    </div>
                                    <div class="cooperate">
                                        <div class="attr">
                                            <a target="_blank"   title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】">{{good.title}}</a>
                                        </div>
                                        <div class="commit">
                                            <i class="command">已有<span>2000</span>人评价</i>
                                        </div>
                                    </div>
                                    <div class="operate">
                                        <a href="success-cart.html" target="_blank" class="sui-btn btn-bordered btn-danger">加入购物车</a>
                                        <a href="javascript:void(0);" class="sui-btn btn-bordered">收藏</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="fr page">
                        <div class="sui-pagination clearfix">
                            <ul>
                                <li class="prev disabled"

                                >
                                    <a  @click="backpage">«上一页</a>
                                </li>
                                <li class="active"
                                    v-for="(page,index) in searchList.totalPages"
                                    v-if="index<3"
                                    @click="choosepage">
                                    <a  :data-pageData="index+1">{{index+1}}</a>
                                </li>
                                <li class="dotted"><span>...</span></li>
                                <li class="next">
                                    <a @click="topage">下一页»</a>
                                </li>
                            </ul>
                            <div class="pagetip">
                                    <span>当前是第{{searchList.pageNo}}页</span>
                                    <span>共{{searchList.totalPages}}页</span>
                            </div>
                        </div>
                    </div>
                </div>
                <!--hotsale-->
                <div class="clearfix hot-sale">
                    <h4 class="title">热卖商品</h4>
                    <div class="hot-list">
                        <ul class="yui3-g">
                            <li class="yui3-u-1-4">
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <img src="./images/like_01.png" />
                                    </div>
                                    <div class="attr">
                                        <em>Apple苹果iPhone 6s (A1699)</em>
                                    </div>
                                    <div class="price">
                                        <strong>
                                            <em>¥</em>
                                            <i>4088.00</i>
                                        </strong>
                                    </div>
                                    <div class="commit">
                                        <i class="command">已有700人评价</i>
                                    </div>
                                </div>
                            </li>
                            <li class="yui3-u-1-4">
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <img src="./images/like_03.png" />
                                    </div>
                                    <div class="attr">
                                        <em>金属A面，360°翻转，APP下单省300！</em>
                                    </div>
                                    <div class="price">
                                        <strong>
                                            <em>¥</em>
                                            <i>4088.00</i>
                                        </strong>
                                    </div>
                                    <div class="commit">
                                        <i class="command">已有700人评价</i>
                                    </div>
                                </div>
                            </li>
                            <li class="yui3-u-1-4">
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <img src="./images/like_04.png" />
                                    </div>
                                    <div class="attr">
                                        <em>256SSD商务大咖，完爆职场，APP下单立减200</em>
                                    </div>
                                    <div class="price">
                                        <strong>
                                            <em>¥</em>
                                            <i>4068.00</i>
                                        </strong>
                                    </div>
                                    <div class="commit">
                                        <i class="command">已有20人评价</i>
                                    </div>
                                </div>
                            </li>
                            <li class="yui3-u-1-4">
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <img src="./images/like_02.png" />
                                    </div>
                                    <div class="attr">
                                        <em>Apple苹果iPhone 6s (A1699)</em>
                                    </div>
                                    <div class="price">
                                        <strong>
                                            <em>¥</em>
                                            <i>4088.00</i>
                                        </strong>
                                    </div>
                                    <div class="commit">
                                        <i class="command">已有700人评价</i>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import {mapState} from 'vuex'
    export default {
        name: "index",
        data(){
            return{
                params:{
                    category1Id:'',
                    category2Id:'',
                    category3Id:'',
                    categoryName:'',
                    keyword:'',
                    props:[],
                    trademark:'',
                    order:'',
                    pageNo:'1',
                    pageSize:'5'
                },
                showbread:true,
            }
        },
        beforeMount() {
            Object.assign(this.params,this.$route.query,this.$route.params)
        },
        mounted() {
            this.getSearchData()
            this.getCompre()
            // this.huoqu()
            // console.log(goodsList)
        },
        methods:{
            //获取搜索的数据
            getSearchData(){
                // this.searchParams=this.$route.query;
                // console.log(this.searchParams)
                this.$store.dispatch('searchList', this.params);
                if(this.params.categoryName!=''){
                    this.showbread=true
                }
            },

            //删除面包屑
            delbread(){
                this.showbread=false;
                this.params.categoryName=undefined;
                this.params.keyword=undefined;
                // Object.assign(this.params,this.$route.query,this.$route.params)
                this.$bus.$on('del',this.params.categoryName)
            },

            //综合排序
            getCompre(){
                this.params.order='1:desc';
                console.log(this.params)
                this.getSearchData()
            },

            //价格升序
            ascprice(){
                this.params.order='2:asc';
                console.log(this.params)
                this.getSearchData()
            },

            //价格降序
            descprice(){
                this.params.order='2:desc';
                console.log(this.params)
                this.getSearchData()
            },

            //选择页面
            choosepage(e){
                // console.log(e)
                let node=e.target
                let {pagedata}=node.dataset
                // console.log(node.dataset.pagedata)
                this.params.pageNo=node.dataset.pagedata
                // console.log(this.params)
                this.getSearchData()
            },
            //上一页
            backpage(){
                // console.log(this.params)
                if(this.params.pageNo>1){
                    this.params.pageNo--;
                    this.getSearchData()
                }
            },

            //获取下一页
            topage(){
                // console.log('上一页',e.target)
                console.log(this.searchList.totalPages)
                if(this.params.pageNo<this.searchList.totalPages){
                    this.params.pageNo++;
                    this.getSearchData()
                }
            },

            //跳转到详情页
            navigatedetail(e){
                let node=e.currentTarget
                let {goodtip}=node.dataset
                // console.log(node.dataset)
                let goodid=node.dataset.goodtip
                this.$router.push({
                    path:'detail/'+goodid,
                })
            }
        },
        watch:{
            $route(){
                // console.log(this.$route.query)
                Object.assign(this.params,this.$route.query,this.$route.params)
                this.getSearchData();
            },

        },
        computed:{
            ...mapGetters(['goodsList',"attrsList","trademarkList"]),
            ...mapState({
                searchList:state=>state.search.searchList
            }),
        }
    }
</script>

<style scoped>
    /*页面修改span样式*/
    span{
        display: inline-block;
        padding-top:10px;
    }
    /*清除浮动*/
    .clearfix::after {
        display: block;
        height: 0;
        content: "";
        clear: both;
        visibility: hidden;
    }
    .outer .main {
        margin: 10px 0;
    }
    .outer .main .py-container {
        width: 1200px;
        margin: 0 auto;
    }
    .outer .main .py-container .bread {
        margin-bottom: 5px;
        overflow: hidden;
    }
    .outer .main .py-container .bread .sui-breadcrumb {
        padding: 3px 15px;
        margin: 0;
        font-weight: 400;
        border-radius: 3px;
        float: left;
    }
    .outer .main .py-container .bread .sui-breadcrumb li {
        display: inline-block;
        line-height: 18px;
    }
    .outer .main .py-container .bread .sui-breadcrumb li a {
        color: #666;
        text-decoration: none;
    }
    .outer .main .py-container .bread .sui-breadcrumb li a:hover {
        color: #4cb9fc;
    }
    .outer .main .py-container .bread .sui-tag {
        margin-top: -5px;
        list-style: none;
        font-size: 0;
        line-height: 0;
        padding: 5px 0 0;
        margin-bottom: 18px;
        float: left;
    }
    .outer .main .py-container .bread .sui-tag .with-x {
        font-size: 12px;
        margin: 0 5px 5px 0;
        display: inline-block;
        overflow: hidden;
        color: #000;
        background: #f7f7f7;
        padding: 0 7px;
        height: 20px;
        line-height: 20px;
        border: 1px solid #dedede;
        white-space: nowrap;
        transition: color 400ms;
        cursor: pointer;
    }
    .outer .main .py-container .bread .sui-tag .with-x i {
        margin-left: 10px;
        cursor: pointer;
        font: 400 14px tahoma;
        display: inline-block;
        height: 100%;
        vertical-align: middle;
    }
    .outer .main .py-container .bread .sui-tag .with-x:hover {
        color: #28a3ef;
    }
    .outer .main .py-container .selector {
        border: 1px solid #ddd;
        margin-bottom: 5px;
        overflow: hidden;
    }
    .outer .main .py-container .selector .logo {
        border-top: 0;
        margin: 0;
        position: relative;
        overflow: hidden;
    }
    .outer .main .py-container .selector .logo .key {
        padding-bottom: 87px!important;
    }
    .outer .main .py-container .selector .type-wrap {
        margin: 0;
        position: relative;
        border-top: 1px solid #ddd;
        overflow: hidden;
    }
    .outer .main .py-container .selector .type-wrap .key {
        width: 100px;
        background: #f1f1f1;
        line-height: 26px;
        text-align: right;
        padding: 10px 10px 0 15px;
        float: left;
    }
    .outer .main .py-container .selector .type-wrap .value {
        overflow: hidden;
        padding: 10px 0 0 15px;
        color: #333;
        margin-left: 120px;
        padding-right: 90px;
    }
    .outer .main .py-container .selector .type-wrap .value .logo-list li {
        float: left;
        border: 1px solid #e4e4e4;
        margin: -1px -1px 0 0;
        width: 105px;
        height: 52px;
        text-align: center;
        line-height: 52px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-weight: 700;
        color: #e1251b;
        font-style: italic;
        font-size: 14px;
    }
    .outer .main .py-container .selector .type-wrap .value .logo-list li img {
        max-width: 100%;
        vertical-align: middle;
    }
    .outer .main .py-container .selector .type-wrap .value .type-list li {
        float: left;
        display: block;
        margin-right: 30px;
        line-height: 26px;
    }
    .outer .main .py-container .selector .type-wrap .value .type-list li a {
        text-decoration: none;
        color: #666;
    }
    .outer .main .py-container .selector .type-wrap .ext {
        position: absolute;
        top: 10px;
        right: 10px;
    }
    .outer .main .py-container .selector .type-wrap .ext .sui-btn {
        display: inline-block;
        padding: 2px 14px;
        box-sizing: border-box;
        margin-bottom: 0;
        font-size: 12px;
        line-height: 18px;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        padding: 0 10px;
        background: #fff;
        border: 1px solid #d5d5d5;
    }
    .outer .main .py-container .selector .type-wrap .ext a {
        color: #666;
    }
    .outer .main .py-container .details {
        margin-bottom: 5px;
    }
    .outer .main .py-container .details .sui-navbar {
        overflow: visible;
        margin-bottom: 0;
    }
    .outer .main .py-container .details .sui-navbar .filter {
        min-height: 40px;
        padding-right: 20px;
        background: #fbfbfb;
        border: 1px solid #e2e2e2;
        padding-left: 0;
        border-radius: 0;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.065);
    }
    .outer .main .py-container .details .sui-navbar .filter .sui-nav {
        position: relative;
        left: 0;
        display: block;
        float: left;
        margin: 0 10px 0 0;
    }
    .outer .main .py-container .details .sui-navbar .filter .sui-nav li {
        float: left;
        line-height: 18px;
    }
    .outer .main .py-container .details .sui-navbar .filter .sui-nav li a {
        display: block;
        cursor: pointer;
        padding: 11px 15px;
        color: #777;
        text-decoration: none;
    }
    .outer .main .py-container .details .sui-navbar .filter .sui-nav li.active a {
        background: #e1251b;
        color: #fff;
    }
    .outer .main .py-container .details .goods-list {
        margin: 20px 0;
    }
    .outer .main .py-container .details .goods-list ul {
        display: flex;
        flex-wrap: wrap;
    }
    .outer .main .py-container .details .goods-list ul li {
        height: 100%;
        width: 20%;
        margin-top: 10px;
        line-height: 28px;
    }
    .outer .main .py-container .details .goods-list ul li .list-wrap .p-img {
        padding-left: 15px;
        width: 215px;
        height: 255px;
    }
    .outer .main .py-container .details .goods-list ul li .list-wrap .p-img a {
        color: #666;
    }
    .outer .main .py-container .details .goods-list ul li .list-wrap .p-img a img {
        width: 100%;
        height: 100%;
        /*max-width: 100%;*/
        /*height: auto;*/
        vertical-align: middle;
    }
    .outer .main .py-container .details .goods-list ul li .list-wrap .price {
        padding-left: 15px;
        font-size: 18px;
        color: #c81623;
    }

    .pagetip span{
        display: inline-block;
        padding: 10px;
        position: relative;
        margin-left: 20px;
    }

    .outer .main .py-container .details .goods-list ul li .list-wrap .price strong {
        font-weight: 700;
    }
    .outer .main .py-container .details .goods-list ul li .list-wrap .price strong i {
        margin-left: -5px;
    }
    .outer .main .py-container .details .goods-list ul li .list-wrap .attr {
        padding-left: 15px;
        width: 85%;
        overflow: hidden;
        margin-bottom: 8px;
        min-height: 38px;
        cursor: pointer;
        line-height: 1.8;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
    }
    .outer .main .py-container .details .goods-list ul li .list-wrap .attr a {
        color: #333;
        text-decoration: none;
    }
    .outer .main .py-container .details .goods-list ul li .list-wrap .commit {
        padding-left: 15px;
        height: 22px;
        font-size: 13px;
        color: #a7a7a7;
    }
    .outer .main .py-container .details .goods-list ul li .list-wrap .commit span {
        font-weight: 700;
        color: #646fb0;
    }
    .outer .main .py-container .details .goods-list ul li .list-wrap .operate {
        padding: 12px 15px;
    }
    .outer .main .py-container .details .goods-list ul li .list-wrap .operate .sui-btn {
        display: inline-block;
        padding: 2px 14px;
        box-sizing: border-box;
        margin-bottom: 0;
        font-size: 12px;
        line-height: 18px;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        border-radius: 0;
        background-color: transparent;
        margin-right: 15px;
    }
    .outer .main .py-container .details .goods-list ul li .list-wrap .operate .btn-bordered {
        min-width: 85px;
        background-color: transparent;
        border: 1px solid #8c8c8c;
        color: #8c8c8c;
    }
    .outer .main .py-container .details .goods-list ul li .list-wrap .operate .btn-bordered:hover {
        border: 1px solid #666;
        color: #fff !important;
        background-color: #666;
        text-decoration: none;
    }
    .outer .main .py-container .details .goods-list ul li .list-wrap .operate .btn-danger {
        border: 1px solid #e1251b;
        color: #e1251b;
    }
    .outer .main .py-container .details .goods-list ul li .list-wrap .operate .btn-danger:hover {
        border: 1px solid #e1251b;
        background-color: #e1251b;
        color: white!important;
        text-decoration: none;
    }
    .outer .main .py-container .details .page {
        width: 733px;
        height: 66px;
        overflow: hidden;
        float: right;
    }
    .outer .main .py-container .details .page .sui-pagination {
        margin: 18px 0;
    }
    .outer .main .py-container .details .page .sui-pagination ul {
        margin-left: 0;
        margin-bottom: 0;
        vertical-align: middle;
        width: 490px;
        float: left;
    }
    .outer .main .py-container .details .page .sui-pagination ul li {
        line-height: 18px;
        display: inline-block;
    }
    .outer .main .py-container .details .page .sui-pagination ul li a {
        position: relative;
        float: left;
        line-height: 18px;
        text-decoration: none;
        background-color: #fff;
        border: 1px solid #e0e9ee;
        margin-left: -1px;
        font-size: 14px;
        padding: 9px 18px;
        color: #333;
    }
    .outer .main .py-container .details .page .sui-pagination ul li.active a {
        background-color: #fff;
        color: #e1251b;
        border-color: #fff;
        cursor: default;
    }
    .outer .main .py-container .details .page .sui-pagination ul li.prev a {
        background-color: #fafafa;
    }
    .outer .main .py-container .details .page .sui-pagination ul li.disabled a {
        color: #999;
        cursor: default;
    }
    .outer .main .py-container .details .page .sui-pagination ul li.dotted span {
        margin-left: -1px;
        position: relative;
        float: left;
        line-height: 18px;
        text-decoration: none;
        background-color: #fff;
        font-size: 14px;
        border: 0;
        padding: 9px 18px;
        color: #333;
    }
    .outer .main .py-container .details .page .sui-pagination ul li.next {
        cursor:pointer;
    }
    .outer .main .py-container .details .page .sui-pagination ul li.next a {
        background-color: #fafafa;
    }
    .outer .main .py-container .details .page .sui-pagination div {
        color: #333;
        font-size: 14px;
        float: right;
        width: 241px;
    }
    .outer .main .py-container .hot-sale {
        margin-bottom: 5px;
        border: 1px solid #ddd;
    }
    .outer .main .py-container .hot-sale .title {
        font-weight: 700;
        font-size: 14px;
        line-height: 21px;
        border-bottom: 1px solid #ddd;
        background: #f1f1f1;
        color: #333;
        margin: 0;
        padding: 5px 0 5px 15px;
    }
    .outer .main .py-container .hot-sale .hot-list {
        padding: 15px;
    }
    .outer .main .py-container .hot-sale .hot-list ul {
        display: flex;
    }
    .outer .main .py-container .hot-sale .hot-list ul li {
        width: 25%;
        height: 100%;
    }
    .outer .main .py-container .hot-sale .hot-list ul li .list-wrap .p-img,
    .outer .main .py-container .hot-sale .hot-list ul li .list-wrap .price,
    .outer .main .py-container .hot-sale .hot-list ul li .list-wrap .attr,
    .outer .main .py-container .hot-sale .hot-list ul li .list-wrap .commit {
        padding-left: 15px;
    }
    .outer .main .py-container .hot-sale .hot-list ul li .list-wrap .p-img img {
        max-width: 100%;
        vertical-align: middle;
        border: 0;
    }
    .outer .main .py-container .hot-sale .hot-list ul li .list-wrap .attr {
        width: 85%;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        margin-bottom: 8px;
        min-height: 38px;
        cursor: pointer;
        line-height: 1.8;
    }
    .outer .main .py-container .hot-sale .hot-list ul li .list-wrap .price {
        font-size: 18px;
        color: #c81623;
    }
    .outer .main .py-container .hot-sale .hot-list ul li .list-wrap .price strong {
        font-weight: 700;
    }
    .outer .main .py-container .hot-sale .hot-list ul li .list-wrap .price strong i {
        margin-left: -5px;
    }
    .outer .main .py-container .hot-sale .hot-list ul li .list-wrap .commit {
        height: 22px;
        font-size: 13px;
        color: #a7a7a7;
    }

    .cooperate{
        width: 200px;
        height: 100px;
    }
</style>