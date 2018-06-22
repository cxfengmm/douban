<template>
  <div>
    <div class="content">
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
      name:'search',
      components:{list},
      data:function () {
        return{
          lists:{},
          q:'',
          isLoading:true
        }
      },
      methods:{
        getMsg:function () {
          this.q = this.$route.query.q;
          var _this = this;
          this.$http.jsonp('https://api.douban.com/v2/movie/search?q='+this.q,{params:{q:this.q}}).then(function (response) {
            this.lists = response.data;
            this.isLoading = false;
          })
        }
      },
      created:function () {
        this.getMsg();
      },
      watch: {
        // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可
        '$route': function () {
          this.getMsg();
          this.isLoading = false;
        }
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
