<template>
    <div class="outer">
        <div class="list-container">
            <div class="sortList clearfix">
                <div class="center">
                    <!--banner轮播-->
                    <div class="swiper-container" ref="swiper">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="item in bannerList" :key="item.id">
                                <img :src="item.imgUrl" alt="">
                            </div>
                        </div>
                        <!-- 如果需要分页器 -->
                        <div class="swiper-pagination"></div>

                        <!-- 如果需要导航按钮 -->
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>
                    </div>
                </div>
                <div class="right">
                    <div class="news">
                        <h4>
                            <em class="fl">尚品汇快报</em>
                            <span class="fr tip">更多 ></span>
                        </h4>
                        <div class="clearix"></div>
                        <ul class="news-list unstyled">
                            <li>
                                <span class="bold">[特惠]</span>备战开学季 全民半价购数码
                            </li>
                            <li>
                                <span class="bold">[公告]</span>备战开学季 全民半价购数码
                            </li>
                            <li>
                                <span class="bold">[特惠]</span>备战开学季 全民半价购数码
                            </li>
                            <li>
                                <span class="bold">[公告]</span>备战开学季 全民半价购数码
                            </li>
                            <li>
                                <span class="bold">[特惠]</span>备战开学季 全民半价购数码
                            </li>
                        </ul>
                    </div>
                    <ul class="lifeservices">
                        <li class=" life-item ">
                            <i class="list-item"></i>
                            <span class="service-intro">话费</span>
                        </li>
                        <li class=" life-item ">
                            <i class="list-item"></i>
                            <span class="service-intro">机票</span>
                        </li>
                        <li class=" life-item ">
                            <i class="list-item"></i>
                            <span class="service-intro">电影票</span>
                        </li>
                        <li class=" life-item ">
                            <i class="list-item"></i>
                            <span class="service-intro">游戏</span>
                        </li>
                        <li class=" life-item">
                            <i class="list-item"></i>
                            <span class="service-intro">彩票</span>
                        </li>
                        <li class=" life-item">
                            <i class="list-item"></i>
                            <span class="service-intro">加油站</span>
                        </li>
                        <li class=" life-item">
                            <i class="list-item"></i>
                            <span class="service-intro">酒店</span>
                        </li>
                        <li class=" life-item">
                            <i class="list-item"></i>
                            <span class="service-intro">火车票</span>
                        </li>
                        <li class=" life-item ">
                            <i class="list-item"></i>
                            <span class="service-intro">众筹</span>
                        </li>
                        <li class=" life-item">
                            <i class="list-item"></i>
                            <span class="service-intro">理财</span>
                        </li>
                        <li class=" life-item">
                            <i class="list-item"></i>
                            <span class="service-intro">礼品卡</span>
                        </li>
                        <li class=" life-item">
                            <i class="list-item"></i>
                            <span class="service-intro">白条</span>
                        </li>
                    </ul>
                    <div class="ads">
                        <img src="./images/ad1.png" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from "vuex"
    import Swiper from "swiper"
    export default {
        name: "index",
        mounted() {
            this.$store.dispatch('bannerList')
            setTimeout(()=>{
                var mySwiper = new Swiper ('.swiper-container', {
                    direction: 'horizontal', // 垂直切换选项
                    loop: true, // 循环模式选项
                    autoplay:{
                      stopOnLastSlide:true
                    },
                    // 如果需要分页器
                    pagination: {
                        el: '.swiper-pagination',
                    },

                    // 如果需要前进后退按钮
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },

                    // 如果需要滚动条
                    scrollbar: {
                        el: '.swiper-scrollbar',
                    },
                })
            },1000)
        },
        computed:{
            ...mapState({
                bannerList: state=>state.home.bannerList,
            }),
            // console.log()
        }
    }

</script>

