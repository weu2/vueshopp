<template>
  <div id="app">
    <keep-alive >
    <Header v-show="$route.meta.show"></Header>
    </keep-alive>
    <keep-alive >
      <router-view></router-view>
    </keep-alive>
    <Footer v-show="$route.meta.show"></Footer>
<!--    <router-view to="/"></router-view>-->
  </div>
</template>

<script>
import Header from './components/Header/index'
// import Layout from "@/views/Layout";
import Footer from "./components/Footer/index";


export default {

  name: 'App',
  components: {
    // HelloWorld
    Header,
    // Layout,
    Footer
    // Login
  },
}
</script>

<style>

</style>
