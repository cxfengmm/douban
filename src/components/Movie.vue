<template>
  <div>
    <div class="movie-details">
      <router-link to="/hot">
        <span class="back"></span>
      </router-link>
      <div class="photoWrap">
        <img :src="results.images.small" alt="">
      </div>
      <div class="movieContent">
        <div class="movieInfo clearfix">
          <div class="fl">
            <h3 class="movieName">{{results.title}}</h3>
            <p><span>{{results.year}}</span>/<span v-if="results.countries">{{results.countries[0]}}</span></p>
            <p>原名：{{results.original_title}}</p>
            <p>导演：<span v-if="results.directors">{{results.directors[0].name}}</span></p>
            <p>类型：<span v-for="val in results.genres">{{val}}&nbsp;</span></p>
          </div>
          <div class="fr rate">
            <p>豆瓣评分</p>
            <p>{{results.rating.average}}</p>
            <p>评论人数</p>
            <p>{{results.ratings_count}}</p>
          </div>
        </div>
        <span class="heng"></span>
        <div class="movieIntroduce">
          <p>剧情简介</p>
          <p class="movieCon">
            {{results.summary}}
          </p>
        </div>
      </div>
    </div>
    <!--<div class="loading" v-show="isLoading"></div>-->
  </div>
</template>

<script>
  import bus from '../assets/js/eventBus'
    export default {
      name:'movie',
      components:{},
      data:function () {
        return{
          results:{},
          isLoading:true
        }
      },
      mounted:function () {
        var that = this
        bus.$on('sendMsg',function (details) {
          that.results = details;
//          that.isLoading = false;
        })
      }
    }
</script>

<style scoped>
  .loading{
    position: absolute;
    left:0;
    top:0;
    width:100%;
    height:100vh;
    background: #eeeeee;
    z-index:8;
    background: url("../assets/images/isLoading.gif") no-repeat center;
    background-size: 100% 100%;
  }
  .movie-details{
    padding:0;
    height:100vh;
    position: relative;
    z-index:2;
    background: #fff;
  }
  .back{
    position: absolute;
    left:0.15rem;
    top:0.1rem;
    width:0.2rem;
    height:0.2rem;
    background: url("../assets/images/back.png");
    background-size: 100% 100%;
    z-index:3;
  }
  .photoWrap{
    width: 100%;
    height:3.5rem;
    background: #555;
    position: relative;
  }
  .photoWrap img{
    position: absolute;
    left:0;
    top:0;
    right:0;
    bottom:0;
    margin:auto auto;
    width:2rem;
    height:2.8rem;
  }
  .movieContent{
    padding:0.1rem 0.2rem;
    background: #fff;
    font-size:0.14rem;
    line-height:0.24rem;
  }
  .heng{
    display: block;
    width:100%;
    height:0.02rem;
    background:  #e1e1e1;
    margin:0.15rem 0;
  }
  .movieInfo .movieName{
    font-size:0.2rem;
    line-height:0.32rem;
    height: 0.32rem;
  }
  .movieInfo div:nth-child(1){
    width:2.5rem;
  }
  .rate{
    width:0.9rem;
    height:0.96rem;
    border:0.02rem solid #eaeaea;
    background: #f8f8f8;
    text-align: center;
  }
  .movieCon{
    text-indent:0.28rem;
  }
</style>
