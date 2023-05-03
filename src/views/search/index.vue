<template>
    <div>
<!--        我是search:{{$route.params.keyword}}-->
        <typenav></typenav>
        <toolbar></toolbar>
        <maincontain></maincontain>
<!--        <Header></Header>-->
<!--        {{$route.params}}-->
<!--        query:{{$route.query.k}}-->
    </div>
</template>

<script>
    import typenav from "../home/typenav/index"
    import toolbar from "./toolbar/index.vue"
    import maincontain from "./maincontain/index.vue"

 export default {
        components:{
            typenav,
            toolbar,
            maincontain,
        }
 }
</script>

<style>

</style>