<template>
  <ul>
    <router-link to="/movie">
      <li
        class="list clearfix"
        v-for="val in lis.subjects"
        @click="getDetails(val.id)"
      >
        <div class="fl pic">
          <img
            :src="val.images.small"
          >
        </div>
        <div class="fl details">
          <p class="movieName">{{val.title}}</p>
          <p class="average">评分：<span>{{val.rating.average}}</span></p>
          <p>导演：<span v-if="val.directors[0]">{{val.directors[0].name}}</span></p>
          <p>主演：<span v-for="item in val.casts">{{item.name}}&nbsp;</span></p>
          <p><span>类型：</span><span v-for="item in val.genres">{{item}}&nbsp;</span></p>
        </div>
      </li>
    </router-link>
  </ul>

</template>

<script>
  import bus from '../assets/js/eventBus'
    export default {
      name:'list',
      props:{
        lis:{}
      },
      components:{},
      data:function () {
        return {
          details:{}
        }
      },
      methods:{
        getDetails:function (num) {
          this.$http.jsonp('https://api.douban.com/v2/movie/subject/'+num,{params:{id:num}}).then(function (response) {
            this.details = response.data;
            bus.$emit("sendMsg",this.details)
          })
        }
      }
    }
</script>

<style scoped>
  .list{
    width:100%;
    height:1.28rem;
    margin-bottom:0.34rem;
  }
  .pic{
    margin-right: 0.1rem;
  }
  .pic img{
    width:0.84rem;
    height:1.28rem;
    display: block;
  }
  .details{
    width:2.6rem;
    overflow:hidden;
  }
  .details p{
    font:0.14rem/0.24rem "";
    white-space: nowrap;
  }
  .details .movieName{
    font:0.18rem/0.32rem "";
  }
</style>
