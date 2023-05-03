<template>
    <div>
        <typenav></typenav>
        <ListContainer></ListContainer>
        <TodayRecommend></TodayRecommend>
        <Rank></Rank>
        <Like></Like>
        <Floor></Floor>
<!--        <Floor></Floor>-->
        <Brand></Brand>
    </div>
</template>

<script>
    import typenav from './typenav/index'
    import ListContainer from './ListContainer/index'
    import TodayRecommend from './TodayRecommend/index'
    import Rank from './Rank/index'
    import Like  from './Like/index'
    import Floor  from './Floor/index'
    import Brand  from './Brand/index'
    // import {mapState} from 'vuex'
    import '../../store/index'
    import '../../store/home/index'

    export default {
        name: "index",
        components:{
            typenav,
            ListContainer,
            TodayRecommend,
            Rank,
            Like,
            Floor,
            Brand
        },
        mounted() {

        },

    }
</script>

<style scoped>

</style>