<template>
  <div class="foot clearfix">
     <router-link to="/hot">
       <span class="fl tab" @click="tab">
         <span>
           <span
             class="icon hot"
             :class="{active:'hot'==onOff}"
           >
           </span>
           <span>热映</span>
         </span>
       </span>
     </router-link>
    <router-link to="/rank">
       <span class="fl tab" @click="tab">
         <span>
           <span
             class="icon rank"
             :class="{active:'rank'==onOff}"
           >
           </span>
           <span>排行</span>
         </span>
       </span>
    </router-link>
    <router-link to="/mine">
       <span class="fl tab" @click="tab">
         <span>
           <span
             class="icon mine"
             :class="{active:'mine'==onOff}"
           >
           </span>
           <span>我的</span>
         </span>
       </span>
    </router-link>
  </div>
</template>

<script>
    export default {
      name:'foot',
      components:{},
      data:function () {
        return {
          onOff:'hot'
        }
      },
      methods:{
        tab:function () {
          var that = this
          setTimeout(function () {
            var h = window.location.hash.substring(2);
            if(h=='hot'){
              that.onOff = 'hot';
            }else if(h=='rank'){
              that.onOff = 'rank';
            }else if(h=='mine'){
              that.onOff = 'mine';
            }
          })
        }
      }
    }

</script>

<style scoped>
  .foot{
    width: 100%;
    height:0.65rem;
    position: fixed;
    background: #fff;
    left:0;
    bottom:0;
    border-top:2px solid #6bcb7b;
  }
  .tab{
    width:33.3%;
    text-align: center;
    font-size:0.12rem;
    padding-top:0.14rem;
    box-sizing: border-box;
    line-height:0.15rem;
  }
  .tab span{
    display: block;
  }
  .tab .icon{
    width:0.24rem;
    height:0.18rem;
    display: inline-block;
    text-align: center;

  }
  .active~span{
    color: #6bcb7b;
  }
  .tab .hot{
    background: url("../assets/images/hot.png") no-repeat;
    background-size: 100% 100%;
  }
  .tab .hot.active{
    background: url("../assets/images/hot-active.png") no-repeat;
    background-size: 100% 100%;
  }
  .tab .rank{
    background: url("../assets/images/rank.png") no-repeat;
    background-size: 100% 100%;
  }
  .tab .rank.active{
    background: url("../assets/images/rank-active.png") no-repeat;
    background-size: 100% 100%;
  }
  .tab .mine{
    background: url("../assets/images/mine.png") no-repeat;
    background-size: 100% 100%;
  }
  .tab .mine.active{
    background: url("../assets/images/mine-active.png") no-repeat;
    background-size: 100% 100%;
  }

</style>
