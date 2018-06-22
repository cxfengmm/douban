<template>
  <div id="app">

    <Head></Head>


    <keep-alive>
      <router-view></router-view>
    </keep-alive>

    <Page></Page> 
    <Foot></Foot>
     

  </div>
</template>

<script>
  import Head from './components/Head'
  import Foot from './components/Foot'
  import Page from './components/Page'
  export default {
    name: 'app',
    components:{Head,Foot,Page}
  }
</script>

<style>
  @import "./assets/css/common.css";
</style>
