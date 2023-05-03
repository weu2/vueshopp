<template>
    <div class="outer">
        <div class="type-nav">
        <div class="container" @click="enter">
            <h2 class="all" >全部商品分类</h2>
            <nav class="nav">
                <a href="###">服装城</a>
                <a href="###">美妆馆</a>
                <a href="###">尚品汇超市</a>
                <a href="###">全球购</a>
                <a href="###">闪购</a>
                <a href="###">团购</a>
                <a href="###">有趣</a>
                <a href="###">秒杀</a>
            </nav>
            <div class="sort" v-show="show" >
                <div class="all-sort-list2"  @click="changeroute" >
                    <div
                            class="item" v-for="(c1,index) in categorylist"
                            :key="c1.categoryId"
                    >
                        <h3>
                            <a
                               :data-categoryName="c1.categoryName"
                               :data-category1Id="c1.categoryId"
                            >{{c1.categoryName}}</a>
                        </h3>
                        <div class="item-list clearfix">
                            <div class="subitem" >
                                <dl  v-for="(c2,index) in c1.categoryChild" :key="c2.categoryId">
                                    <dt>
                                        <a
                                                :data-categoryName="c2.categoryName"
                                                :data-category2Id="c2.categoryId"
                                        >{{c2.categoryName}}</a>
                                    </dt>
                                    <dd>
                                        <em v-for="(c3,index) in c2.categoryChild" :key="c3.categoryId">
                                            <a
                                                    :data-categoryName="c3.categoryName"
                                                    :data-category3Id="c3.categoryId"
                                            >{{c3.categoryName}}</a>
                                        </em>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    // import '../../../store/index'
    import {mapState} from 'vuex'
    export default {
        name: "index",
        data(){
            return {
                isMouse:false,
                show:true
            }
        },
        methods:{
            changeroute(event){
                let node=event.target
                let {
                    categoryname,
                    category1id,
                    category2id,
                    category3id
                }=node.dataset
                console.log('node',node.dataset)
                if(categoryname){
                    let location={name:'search'}
                    let query={categoryName:categoryname}
                    if(category1id){
                       query.category1Id=category1id
                    }else if(category2id){
                        query.category2Id=category2id
                    }else if(category3id){
                        query.category3Id=category3id
                    }
                    location.query=query
                    this.$router.push(location)
                }
                // console.log('传递e',event)
            },
            enter(){
                if(this.$route.path=='/search'){
                    this.show=!this.show;
                }
            },
        },
        mounted() {
            this.$store.dispatch('categorylist')
            if(this.$route.path=='/search'){
                this.show=false;
            }
        },
        computed:{
            ...mapState({
                categorylist:(state)=>{
                    return state.home.categorylist
                }
            }),
        },
    }
</script>

<style scoped lang="less">
    .outer .type-nav {
        border-bottom: 2px solid #e1251b;
    }
    .outer .type-nav .container {
        width: 1200px;
        height: 30px;
        margin: 0 auto;
        display: flex;
        position: relative;
    }
    .outer .type-nav .container .all {
        width: 210px;
        height: 30px;
        background-color: #e1251b;
        line-height: 30px;
        text-align: center;
        color: #fff;
        font-size: 20px;
        font-weight: bold;
    }
    .outer .type-nav .container .nav a {
        height: 30px;
        margin: 0 22px;
        line-height: 20px;
        font-size: 20px;
        color: #333;
    }
    .outer .type-nav .container .sort {
        left: 0;
        top: 38px;
        width: 210px;
        height: 461px;
        position: absolute;
        background: #fafafa;
        z-index: 999;
    }
    .outer .type-nav .container .sort .all-sort-list2 .item h3 {
        line-height: 27px;
        font-size: 14px;
        font-weight: 400;
        overflow: hidden;
        padding: 0 20px;
        margin: 0;
    }
    .outer .type-nav .container .sort .all-sort-list2 .item :hover{
        background-color: skyblue;
        /*color:#ffffff;*/
        cursor:pointer
    }

    .outer .type-nav .container .sort .all-sort-list2 .item h3 a {
        color: #333;
    }
    .outer .type-nav .container .sort .all-sort-list2 .item .item-list {
        display: none;
        position: absolute;
        width: 734px;
        min-height: 460px;
        background: #f7f7f7;
        left: 210px;
        border: 1px solid #ddd;
        top: 0;
        z-index: 9999 !important;
    }
    .outer .type-nav .container .sort .all-sort-list2 .item .item-list .subitem {
        float: left;
        width: 650px;
        padding: 0 4px 0 8px;
        height: 500px;
        overflow: hidden;
        cursor:pointer;
    }
    .outer .type-nav .container .sort .all-sort-list2 .item .item-list  :hover{
        background-color: #f7f7f7;
        }
    .outer .type-nav .container .sort .all-sort-list2 .item .item-list .subitem dl {
        border-top: 1px solid #eee;
        padding: 6px 0;
        overflow: hidden;
        zoom: 1;
    }
.outer .type-nav .container .sort .all-sort-list2 .item .item-list .subitem dl.fore {
    border-top: 0;
    font-size: 10px;
}
.outer .type-nav .container .sort .all-sort-list2 .item .item-list .subitem dl dt {
    float: left;
    width: 66px;
    line-height: 20px;
    text-align: right;
    padding: 3px 6px 0 0;
    font-weight: 700;
}
.outer .type-nav .container .sort .all-sort-list2 .item .item-list .subitem dl dd {
    float: left;
    width: 500px;
    padding: 3px 0 0;
    overflow: hidden;
}
.outer .type-nav .container .sort .all-sort-list2 .item .item-list .subitem dl dd em {
    float: left;
    height: 13px;
    line-height: 13px;
    padding: 0 8px;
    margin-top: 5px;
    border-left: 1px solid #ccc;
    font-size: 10px;
}

.outer .type-nav .container .sort .all-sort-list2 .item:hover .item-list {
    display: block;
}
.clearfix::after {
    display: block;
    height: 0;
    content: "";
    clear: both;
    visibility: hidden;
}
</style>