<style scoped lang="less">
    .outer .list-container {
        width: 1200px;
        margin: 0 auto;
    }
    .outer .list-container .sortList {
        height: 464px;
        padding-left: 210px;
    }
    .outer .list-container .sortList .center {
        box-sizing: border-box;
        width: 740px;
        height: 100%;
        padding: 5px;
        float: left;
    }
    .outer .list-container .sortList .right {
        float: left;
        width: 250px;
    }
    .outer .list-container .sortList .right .news {
        border: 1px solid #e4e4e4;
        margin-top: 5px;
    }
    .outer .list-container .sortList .right .news h4 {
        border-bottom: 1px solid #e4e4e4;
        padding: 0px 10px;
        margin: 0px 5px 0;
        line-height: 22px;
        overflow: hidden;
        font-size: 14px;
    }
    .outer .list-container .sortList .right .news h4 .fl {
        float: left;
    }
    .outer .list-container .sortList .right .news h4 .fr {
        float: right;
        font-size: 12px;
        font-weight: 400;
    }
    .outer .list-container .sortList .right .news .news-list {
        padding: 0px 15px;
        line-height: 20px;
    }
    .outer .list-container .sortList .right .news .news-list .bold {
        font-weight: 700;
    }
    .outer .list-container .sortList .right .lifeservices {
        border-right: 1px solid #e4e4e4;
        overflow: hidden;
        display: flex;
        flex-wrap: wrap;
        padding:0px;
    }
    .outer .list-container .sortList .right .lifeservices .life-item {
        border-left: 1px solid #e4e4e4;
        border-bottom: 1px solid #e4e4e4;
        margin-right: -1px;
        height: 64px;
        text-align: center;
        position: relative;
        cursor: pointer;
        width: 25%;
    }
    .outer .list-container .sortList .right .lifeservices .life-item .list-item {
        background-image: url(./images/icons.png);
        width: 61px;
        height: 40px;
        display: block;
    }
    .outer .list-container .sortList .right .lifeservices .life-item .service-intro {
        line-height: 22px;
        width: 60px;
        display: block;
    }
    .outer .list-container .sortList .right .lifeservices .life-item:nth-child(1) .list-item {
        background-position: 0px -5px;
    }
    .outer .list-container .sortList .right .lifeservices .life-item:nth-child(2) .list-item {
        background-position: -62px -5px;
    }
    .outer .list-container .sortList .right .lifeservices .life-item:nth-child(3) .list-item {
        background-position: -126px -5px;
    }
    .outer .list-container .sortList .right .lifeservices .life-item:nth-child(4) .list-item {
        background-position: -190px -5px;
    }
    .outer .list-container .sortList .right .lifeservices .life-item:nth-child(5) .list-item {
        background-position: 0px -76px;
    }
    .outer .list-container .sortList .right .lifeservices .life-item:nth-child(6) .list-item {
        background-position: -62px -76px;
    }
    .outer .list-container .sortList .right .lifeservices .life-item:nth-child(7) .list-item {
        background-position: -126px -76px;
    }
    .outer .list-container .sortList .right .lifeservices .life-item:nth-child(8) .list-item {
        background-position: -190px -76px;
    }
    .outer .list-container .sortList .right .lifeservices .life-item:nth-child(9) .list-item {
        background-position: 0px -146px;
    }
    .outer .list-container .sortList .right .lifeservices .life-item:nth-child(10) .list-item {
        background-position: -62px -146px;
    }
    .outer .list-container .sortList .right .lifeservices .life-item:nth-child(11) .list-item {
        background-position: -126px -146px;
    }
    .outer .list-container .sortList .right .lifeservices .life-item:nth-child(12) .list-item {
        background-position: -190px -146px;
    }
    .outer .list-container .sortList .right .ads {
        margin-top: 5px;
    }
    .outer .list-container .sortList .right .ads img {
        /*width: 100px;*/
        /*height: 100px;*/
        opacity: 0.8;
        transition: all 400ms;
    }
    .outer .list-container .sortList .right .ads img:hover {
        opacity: 1;
    }
    li{
        font-size: 10px;
    }
</style>