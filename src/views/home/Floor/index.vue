<template>
    <div>
    <div class="outer" v-for="c1 in floorsList" :key="c1.id">
        <div class="floor">
            <div class="py-container">
                <div class="title clearfix">
                    <h3 class="fl">家用电器</h3>
                    <div class="fr">
                        <ul class="nav-tabs clearfix">
                            <li class="active">
                                <a href="#tab1"
                                   data-toggle="tab"
                                   v-for="nav in c1.navList"
                                >
                                    {{nav.text}}</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="tab-content">
                    <div class="tab-pane">
                        <div class="floor-1">
                            <div class="blockgary">
                                <ul class="jd-list">
                                    <li v-for="c4 in c1.keywords">{{c4}}</li>
                                </ul>
                                <img :src="c1.imgUrl" />
                            </div>
                            <div class="floorBanner">
                                <div class="swiper-container" id="floor2Swiper">
                                    <div class="swiper-wrapper" >
                                        <div class="swiper-slide"
                                             v-for="c2 in c1.carouselList"
                                             :key="c2.id">
                                            <img :src="c2.imgUrl">
                                        </div>
                                    </div>
                                    <!-- 如果需要分页器 -->
                                    <div class="swiper-pagination"></div>

                                    <!-- 如果需要导航按钮 -->
                                    <div class="swiper-button-prev"></div>
                                    <div class="swiper-button-next"></div>
                                </div>
                            </div>
                            <div class="split">
                                <span class="floor-x-line"></span>
                                <div class="floor-conver-pit"
                                     v-for="c3 in c1.recommendList"
                                     :key="c3.index"

                                >
                                    <img :src="c3" />
                                </div>

                            </div>
                            <div class="split center">
                                <img :src="c1.bigImg" />
                            </div>
                            <div class="split">
                                <span class="floor-x-line"></span>
                                <div class="floor-conver-pit"
                                     v-for="c3 in c1.recommendList.slice(2)"
                                     :key="c3.index">
                                    <img :src="c3" />
                                </div>
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
    import {getFloors} from "@/api";
    import {mapState} from "vuex"

    export default {
        name: "index",

        mounted() {
            this.$store.dispatch("floorsList")

        },
        computed:{
            ...mapState({
                floorsList:state=>state.home.floorList
            })
        }
    }
</script>

<style scoped lang="less" rel="stylesheet">
    .outer .floor {
        margin-top: 15px;
    }
    .outer .floor .py-container {
        width: 1200px;
        margin: 0 auto;
    }
    .outer .floor .py-container .title .fl {
        float: left;
        color: #c81623;
        font-size: 20px;
        line-height: 30px;
        margin: 9px 0;
        font-weight: 700;
    }
    .outer .floor .py-container .title .fr {
        float: right;
    }
    .outer .floor .py-container .title .fr .nav-tabs {
        margin: 10px 0 0;
        display: inline-block;
    }
    .outer .floor .py-container .title .fr .nav-tabs li {
        float: left;
        line-height: 18px;
    }
    .outer .floor .py-container .title .fr .nav-tabs li a {
        padding-top: 1px;
        font-weight: 400;
        background-color: #fff;
    }
    .outer .floor .py-container .title .fr .nav-tabs li a::after {
        content: "|";
        padding: 0 10px;
    }
    .outer .floor .py-container .title .fr .nav-tabs li:nth-child(7) a::after {
        content: "";
    }
    .outer .floor .py-container .title .fr .nav-tabs li.active a {
        color: #e1251b;
    }
    .outer .floor .py-container .tab-content {
        border-top: 2px solid #c81623;
        border-bottom: 1px solid #e4e4e4;
    }
    .outer .floor .py-container .tab-content .tab-pane  {
        overflow:hidden
    }
    .outer .floor .py-container .tab-content .tab-pane .floor-1 {
        height: 360px;
        display: flex;
    }
    .outer .floor .py-container .tab-content .tab-pane .floor-1 .blockgary {
        width: 210px;
        height: 100%;
        background: #f7f7f7;
    }
    .outer .floor .py-container .tab-content .tab-pane .floor-1 .blockgary .jd-list {
        padding: 15px 0;
        overflow: hidden;
    }
    .outer .floor .py-container .tab-content .tab-pane .floor-1 .blockgary .jd-list li {
        list-style-type: none;
        float: left;
        width: 40%;
        margin: 0 10px;
        border-bottom: 1px solid #e4e4e4;
        text-align: center;
        line-height: 26px;
    }
    .outer .floor .py-container .tab-content .tab-pane .floor-1 .blockgary img {
        width: 100%;
    }
    .outer .floor .py-container .tab-content .tab-pane .floor-1 .floorBanner {
        width: 330px;
        height: 100%;
    }
    .outer .floor .py-container .tab-content .tab-pane .floor-1 .split {
        width: 220px;
        height: 100%;
        position: relative;
    }
    .outer .floor .py-container .tab-content .tab-pane .floor-1 .split .floor-x-line {
        position: absolute;
        background: #e4e4e4;
        width: 220px;
        height: 1px;
        top: 180px;
    }
    .outer .floor .py-container .tab-content .tab-pane .floor-1 .split .floor-conver-pit {
        width: 100%;
        height: 50%;
    }
    .outer .floor .py-container .tab-content .tab-pane .floor-1 .split .floor-conver-pit img {
        width: 100%;
        height: 100%;
        transition: all 400ms;
    }
    .outer .floor .py-container .tab-content .tab-pane .floor-1 .split .floor-conver-pit img:hover {
        opacity: 0.8;
    }
    .outer .floor .py-container .tab-content .tab-pane .floor-1 .center {
        border: 1px solid #e4e4e4;
    }
    .clearfix::after {
        display: block;
        height: 0;
        content: "";
        clear: both;
        visibility: hidden;
    }
</style>