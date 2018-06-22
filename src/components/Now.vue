<template>
  <div>
    <div  class="content">
      <list
        :lis="lists"
      >
      </list>
    </div>
    <div class="loading" v-if="isLoading"></div>
  </div>
</template>

<script>
  import list from './List'
  export default {
    name:'now',
    components:{list},
    data:function () {
      return {
        lists:{},
        isLoading:true
      }
    },
    created:function () {
      this.$http.jsonp('https://api.douban.com/v2/movie/in_theaters').then(function (response) {
        this.lists = response.data;
        this.isLoading = false;
      })
    }
  }
</script>

<style scoped>
  .content{
    width:100%;
    box-sizing: border-box;
    padding:1.1rem 0.17rem 0.65rem;
    overflow: auto;
  }
  .loading{
    position: fixed;
    z-index: 5;
    top:1rem;
    bottom:0.67rem;
    left:0;
    right:0;
    width:100%;
    background: #fff url("../assets/images/isLoading.gif") no-repeat center center;
    background-size: 1.24rem 1.24rem;
  }
</style>
