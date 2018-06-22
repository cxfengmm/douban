<template>
  <div class="head">
    <div class="searchBar clearfix">
      <span class="fl logo"></span>
      <input
        type="text"
        class="fl search"
        placeholder="电影/影人/标签"
        v-model="val"
      >
      <router-link :to="{name:'search',query:{q:val}}">
        <span class="searchBtn"></span>
      </router-link>
    </div>
    <div class="choice clearfix">
      <router-link to="/now">
        <span
          @click="tab"
          :class="{active:'now'==onOff}"
        >
          正在热映
        </span>
      </router-link>
      <router-link to="/will">
        <span
          @click="tab"
          :class="{active:'will'==onOff}"
        >
          即将上映
        </span>
      </router-link>
    </div>
  </div>
</template>

<script>
    export default {
      name:'head',
      components:{},
      data:function () {
        return {
          onOff:'now',
          val:''
        }
      },
      methods:{
        tab:function () {
          var that = this
          setTimeout(function () {
            var h = window.location.hash.substring(2);
            if(h=='now'){
              that.onOff = 'now';
            }else if(h=='will'){
              that.onOff = 'will';
            }
          })
        }
      }
    }
</script>

<style scoped>
  .head{
    margin-bottom: 0.08rem;
    position: fixed;
    top:0;
    left:0;
    background: #fff;
  }
  .searchBar{
    width:100%;
    height:0.55rem;
    box-sizing: border-box;
    padding:0.09rem 0.10rem;
    position: relative;
  }
  .logo{
    width:0.35rem;
    height:0.35rem;
    margin-right: 0.13rem;
    background: url("../assets/images/logo.png") no-repeat center;
    background-size: 100% 100%;
  }
  .search{
    width:3.2rem;
    height:0.37rem;
    font-size:0.16rem;
    line-height:0.37rem;
    text-align: center;
    background: #eeeeee;
    border-radius:0.05rem;
    color: #868686;
  }
  .searchBtn{
    position: absolute;
    right:0.15rem;
    top:0.16rem;
    width:0.32rem;
    height:0.32rem;
    background: url("../assets/images/search.png") no-repeat;
    background-size: 0.22rem 0.22rem;
  }

  .choice span{
    float: left;
    width:50%;
    height: 0.45rem;
    box-sizing: border-box;
    border-bottom: 0.02rem solid transparent;
    color: #868686;
    font-size:0.18rem;
    line-height:0.42rem;
    text-align: center;
  }
  .choice span.active{
    border-bottom-color: #6bcb7b;
    color: #6bcb7b;
  }

</style>
